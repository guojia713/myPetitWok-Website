// Local-only helper: turns a free-text recipe into a structured draft via Claude.
//
// Run it on your PC (it never deploys):
//   ANTHROPIC_API_KEY=sk-ant-... node tools/ai-recipe.mjs
//
// The admin page (npm run dev) POSTs the dish text here; this process calls the
// Anthropic API with your key (kept on your machine, never in the browser/repo)
// and returns a structured recipe the form auto-fills.
//
// Node 22+ (uses global fetch). No npm install needed.

import { createServer } from 'node:http';

const PORT = process.env.AI_RECIPE_PORT || 8787;
const API_KEY = process.env.ANTHROPIC_API_KEY;
const MODEL = process.env.AI_RECIPE_MODEL || 'claude-sonnet-4-6';

if (!API_KEY) {
  console.error('Missing ANTHROPIC_API_KEY. Run: ANTHROPIC_API_KEY=sk-ant-... node tools/ai-recipe.mjs');
  process.exit(1);
}

// A tool forces Claude to return exactly this JSON shape (matches the admin form).
const RECIPE_TOOL = {
  name: 'emit_recipe',
  description: 'Return the structured recipe.',
  input_schema: {
    type: 'object',
    additionalProperties: false,
    properties: {
      cuisineType: { type: 'string', enum: ['CHINESE', 'JAPANESE', 'KOREAN', 'THAI', 'VIETNAMESE'] },
      difficulty: { type: 'string', enum: ['BEGINNER', 'INTERMEDIATE', 'ADVANCED'] },
      prepTimeMinutes: { type: 'integer' },
      cookTimeMinutes: { type: 'integer' },
      servings: { type: 'integer' },
      spiceLevel: { type: 'integer' },
      categories: { type: 'array', items: { type: 'string' } },
      translations: {
        type: 'object',
        additionalProperties: false,
        properties: {
          EN: { $ref: '#/$defs/tr' },
          FR: { $ref: '#/$defs/tr' },
          ZH_CN: { $ref: '#/$defs/tr' },
        },
        required: ['EN', 'FR', 'ZH_CN'],
      },
      ingredients: {
        type: 'array',
        items: {
          type: 'object',
          additionalProperties: false,
          properties: {
            ingredientId: { type: ['integer', 'null'], description: 'id from the provided list, or null if none matches' },
            nameGuess: { type: 'string', description: 'plain English ingredient name' },
            quantity: { type: 'string' },
            unit: { type: 'string' },
            optional: { type: 'boolean' },
          },
          required: ['ingredientId', 'nameGuess', 'quantity', 'unit', 'optional'],
        },
      },
      steps: {
        type: 'array',
        items: {
          type: 'object',
          additionalProperties: false,
          properties: {
            durationMinutes: { type: ['integer', 'null'] },
            translations: {
              type: 'object',
              additionalProperties: false,
              properties: {
                EN: { $ref: '#/$defs/step' },
                FR: { $ref: '#/$defs/step' },
                ZH_CN: { $ref: '#/$defs/step' },
              },
              required: ['EN', 'FR', 'ZH_CN'],
            },
          },
          required: ['durationMinutes', 'translations'],
        },
      },
    },
    required: ['cuisineType', 'difficulty', 'prepTimeMinutes', 'cookTimeMinutes', 'servings', 'spiceLevel', 'categories', 'translations', 'ingredients', 'steps'],
    $defs: {
      tr: {
        type: 'object',
        additionalProperties: false,
        properties: {
          name: { type: 'string' },
          description: { type: 'string' },
          phonetic: { type: 'string' },
        },
        required: ['name', 'description', 'phonetic'],
      },
      step: {
        type: 'object',
        additionalProperties: false,
        properties: {
          instruction: { type: 'string' },
          tip: { type: 'string' },
        },
        required: ['instruction', 'tip'],
      },
    },
  },
};

function buildPrompt(text, ingredients) {
  const list = (ingredients || [])
    .map((x) => `#${x.id} ${x.name}`)
    .join('\n');
  return [
    'You structure a cook\'s rough recipe notes into a complete recipe for the MyPetitWok app.',
    'Fill EVERY field. Provide full translations in English (EN), French (FR), and Simplified Chinese (ZH_CN) for the recipe name, description, phonetic (pinyin/romaji for ZH/JP dishes, else empty string), and every step instruction and tip.',
    'Break the method into clear numbered steps. Estimate prep/cook minutes, servings, difficulty, cuisine, and spiceLevel (0-5) if not stated.',
    '',
    'For each ingredient, set ingredientId to the matching id from this existing list when one clearly fits; otherwise null. Always fill nameGuess, quantity, unit.',
    'Existing ingredients:',
    list || '(none provided)',
    '',
    'Recipe notes:',
    text,
  ].join('\n');
}

async function generate(text, ingredients) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 8000,
      tools: [RECIPE_TOOL],
      tool_choice: { type: 'tool', name: 'emit_recipe' },
      messages: [{ role: 'user', content: buildPrompt(text, ingredients) }],
    }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data?.error?.message || `Anthropic ${res.status}`);
  const block = (data.content || []).find((b) => b.type === 'tool_use');
  if (!block) throw new Error('Model returned no structured recipe');
  return block.input;
}

createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'content-type');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  if (req.method === 'OPTIONS') { res.statusCode = 204; return res.end(); }
  if (req.method !== 'POST') { res.statusCode = 405; return res.end('POST only'); }

  let body = '';
  req.on('data', (c) => { body += c; });
  req.on('end', async () => {
    try {
      const { text, ingredients } = JSON.parse(body || '{}');
      if (!text || !text.trim()) throw new Error('Empty recipe text');
      const recipe = await generate(text, ingredients);
      res.setHeader('content-type', 'application/json');
      res.end(JSON.stringify({ recipe }));
    } catch (e) {
      res.statusCode = 400;
      res.setHeader('content-type', 'application/json');
      res.end(JSON.stringify({ error: String(e.message || e) }));
    }
  });
}).listen(PORT, () => {
  console.log(`AI recipe helper on http://localhost:${PORT}  (model: ${MODEL})`);
});
