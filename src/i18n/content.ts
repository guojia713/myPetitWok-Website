export const languages = ['en', 'fr', 'zh'] as const;
export type Lang = (typeof languages)[number];

export const langLabels: Record<Lang, string> = {
  en: 'EN',
  fr: 'FR',
  zh: '中文',
};

export const defaultLang: Lang = 'en';

const translations: Record<Lang, {
  nav: { features: string; download: string };
  hero: {
    tagline: string;
    comingSoon: string;
    scanToPreview: string;
  };
  story: { title: string; text: string };
  features: {
    title: string;
    items: string[];
  };
  more: {
    title: string;
    items: { label: string; desc: string }[];
  };
  download: {
    title: string;
    comingSoon: string;
    scanQr: string;
  };
  footer: {
    contact: string;
    email: string;
    rights: string;
  };
}> = {
  en: {
    nav: { features: 'Features', download: 'Download' },
    hero: {
      tagline: 'Sweet, sour, spicy — vibrant Asian flavors made simple at home.',
      comingSoon: 'Coming Soon',
      scanToPreview: 'Scan to preview',
    },
    story: {
      title: 'Our story',
      text: "A dedicated foodie, raised in Xi'an, China — a historic and gastronomic city — who became a developer in France, then a mom of two boys. With a deeply rooted love for Chinese cuisine, even after 12 years in France, I still love cooking delicious Asian meals for the whole family.\n\nPassionate about life, coding, food and social connection, this warm little tool was born: my petit wok / 小锅.\n\nYou love Asian cuisine but don't know how to cook it? Not sure where to buy the ingredients? All-in-one solution! MyPetitWok helps you easily make authentic homemade Asian dishes — good for your health and absolutely delicious.",
    },
    features: {
      title: "What's inside",
      items: [
        'Curated Asian recipes with ingredient guides and where to find them',
        'Filter recipes by cuisine, category, and spice level to find exactly what you want',
        'Save your favourite recipes and come back to them anytime',
        'Get notified when new recipes are published',
        'Introduction to Asian ingredients: what they are, how to use them, and where to find them',
      ],
    },
    more: {
      title: 'And also…',
      items: [
        { label: 'Multilingual', desc: 'Available in English, French, and Chinese' },
        { label: 'Offline mode', desc: 'Access your saved recipes even without internet' },
        { label: 'Share recipes', desc: 'Send beautiful recipe cards to friends and family' },
        { label: 'Ratings', desc: 'Rate recipes and see what the community loves' },
        { label: 'Where to buy', desc: 'Links to online shops for hard-to-find ingredients' },
        { label: 'Free & no ads', desc: 'A clean experience with no interruptions' },
      ],
    },
    download: {
      title: 'Get the app',
      comingSoon: 'Coming soon on App Store & Google Play',
      scanQr: 'Scan to preview',
    },
    footer: {
      contact: 'Have a suggestion or a recipe to share? We\'d love to hear from you.',
      email: 'hello@mypetitwok.com',
      rights: 'All rights reserved.',
    },
  },
  fr: {
    nav: { features: 'Fonctions', download: 'Télécharger' },
    hero: {
      tagline: 'Sucré, acide, épicé — des saveurs asiatiques éclatantes, simples à préparer chez soi.',
      comingSoon: 'Bientôt disponible',
      scanToPreview: 'Scanner pour découvrir',
    },
    story: {
      title: 'Notre histoire',
      text: "Gourmande confirmée, élevée à Xi'an en Chine, une ville historique et gastronomique, devenue développeuse en France, puis maman de deux garçons. Avec un goût profondément ancré pour la cuisine chinoise, même après 12 ans en France, j'adore toujours cuisiner de bons plats asiatiques pour toute la famille.\n\nPassionnée de vie, de programmation, de gastronomie et de lien social, est né cet outil chaleureux : my petit wok / 小锅.\n\nTu adores la cuisine asiatique mais tu ne sais pas comment la cuisiner ? Tu ne sais pas où acheter les ingrédients ? Solution tout-en-un ! MyPetitWok t'aide à réaliser facilement des plats asiatiques maison authentiques, bien pour ta santé et délicieux !",
    },
    features: {
      title: 'Ce que vous trouverez',
      items: [
        "Des recettes asiatiques sélectionnées avec guides d'ingrédients et où les trouver",
        'Filtrez les recettes par cuisine, catégorie et niveau de piment pour trouver exactement ce que vous voulez',
        'Sauvegardez vos recettes favorites et retrouvez-les quand vous voulez',
        'Recevez une notification à chaque nouvelle recette publiée',
        'Découvrez les ingrédients asiatiques : ce qu\'ils sont, comment les utiliser et où les trouver',
      ],
    },
    more: {
      title: 'Et aussi…',
      items: [
        { label: 'Multilingue', desc: 'Disponible en anglais, français et chinois' },
        { label: 'Mode hors-ligne', desc: 'Consultez vos recettes sauvegardées sans connexion' },
        { label: 'Partage de recettes', desc: 'Envoyez de jolies fiches recettes à vos proches' },
        { label: 'Notes', desc: 'Notez les recettes et découvrez les préférées de la communauté' },
        { label: 'Où acheter', desc: 'Liens vers des boutiques en ligne pour les ingrédients rares' },
        { label: 'Gratuit et sans pub', desc: 'Une expérience fluide, sans interruption' },
      ],
    },
    download: {
      title: "Télécharger l'app",
      comingSoon: 'Bientôt disponible sur App Store & Google Play',
      scanQr: 'Scanner pour découvrir',
    },
    footer: {
      contact: 'Une suggestion ou une recette à partager ? Écrivez-nous.',
      email: 'hello@mypetitwok.com',
      rights: 'Tous droits réservés.',
    },
  },
  zh: {
    nav: { features: '功能', download: '下载' },
    hero: {
      tagline: '酸甜苦辣，一应俱全 — 在家轻松烹饪地道亚洲美食。',
      comingSoon: '即将上线',
      scanToPreview: '扫码预览',
    },
    story: {
      title: '我们的故事',
      text: '西安碳水养大的资深吃货，养成了程序媛，又养成了俩娃的宝妈。养成了身在法国依然根深蒂固的中餐口味，也养成了自己开伙做全家美食的"实战能力"。\n\n爱生活，爱编程，爱美食，爱社交，于是诞生了这个温暖的小工具——my petit wok / 小锅。\n\n爱吃中餐不会做？不知道上哪买食材？一站式解决！小锅帮你轻松做出地道的家常中餐！还有其他亚洲美味',
    },
    features: {
      title: '功能介绍',
      items: [
        '精选亚洲菜谱，附食材指南及购买渠道',
        '按菜系、分类和辣度筛选菜谱，精准找到你想要的',
        '收藏喜爱的菜谱，随时查看',
        '新菜谱上线时，第一时间收到通知',
        '亚洲食材介绍：了解它们是什么、如何使用以及去哪里购买',
      ],
    },
    more: {
      title: '更多亮点',
      items: [
        { label: '多语言', desc: '支持中文、英文和法文' },
        { label: '离线模式', desc: '没有网络也能查看已保存的菜谱' },
        { label: '分享菜谱', desc: '将精美菜谱卡片分享给亲朋好友' },
        { label: '评分', desc: '为菜谱评分，看看大家最喜欢哪道菜' },
        { label: '哪里买', desc: '提供在线购买链接，轻松找到特色食材' },
        { label: '免费无广告', desc: '干净清爽的使用体验' },
      ],
    },
    download: {
      title: '下载应用',
      comingSoon: '即将登陆 App Store 和 Google Play',
      scanQr: '扫码预览',
    },
    footer: {
      contact: '有建议或想分享菜谱？欢迎联系我们。',
      email: 'hello@mypetitwok.com',
      rights: '版权所有。',
    },
  },
};

export function t(lang: Lang) {
  return translations[lang] ?? translations[defaultLang];
}
