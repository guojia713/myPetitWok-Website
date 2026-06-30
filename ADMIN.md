# MyPetitWok — Admin Console Manual

A **local-only** tool for creating and editing recipes and ingredients on the
live backend (`https://api.mypetitwok.com`), with optional AI assistance to
draft recipes from rough notes.

> ⚠️ This console runs **only on your own machine** via `npm run dev`. It is
> never published — a production build (`npm run build`) emits only a tiny stub
> at `/admin`, with no login form, no logic, and nothing in the sitemap. All
> writes are still protected by the backend, which requires a `ROLE_ADMIN`
> account on every create/update/delete.

---

## What you need once

- An **admin account** on the MyPetitWok backend (a user whose role is `ROLE_ADMIN`).
- For AI fill only: an **Anthropic API key** from <https://console.anthropic.com>
  (starts with `sk-ant-`). Optional — everything else works without it.
- Node ≥ 22.12 (already required by the project).

---

## Quick start

### 1. Start the site

```bash
npm run dev
```

Open **http://localhost:4321/admin** and sign in with your admin email + password.

That's all you need to **create and edit recipes and ingredients**.

### 2. (Optional) Start the AI helper

Only needed if you want the **✨ AI fill** button on the recipe form. Open a
**second terminal** (leave `npm run dev` running in the first) and run:

```bash
ANTHROPIC_API_KEY=sk-ant-your-real-key-here node tools/ai-recipe.mjs
```

Keep this terminal open while you use AI fill. It should print:

```
AI recipe helper on http://localhost:8787  (model: claude-sonnet-4-6)
```

---

## Using the console

The console has three tabs.

### Add ingredient

Fill the fields and click **Create ingredient**:

- **Native / Asian name** (required) — e.g. `老抽`
- **Category** — SAUCE / SPICE / VEGETABLE / PROTEIN / OIL / OTHER
- **Asian ingredient** — check this if it should appear in the app's Asian
  ingredient guide and get its own web page. (Plain ingredients like "peanuts"
  can stay unchecked — they still appear inside any recipe that uses them.)
- **Substitute ingredient ID**, **Joybuy URL** — optional
- **Translations** — name (English required) + description + where-to-find, for
  EN / FR / ZH_CN
- **Photo** — optional; uploaded right after the ingredient is created

### Add recipe

- Metadata: cuisine, difficulty, prep/cook minutes, servings, spice (0–5),
  categories (comma-separated)
- Translations: name (English required) + description + phonetic, per language
- **Ingredients** — click **+ row**, pick an existing ingredient, set quantity,
  unit (dropdown), and optional flag
- **Steps** — click **+ step**, set duration and instruction/tip per language
- **Main dish photo** — optional
- **Create recipe (draft)** saves it as an unpublished draft.

> Recipes are created as **drafts**. **Publish them from your mobile app** — the
> web console only creates and edits.

### Manage

Lists existing **Recipes** (incl. drafts) or **Ingredients**, with search and
(for recipes) paging. Click **Edit** on any row to load it into the matching
form — change anything and click **Save changes**. **Cancel edit** returns to a
blank form.

> When editing, the form pulls all three languages. If a recipe has no real
> French/Chinese translation, those columns are pre-filled with the English
> fallback — clear any column you don't actually have a translation for before
> saving, so you don't store fake translations.

---

## ✨ AI fill (recipe form)

Lets you draft a full recipe from rough notes instead of typing every field.

1. Make sure the **AI helper** is running (step 2 above).
2. On the **Add recipe** tab, paste the recipe into the **AI fill** box — any
   language, however messy. Example:

   > Kung pao chicken. Diced chicken, peanuts, dried chili. Marinate, fry, add
   > soy/vinegar/sugar sauce, toss with peanuts. ~25 min, serves 2, medium spicy.

3. Click **Generate & fill form**. In a few seconds the form fills in: cuisine,
   times, servings, spice, EN/FR/ZH names + descriptions, ingredient rows
   (matched to your existing ingredients), and numbered steps in all three
   languages.
4. **Review and fix** anything, add a photo, then click **Create recipe (draft)**.

If an ingredient isn't in your database yet, that row's dropdown is left empty
and the status line names it (`Pick ingredients for: …`). Add it on the
**Add ingredient** tab first, or pick a substitute manually.

### Changing the AI model

The helper defaults to `claude-sonnet-4-6`. Override per run:

```bash
ANTHROPIC_API_KEY=sk-ant-... AI_RECIPE_MODEL=claude-opus-4-8 node tools/ai-recipe.mjs
```

Or change the default in [`tools/ai-recipe.mjs`](tools/ai-recipe.mjs)
(`const MODEL = ...`). Valid IDs: `claude-sonnet-4-6` (balanced, default),
`claude-opus-4-8` (highest quality), `claude-haiku-4-5` (cheapest). Use the
exact strings — a wrong ID returns 404. Cost is roughly a cent or two per recipe.

---

## Troubleshooting

| Symptom | Cause / fix |
|---|---|
| **Login failed: Invalid email or password** | Wrong credentials — try the same login in the app. |
| **This account is not an admin** | The account isn't `ROLE_ADMIN`. Use your admin account. |
| **Login failed: Failed to fetch** | You're not on a `localhost` origin (or the API is unreachable). Use `npm run dev` and `http://localhost:4321/admin`. |
| **AI: "Helper not running"** | The helper isn't up. Start it in a second terminal (step 2). It must stay open. |
| **Helper exits immediately** | Usually a missing API key. Put `ANTHROPIC_API_KEY=...` and `node ...` on the **same line**, with your real key, run from the project folder. |
| **New recipe/ingredient not in the app** | The app may cache — fully close and reopen it. Asian-ingredient guides only show items flagged "Asian ingredient". Recipes must be **published** in the app. |
| **New recipe not on the website** | The website only builds pages for IDs in `src/lib/featured.ts`. Add the new recipe's ID there and redeploy. |

---

## How it stays private

- `/admin` is gated behind `import.meta.env.DEV`, so it exists **only** under
  `npm run dev`. Production builds emit a stub with no admin code.
- The login token lives in `sessionStorage` (cleared when you close the tab).
- The Anthropic API key lives **only** in the helper's terminal — never in the
  browser, never committed to the repo.
- The backend enforces `ROLE_ADMIN` on every write regardless of the UI.

---

## Files

- [`src/pages/admin/index.astro`](src/pages/admin/index.astro) — the console (dev-only).
- [`tools/ai-recipe.mjs`](tools/ai-recipe.mjs) — the local AI helper.
