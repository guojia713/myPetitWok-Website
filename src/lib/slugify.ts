/**
 * Turn a recipe name into a URL slug.
 *  - Latin scripts: lowercase, strip diacritics, hyphenate.
 *  - CJK (Chinese): keep characters as-is (modern browsers + Google handle UTF-8).
 *  - Strips parenthesized aside ("(simple version)" → "")
 */
export function slugify(input: string): string {
  let s = input
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // strip diacritics
    .replace(/[（(][^）)]*[）)]/g, '') // strip parenthesized asides
    .trim()
    .toLowerCase();

  // Replace anything that isn't a letter/number/CJK with a hyphen.
  s = s.replace(
    /[^a-z0-9㐀-鿿぀-ヿ가-힯]+/g,
    '-',
  );
  // Collapse hyphens, trim leading/trailing.
  s = s.replace(/-+/g, '-').replace(/^-|-$/g, '');
  return s;
}
