// Build-time API client for the MyPetitWok backend.
// All fetches happen during `astro build` — the browser never calls the API.

const API_BASE_URL = import.meta.env.API_BASE_URL ?? 'https://api.mypetitwok.com';

import type { Lang } from '../i18n/content';

// Build-time cache: each unique URL is fetched at most once per build.
// Multiple pages call these helpers independently; without this, a build fires
// 100+ requests and trips the backend rate limiter (HTTP 429), silently
// dropping pages from the output.
const fetchCache = new Map<string, Promise<unknown>>();

function cachedFetchJson<T>(url: string): Promise<T | null> {
  if (!fetchCache.has(url)) {
    fetchCache.set(
      url,
      (async () => {
        try {
          const res = await fetch(url);
          if (!res.ok) {
            console.warn(`[api] ${url} → ${res.status}`);
            return null;
          }
          return await res.json();
        } catch (err) {
          console.warn(`[api] ${url} failed:`, err);
          return null;
        }
      })(),
    );
  }
  return fetchCache.get(url) as Promise<T | null>;
}

/** Map site language code (en/fr/zh) → backend lang code (EN/FR/ZH_CN). */
export const apiLang: Record<Lang, 'EN' | 'FR' | 'ZH_CN'> = {
  en: 'EN',
  fr: 'FR',
  zh: 'ZH_CN',
};

export interface RecipeIngredient {
  ingredientId: number;
  name: string;
  asianName: string | null;
  quantity: string;
  unit: string;
  optional: boolean;
  imageUrl: string | null;
  whereToFind: string | null;
  asianIngredient: boolean;
  joybuyUrl: string | null;
  substitute: string | null;
}

export interface RecipeStep {
  stepOrder: number;
  instruction: string;
  tip: string | null;
  imageUrl: string | null;
  durationMinutes: number | null;
}

export interface RecipeDetail {
  id: number;
  name: string;
  description: string;
  phonetic: string | null;
  cuisineType: string;
  difficulty: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  spiceLevel: number;
  servings: number;
  imageUrl: string | null;
  favouriteCount: number;
  categories: string[];
  published: boolean;
  ingredients: RecipeIngredient[];
  steps: RecipeStep[];
}

/** Fetch a single recipe in the given language. Returns null on 404/error. */
export async function fetchRecipe(id: number, lang: Lang): Promise<RecipeDetail | null> {
  const url = `${API_BASE_URL}/api/v1/recipes/${id}?lang=${apiLang[lang]}`;
  const data = await cachedFetchJson<RecipeDetail>(url);
  if (!data) return null;
  // Defensive cleanup — strip stray whitespace from user-entered fields.
  // Return a copy so callers can't mutate the cached object.
  return {
    ...data,
    name: data.name?.trim(),
    description: data.description?.trim(),
    phonetic: data.phonetic?.trim() || null,
  };
}

export interface IngredientDetail {
  id: number;
  name: string;
  asianName: string | null;
  description: string;
  whereToFind: string | null;
  imageUrl: string | null;
  category: string;
  asianIngredient: boolean;
  joybuyUrl: string | null;
  substitute: string | null;
}

/** Fetch the full ingredient list in a single language (paginated under the hood). */
export async function fetchIngredients(lang: Lang): Promise<IngredientDetail[]> {
  const url = `${API_BASE_URL}/api/v1/ingredients?lang=${apiLang[lang]}&size=200`;
  const data = await cachedFetchJson<unknown>(url);
  if (!data) return [];
  const items: IngredientDetail[] = Array.isArray(data)
    ? data
    : ((data as { content?: IngredientDetail[] }).content ?? []);
  return items.map((x) => ({
    ...x,
    name: x.name?.trim(),
    description: x.description?.trim() ?? '',
    whereToFind: x.whereToFind?.trim() || null,
  }));
}

/** Fetch the same ingredient list in all 3 languages, keyed by id. */
export async function fetchIngredientsAllLangs(): Promise<
  Record<Lang, Map<number, IngredientDetail>>
> {
  const [en, fr, zh] = await Promise.all([
    fetchIngredients('en'),
    fetchIngredients('fr'),
    fetchIngredients('zh'),
  ]);
  const toMap = (arr: IngredientDetail[]) => new Map(arr.map((x) => [x.id, x]));
  return { en: toMap(en), fr: toMap(fr), zh: toMap(zh) };
}

/** Fetch the same recipe in all 3 languages. */
export async function fetchRecipeAllLangs(
  id: number,
): Promise<Record<Lang, RecipeDetail | null>> {
  const [en, fr, zh] = await Promise.all([
    fetchRecipe(id, 'en'),
    fetchRecipe(id, 'fr'),
    fetchRecipe(id, 'zh'),
  ]);
  return { en, fr, zh };
}
