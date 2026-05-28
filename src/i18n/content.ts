export const languages = ['en', 'fr', 'zh'] as const;
export type Lang = (typeof languages)[number];

export const langLabels: Record<Lang, string> = {
  en: 'EN',
  fr: 'FR',
  zh: '中文',
};

export const defaultLang: Lang = 'en';

// Launch date - 13 July 2026 (used by the countdown banner)
export const launchDate = '2026-07-13T00:00:00';

const translations: Record<Lang, {
  pageTitle: string;
  metaDescription: string;
  nav: { features: string; story: string; download: string };
  launch: { prefix: string; live: string };
  countdown: { days: string; hours: string; minutes: string; seconds: string };
  hero: {
    headline: string;
    tagline: string;
    launchPill: string;
    badgeWhen: string;
    trust: string[];
  };
  overview: { title: string; subtitle: string; growth: string };
  features: {
    title: string;
    items: { heading: string; text: string }[];
  };
  more: {
    title: string;
    items: { label: string; desc: string }[];
  };
  story: { title: string; text: string };
  download: {
    title: string;
    subtitle: string;
    webNote: string;
  };
  footer: {
    contact: string;
    email: string;
    rights: string;
  };
  recipes: {
    navLabel: string;
    indexTitle: string;
    indexDescription: string;
    indexHeading: string;
    indexIntro: string;
    minutes: string;
    servings: string;
    prep: string;
    cook: string;
    difficulty: string;
    ingredients: string;
    steps: string;
    optional: string;
    saveCtaTitle: string;
    saveCtaText: string;
    saveCtaButton: string;
    notFoundTitle: string;
    notFoundText: string;
    backToList: string;
    whereToFind: string;
    buyOnJoybuy: string;
    difficultyLabels: { BEGINNER: string; INTERMEDIATE: string; ADVANCED: string };
    cuisineLabels: { CHINESE: string; JAPANESE: string; KOREAN: string; THAI: string; VIETNAMESE: string };
  };
}> = {
  en: {
    pageTitle: 'MyPetitWok — Free Asian Recipe App for Authentic Home Cooking',
    metaDescription: 'Discover authentic Chinese, Thai, Vietnamese, Japanese and Korean recipes. MyPetitWok helps you cook Asian food at home with recipes, ingredient guides and shopping tips. Launching July 13, 2026 — free on iPhone & Android.',
    nav: { features: 'Features', story: 'Our story', download: 'Get the app' },
    launch: {
      prefix: 'MyPetitWok launches July 13, 2026 - free on iPhone & Android',
      live: 'MyPetitWok is live - download it free today!',
    },
    countdown: { days: 'days', hours: 'hrs', minutes: 'min', seconds: 'sec' },
    hero: {
      headline: 'The easiest way to cook authentic Asian food at home',
      tagline: 'Discover, cook and save authentic Asian recipes - Chinese, Thai, Vietnamese, Japanese & Korean. Sweet, sour, spicy, all made simple.',
      launchPill: 'Free · Launching July 13, 2026',
      badgeWhen: 'July 13',
      trust: ['100% free', '3 languages', 'iPhone & Android'],
    },
    overview: {
      title: 'All your Asian recipes, all in one place',
      subtitle: 'An all-in-one recipe book, ingredient guide and shopping helper for authentic Asian home cooking - completely free.',
      growth: 'Fresh recipes every week - and more features on the way.',
    },
    features: {
      title: "What's inside",
      items: [
        {
          heading: 'Explore real recipes',
          text: 'Authentic dishes from Chinese, Thai, Vietnamese, Japanese and Korean kitchens. Step-by-step guides, ingredient lists, reviews and photos - so you get it right the first time.',
        },
        {
          heading: 'Know your ingredients',
          text: "Not sure what that sauce or spice is, or where to buy it? Browse clear descriptions of Asian ingredients, with tips on how to find them in your local Asian store.",
        },
        {
          heading: 'Save your favourites',
          text: 'Heart the recipes you love and find them again in a single tap. Your personal Asian cookbook, always in your pocket.',
        },
      ],
    },
    more: {
      title: 'And also…',
      items: [
        { label: '3 languages', desc: 'Cook in English, French or Chinese - your choice' },
        { label: 'Review', desc: 'Share your cooking experience and photos with the community' },
        { label: 'Share recipes', desc: 'Send recipes as text or export a printable PDF for the kitchen' },
        { label: 'Push notifications', desc: 'Be the first to know when new recipes drop' },
        { label: 'Find them in store', desc: 'Get to know Asian ingredients and the recipes they belong to - so you can find them easily at your local Asian grocery' },
        { label: '100% free', desc: 'Every recipe and feature is free - supported by ads, no subscriptions or paywalls' },
      ],
    },
    story: {
      title: 'Our story',
      text: "A dedicated foodie, raised in Xi'an, China - a historic and gastronomic city - who became a developer in France, then a mom of two boys. With a deeply rooted love for Chinese cuisine, even after 12 years in France, I still love cooking delicious Asian meals for the whole family.\n\nPassionate about life, coding, food and social connection, this warm little tool was born: my petit wok / 小锅.\n\nYou love Asian cuisine but don't know how to cook it? Not sure where to buy the ingredients? All-in-one solution! MyPetitWok helps you easily make authentic homemade Asian dishes - good for your health and absolutely delicious.",
    },
    download: {
      title: 'Be ready for launch day',
      subtitle: 'MyPetitWok arrives July 13, 2026 on the App Store and Google Play - free.',
      webNote: 'A web version is coming later.',
    },
    footer: {
      contact: 'Have a suggestion or a recipe to share? We\'d love to hear from you.',
      email: 'hello@mypetitwok.com',
      rights: 'All rights reserved.',
    },
    recipes: {
      navLabel: 'Recipes',
      indexTitle: 'Authentic Asian Recipes — MyPetitWok',
      indexDescription: 'Browse free authentic Asian recipes — Chinese, Japanese, Vietnamese and more. Step-by-step home cooking with the MyPetitWok app.',
      indexHeading: 'Authentic Asian recipes',
      indexIntro: 'A small selection of recipes from the MyPetitWok app — free, step-by-step, made for home cooks. The full library lives in the app.',
      minutes: 'min',
      servings: 'servings',
      prep: 'Prep',
      cook: 'Cook',
      difficulty: 'Difficulty',
      ingredients: 'Ingredients',
      steps: 'Steps',
      optional: 'optional',
      saveCtaTitle: 'Love this recipe?',
      saveCtaText: 'Save it to your cookbook, get more recipes, an ingredient guide and shopping help — all in the free MyPetitWok app.',
      saveCtaButton: 'Get the free app',
      notFoundTitle: 'Recipe not found',
      notFoundText: 'This recipe is no longer available.',
      backToList: 'Back to all recipes',
      whereToFind: 'Where to find it',
      buyOnJoybuy: 'Buy online',
      difficultyLabels: { BEGINNER: 'Easy', INTERMEDIATE: 'Medium', ADVANCED: 'Hard' },
      cuisineLabels: { CHINESE: 'Chinese', JAPANESE: 'Japanese', KOREAN: 'Korean', THAI: 'Thai', VIETNAMESE: 'Vietnamese' },
    },
  },
  fr: {
    pageTitle: 'MyPetitWok — Application gratuite de recettes asiatiques maison',
    metaDescription: 'Découvrez des recettes asiatiques authentiques — chinoises, thaïes, vietnamiennes, japonaises et coréennes. MyPetitWok vous aide à cuisiner asiatique chez vous avec recettes, guide des ingrédients et conseils pour les courses. Lancement le 13 juillet 2026 — gratuit sur iPhone et Android.',
    nav: { features: 'Fonctions', story: 'Notre histoire', download: "Obtenir l'app" },
    launch: {
      prefix: 'MyPetitWok arrive le 13 juillet 2026 - gratuit sur iPhone & Android',
      live: 'MyPetitWok est disponible - téléchargez-le gratuitement !',
    },
    countdown: { days: 'jours', hours: 'h', minutes: 'min', seconds: 'sec' },
    hero: {
      headline: 'La façon la plus simple de cuisiner asiatique à la maison',
      tagline: 'Découvrez, cuisinez et sauvegardez des recettes asiatiques authentiques - chinoises, thaïes, vietnamiennes, japonaises et coréennes. Sucré, acide, épicé, tout en simplicité.',
      launchPill: 'Gratuit · Sortie le 13 juillet 2026',
      badgeWhen: '13 juillet',
      trust: ['100% gratuit', '3 langues', 'iPhone & Android'],
    },
    overview: {
      title: 'Toutes vos recettes asiatiques au même endroit',
      subtitle: "Un livre de recettes, un guide d'ingrédients et une aide aux courses tout-en-un pour cuisiner asiatique chez soi - entièrement gratuit.",
      growth: "De nouvelles recettes chaque semaine - et d'autres fonctionnalités à venir.",
    },
    features: {
      title: 'Ce que vous trouverez',
      items: [
        {
          heading: 'Explorez de vraies recettes',
          text: "Des plats authentiques chinois, thaïs, vietnamiens, japonais et coréens. Guides pas à pas, listes d'ingrédients, avis et photos - pour réussir du premier coup.",
        },
        {
          heading: 'Connaissez vos ingrédients',
          text: "Vous ne savez pas ce qu'est cette sauce ou cette épice, ni où l'acheter ? Parcourez des descriptions claires des ingrédients asiatiques, avec des conseils pour les trouver dans votre épicerie asiatique.",
        },
        {
          heading: 'Sauvegardez vos favoris',
          text: 'Ajoutez un cœur aux recettes que vous aimez et retrouvez-les en un clic. Votre livre de cuisine asiatique personnel, toujours dans votre poche.',
        },
      ],
    },
    more: {
      title: 'Et aussi…',
      items: [
        { label: '3 langues', desc: 'Cuisinez en français, anglais ou chinois - à vous de choisir' },
        { label: 'Avis & photos', desc: 'Partagez votre expérience culinaire et vos photos avec la communauté' },
        { label: 'Partage de recettes', desc: 'Envoyez vos recettes par message ou exportez un PDF imprimable' },
        { label: 'Notifications', desc: 'Soyez prévenu dès qu\'une nouvelle recette est publiée' },
        { label: 'Trouvez-les en magasin', desc: "Apprenez à connaître les ingrédients asiatiques et les recettes qui les utilisent - pour les repérer facilement dans votre épicerie asiatique" },
        { label: '100% gratuit', desc: 'Toutes les recettes et fonctionnalités sont gratuites - financé par la pub, sans abonnement ni paywall' },
      ],
    },
    story: {
      title: 'Notre histoire',
      text: "Gourmande confirmée, élevée à Xi'an en Chine, une ville historique et gastronomique, devenue développeuse en France, puis maman de deux garçons. Avec un goût profondément ancré pour la cuisine chinoise, même après 12 ans en France, j'adore toujours cuisiner de bons plats asiatiques pour toute la famille.\n\nPassionnée de vie, de programmation, de gastronomie et de lien social, est né cet outil chaleureux : my petit wok / 小锅.\n\nTu adores la cuisine asiatique mais tu ne sais pas comment la cuisiner ? Tu ne sais pas où acheter les ingrédients ? Solution tout-en-un ! MyPetitWok t'aide à réaliser facilement des plats asiatiques maison authentiques, bien pour ta santé et délicieux !",
    },
    download: {
      title: 'Prêt pour le jour du lancement',
      subtitle: "MyPetitWok arrive le 13 juillet 2026 sur l'App Store et Google Play - gratuitement.",
      webNote: 'Une version web arrivera plus tard.',
    },
    footer: {
      contact: 'Une suggestion ou une recette à partager ? Écrivez-nous.',
      email: 'hello@mypetitwok.com',
      rights: 'Tous droits réservés.',
    },
    recipes: {
      navLabel: 'Recettes',
      indexTitle: 'Recettes asiatiques authentiques — MyPetitWok',
      indexDescription: 'Découvrez des recettes asiatiques authentiques et gratuites — chinoises, japonaises, vietnamiennes et plus. Cuisinez chez vous pas à pas avec MyPetitWok.',
      indexHeading: 'Recettes asiatiques authentiques',
      indexIntro: "Une petite sélection de recettes de l'app MyPetitWok — gratuites, pas à pas, pensées pour la maison. La bibliothèque complète est dans l'app.",
      minutes: 'min',
      servings: 'parts',
      prep: 'Préparation',
      cook: 'Cuisson',
      difficulty: 'Difficulté',
      ingredients: 'Ingrédients',
      steps: 'Étapes',
      optional: 'optionnel',
      saveCtaTitle: 'Cette recette vous plaît ?',
      saveCtaText: "Sauvegardez-la, accédez à plus de recettes, à un guide des ingrédients et à des conseils pour les courses — gratuit dans l'app MyPetitWok.",
      saveCtaButton: "Obtenir l'app gratuite",
      notFoundTitle: 'Recette introuvable',
      notFoundText: "Cette recette n'est plus disponible.",
      backToList: 'Retour aux recettes',
      whereToFind: 'Où le trouver',
      buyOnJoybuy: 'Acheter en ligne',
      difficultyLabels: { BEGINNER: 'Facile', INTERMEDIATE: 'Moyen', ADVANCED: 'Difficile' },
      cuisineLabels: { CHINESE: 'Chinoise', JAPANESE: 'Japonaise', KOREAN: 'Coréenne', THAI: 'Thaïe', VIETNAMESE: 'Vietnamienne' },
    },
  },
  zh: {
    pageTitle: 'MyPetitWok 小锅 — 免费亚洲菜谱应用',
    metaDescription: '发现地道的中餐、泰餐、越南菜、日料和韩餐菜谱。小锅 MyPetitWok 帮你在家轻松烹饪亚洲美食，提供菜谱、食材指南和购物建议。2026 年 7 月 13 日上线 — iPhone 与安卓免费下载。',
    nav: { features: '功能', story: '我们的故事', download: '下载应用' },
    launch: {
      prefix: '小锅将于 2026 年 7 月 13 日上线 - iPhone 与安卓免费下载',
      live: '小锅已上线 - 立即免费下载！',
    },
    countdown: { days: '天', hours: '时', minutes: '分', seconds: '秒' },
    hero: {
      headline: '在家轻松做地道亚洲美食',
      tagline: '发现、烹饪并收藏地道的亚洲菜谱 - 中餐、泰餐、越南菜、日料与韩餐。酸甜苦辣，化繁为简。',
      launchPill: '免费 · 2026 年 7 月 13 日上线',
      badgeWhen: '7 月 13 日',
      trust: ['完全免费', '三种语言', 'iPhone 与安卓'],
    },
    overview: {
      title: '你的亚洲菜谱，尽在一处',
      subtitle: '集菜谱、食材指南与购物助手于一身，帮你在家做地道亚洲美食 - 完全免费。',
      growth: '每周更新菜谱 - 更多功能持续上线。',
    },
    features: {
      title: '功能介绍',
      items: [
        {
          heading: '探索地道菜谱',
          text: '中餐、泰餐、越南菜、日料和韩餐的正宗菜式。分步指导、食材清单、用户评价和照片 - 一次就能做对。',
        },
        {
          heading: '看懂亚洲食材',
          text: '不认识那种酱料或香料，也不知道去哪买？查看清晰的食材介绍，教你在亚洲超市里轻松找到它们。',
        },
        {
          heading: '收藏你的最爱',
          text: '一键收藏喜爱的菜谱，随时再次找到。你的私人亚洲菜谱，随身携带。',
        },
      ],
    },
    more: {
      title: '更多亮点',
      items: [
        { label: '三种语言', desc: '支持中文、英文和法文，随心切换' },
        { label: '评价与晒图', desc: '分享你的烹饪体验和美食照片' },
        { label: '分享菜谱', desc: '发送菜谱文字或导出可打印的PDF' },
        { label: '推送通知', desc: '新菜谱上线，第一时间知道' },
        { label: '逛亚洲超市', desc: '了解亚洲食材及相关菜谱，轻松在亚洲超市里找到它们' },
        { label: '完全免费', desc: '所有菜谱和功能完全免费 - 由广告支持，无订阅、无付费墙' },
      ],
    },
    story: {
      title: '我们的故事',
      text: '西安碳水养大的资深吃货，养成了程序媛，又养成了俩娃的宝妈。养成了身在法国依然根深蒂固的中餐口味，也养成了自己开伙做全家美食的"实战能力"。\n\n爱生活，爱编程，爱美食，爱社交，于是诞生了这个温暖的小工具--my petit wok / 小锅。\n\n爱吃中餐不会做？不知道上哪买食材？一站式解决！小锅帮你轻松做出地道的家常中餐！还有其他亚洲美味',
    },
    download: {
      title: '为上线日做好准备',
      subtitle: '小锅将于 2026 年 7 月 13 日登陆 App Store 和 Google Play - 完全免费。',
      webNote: '网页版稍后推出。',
    },
    footer: {
      contact: '有建议或想分享菜谱？欢迎联系我们。',
      email: 'hello@mypetitwok.com',
      rights: '版权所有。',
    },
    recipes: {
      navLabel: '菜谱',
      indexTitle: '地道亚洲菜谱 — MyPetitWok 小锅',
      indexDescription: '免费的地道亚洲菜谱 — 中餐、日料、越南菜等。跟着小锅 MyPetitWok 在家轻松烹饪。',
      indexHeading: '地道亚洲菜谱',
      indexIntro: '小锅 MyPetitWok 应用中精选的菜谱 — 免费、分步、为家庭烹饪而设。完整菜谱库请在应用中查看。',
      minutes: '分钟',
      servings: '人份',
      prep: '准备',
      cook: '烹饪',
      difficulty: '难度',
      ingredients: '食材',
      steps: '步骤',
      optional: '可选',
      saveCtaTitle: '喜欢这道菜？',
      saveCtaText: '收藏到你的菜谱本，发现更多菜谱、食材指南和购物建议 — 全部免费，尽在小锅 MyPetitWok 应用。',
      saveCtaButton: '免费下载应用',
      notFoundTitle: '菜谱未找到',
      notFoundText: '该菜谱已不可用。',
      backToList: '返回菜谱列表',
      whereToFind: '哪里能买到',
      buyOnJoybuy: '在线购买',
      difficultyLabels: { BEGINNER: '简单', INTERMEDIATE: '中等', ADVANCED: '较难' },
      cuisineLabels: { CHINESE: '中餐', JAPANESE: '日料', KOREAN: '韩餐', THAI: '泰餐', VIETNAMESE: '越南菜' },
    },
  },
};

export function t(lang: Lang) {
  return translations[lang] ?? translations[defaultLang];
}
