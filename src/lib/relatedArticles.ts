import type { Lang } from '../i18n/content';

/**
 * Reverse index: ingredient ID → article that discusses it.
 * Renders a "related reading" link on ingredient detail pages, completing the
 * two-way link between ingredients and the comparison articles.
 */
interface ArticleLink {
  slug: string;
  title: Record<Lang, string>;
}

const ARTICLE_BY_INGREDIENT: Record<number, ArticleLink> = {
  2: {
    slug: 'light-vs-dark-soy-sauce',
    title: {
      en: 'Light soy sauce vs dark soy sauce: what\'s the difference?',
      fr: 'Sauce soja claire vs sauce soja foncée : quelle différence ?',
      zh: '生抽和老抽有什么区别？',
    },
  },
  3: {
    slug: 'light-vs-dark-soy-sauce',
    title: {
      en: 'Light soy sauce vs dark soy sauce: what\'s the difference?',
      fr: 'Sauce soja claire vs sauce soja foncée : quelle différence ?',
      zh: '生抽和老抽有什么区别？',
    },
  },
  119: {
    slug: 'yakitori-vs-teriyaki',
    title: {
      en: 'Yakitori sauce vs teriyaki sauce: what\'s the difference?',
      fr: 'Sauce yakitori vs sauce teriyaki : quelle différence ?',
      zh: '烤鸡肉串酱和照烧酱有什么区别？',
    },
  },
  120: {
    slug: 'yakitori-vs-teriyaki',
    title: {
      en: 'Yakitori sauce vs teriyaki sauce: what\'s the difference?',
      fr: 'Sauce yakitori vs sauce teriyaki : quelle différence ?',
      zh: '烤鸡肉串酱和照烧酱有什么区别？',
    },
  },
};

export function relatedArticle(ingredientId: number, lang: Lang) {
  const a = ARTICLE_BY_INGREDIENT[ingredientId];
  if (!a) return null;
  return { href: `/${lang}/articles/${a.slug}`, title: a.title[lang] };
}
