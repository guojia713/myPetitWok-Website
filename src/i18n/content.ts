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
      scanToPreview: 'Test on Android with me',
    },
    story: {
      title: 'Our story',
      text: "A dedicated foodie, raised in Xi'an, China — a historic and gastronomic city — who became a developer in France, then a mom of two boys. With a deeply rooted love for Chinese cuisine, even after 12 years in France, I still love cooking delicious Asian meals for the whole family.\n\nPassionate about life, coding, food and social connection, this warm little tool was born: my petit wok / 小锅.\n\nYou love Asian cuisine but don't know how to cook it? Not sure where to buy the ingredients? All-in-one solution! MyPetitWok helps you easily make authentic homemade Asian dishes — good for your health and absolutely delicious.",
    },
    features: {
      title: "What's inside",
      items: [
        'Explore recipes — authentic Asian dishes from Chinese, Thai, Vietnamese, Japanese & Korean kitchens, with step-by-step guides, reviews and detailed ingredients',
        'Explore Asian ingredients — discover sauces, spices and more, with descriptions, where to buy, and online shopping links',
        'Save your favourites — heart the recipes you love and find them in one tap',
      ],
    },
    more: {
      title: 'And also…',
      items: [
        { label: '3 languages', desc: 'Cook in English, French or Chinese — your choice' },
        { label: 'Rate & review', desc: 'Share your cooking experience and photos with the community' },
        { label: 'Share recipes', desc: 'Send recipes as text or export a printable PDF for the kitchen' },
        { label: 'Push notifications', desc: 'Be the first to know when new recipes drop' },
        { label: 'Where to buy', desc: 'Links to online shops for hard-to-find Asian ingredients' },
        { label: '100% free', desc: 'All recipes and features, completely free' },
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
      scanToPreview: 'Testez sur Android avec moi',
    },
    story: {
      title: 'Notre histoire',
      text: "Gourmande confirmée, élevée à Xi'an en Chine, une ville historique et gastronomique, devenue développeuse en France, puis maman de deux garçons. Avec un goût profondément ancré pour la cuisine chinoise, même après 12 ans en France, j'adore toujours cuisiner de bons plats asiatiques pour toute la famille.\n\nPassionnée de vie, de programmation, de gastronomie et de lien social, est né cet outil chaleureux : my petit wok / 小锅.\n\nTu adores la cuisine asiatique mais tu ne sais pas comment la cuisiner ? Tu ne sais pas où acheter les ingrédients ? Solution tout-en-un ! MyPetitWok t'aide à réaliser facilement des plats asiatiques maison authentiques, bien pour ta santé et délicieux !",
    },
    features: {
      title: 'Ce que vous trouverez',
      items: [
        'Explorez les recettes — des plats asiatiques authentiques chinois, thaïlandais, vietnamiens, japonais et coréens, avec guides pas à pas, avis et ingrédients détaillés',
        'Explorez les ingrédients asiatiques — découvrez sauces, épices et plus, avec descriptions, où les acheter et liens de boutiques en ligne',
        'Sauvegardez vos favoris — ajoutez un cœur et retrouvez-les en un clic',
      ],
    },
    more: {
      title: 'Et aussi…',
      items: [
        { label: '3 langues', desc: 'Cuisinez en français, anglais ou chinois — à vous de choisir' },
        { label: 'Avis & photos', desc: 'Partagez votre expérience culinaire et vos photos avec la communauté' },
        { label: 'Partage de recettes', desc: 'Envoyez vos recettes par message ou exportez un PDF imprimable' },
        { label: 'Notifications', desc: 'Soyez prévenu dès qu\'une nouvelle recette est publiée' },
        { label: 'Où acheter', desc: 'Liens vers des boutiques en ligne pour les ingrédients introuvables' },
        { label: '100% gratuit', desc: 'Toutes les recettes et fonctionnalités, entièrement gratuites' },
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
      scanToPreview: '扫码在安卓上体验',
    },
    story: {
      title: '我们的故事',
      text: '西安碳水养大的资深吃货，养成了程序媛，又养成了俩娃的宝妈。养成了身在法国依然根深蒂固的中餐口味，也养成了自己开伙做全家美食的"实战能力"。\n\n爱生活，爱编程，爱美食，爱社交，于是诞生了这个温暖的小工具——my petit wok / 小锅。\n\n爱吃中餐不会做？不知道上哪买食材？一站式解决！小锅帮你轻松做出地道的家常中餐！还有其他亚洲美味',
    },
    features: {
      title: '功能介绍',
      items: [
        '探索菜谱 — 中餐、泰餐、越南菜、日料和韩餐，附详细步骤指导、用户评价和食材清单',
        '探索亚洲食材 — 酱料、香料等详细介绍，告诉你去哪买，还有在线购买链接',
        '收藏你的最爱 — 一键收藏，随时找到心仪菜谱',
      ],
    },
    more: {
      title: '更多亮点',
      items: [
        { label: '三种语言', desc: '支持中文、英文和法文，随心切换' },
        { label: '评价与晒图', desc: '分享你的烹饪体验和美食照片' },
        { label: '分享菜谱', desc: '发送菜谱文字或导出可打印的PDF' },
        { label: '推送通知', desc: '新菜谱上线，第一时间知道' },
        { label: '哪里买', desc: '提供在线购买链接，轻松找到亚洲特色食材' },
        { label: '完全免费', desc: '所有菜谱和功能，全部免费' },
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
