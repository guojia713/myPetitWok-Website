/**
 * Build a reverse index: ingredientId → array of featured recipes that use it.
 * Used by ingredient detail pages to show "Used in these recipes" links.
 */
import { fetchRecipe } from './api';
import type { Lang } from '../i18n/content';
import { FEATURED_RECIPE_IDS } from './featured';
import { slugify } from './slugify';

export interface RecipeRef {
  id: number;
  slug: string;
  name: string;
  imageUrl: string | null;
}

export async function buildIngredientToRecipes(
  lang: Lang,
): Promise<Map<number, RecipeRef[]>> {
  const recipes = (
    await Promise.all(FEATURED_RECIPE_IDS.map((id) => fetchRecipe(id, lang)))
  ).filter((r): r is NonNullable<typeof r> => r !== null);

  const map = new Map<number, RecipeRef[]>();
  for (const r of recipes) {
    const ref: RecipeRef = {
      id: r.id,
      slug: slugify(r.name),
      name: r.name,
      imageUrl: r.imageUrl,
    };
    for (const ing of r.ingredients) {
      const arr = map.get(ing.ingredientId) ?? [];
      arr.push(ref);
      map.set(ing.ingredientId, arr);
    }
  }
  return map;
}
