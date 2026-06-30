// Local-only helper: tells IndexNow (Bing, Yandex, etc.) about every URL in the
// built sitemap, so new/updated pages get crawled within minutes instead of days.
//
// Run it after a build, on your PC or in a deploy step:
//   node tools/indexnow-submit.mjs
//
// It reads the generated sitemap in ./dist, collects every <loc>, and sends one
// IndexNow POST. The key file must also be live at:
//   https://mypetitwok.com/025508d982365f2a903453c997a5a493.txt
//
// Node 22+ (uses global fetch). No npm install needed.

import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const HOST = process.env.INDEXNOW_HOST || 'mypetitwok.com';
const KEY = process.env.INDEXNOW_KEY || '025508d982365f2a903453c997a5a493';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const DIST = 'dist';
const ENDPOINT = 'https://api.indexnow.org/indexnow';

// Pull every <loc>...</loc> out of an XML string.
const extractLocs = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());

// Read the sitemap index, then each child sitemap it references, and merge URLs.
async function collectUrls() {
  const files = await readdir(DIST);
  const sitemapFiles = files.filter((f) => f.startsWith('sitemap') && f.endsWith('.xml'));
  if (sitemapFiles.length === 0) {
    throw new Error(`No sitemap*.xml in ./${DIST}. Run "npm run build" first.`);
  }

  const urls = new Set();
  for (const file of sitemapFiles) {
    const xml = await readFile(join(DIST, file), 'utf8');
    for (const loc of extractLocs(xml)) {
      // The index file lists child sitemaps (also .xml) — skip those, keep pages.
      if (loc.endsWith('.xml')) continue;
      urls.add(loc);
    }
  }
  return [...urls];
}

async function main() {
  const urlList = await collectUrls();
  if (urlList.length === 0) {
    console.error('No page URLs found in the sitemap. Nothing to submit.');
    process.exit(1);
  }

  console.log(`Submitting ${urlList.length} URL(s) to IndexNow as ${HOST}...`);
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });

  // IndexNow returns 200/202 on success; 403 = key file not reachable, 422 = bad URLs.
  const body = await res.text();
  if (res.ok) {
    console.log(`✓ IndexNow accepted the submission (HTTP ${res.status}).`);
  } else {
    console.error(`✗ IndexNow rejected the submission (HTTP ${res.status}). ${body}`);
    if (res.status === 403) {
      console.error(`  Make sure ${KEY_LOCATION} is live and returns exactly the key.`);
    }
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
