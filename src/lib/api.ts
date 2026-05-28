// Build-time API client for the MyPetitWok backend.
// All fetches happen during `astro build` — the browser never calls the API.

const API_BASE_URL = import.meta.env.API_BASE_URL ?? 'https://api.mypetitwok.com';

import type { Lang } from '../i18n/content';

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
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`[api] ${url} → ${res.status}`);
      return null;
    }
    return (await res.json()) as RecipeDetail;
  } catch (err) {
    console.warn(`[api] ${url} failed:`, err);
    return null;
  }
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
