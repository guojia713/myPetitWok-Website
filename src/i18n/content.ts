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
  ingredients: {
    navLabel: string;
    indexTitle: string;
    indexDescription: string;
    indexHeading: string;
    indexIntro: string;
    substitute: string;
    whereToFind: string;
    buyOnJoybuy: string;
    usedIn: string;
    detailTitleSuffix: string;
    backToList: string;
    relatedReading: string;
    indexShowingNote: string;
    moreInAppTitle: string;
    moreInAppText: string;
    moreInAppButton: string;
    faqTitle: string;
    faqWhatIs: string;
    faqSubstituteQ: string;
    faqWhereQ: string;
  };
  guides: {
    navLabel: string;
    title: string;
    subtitle: string;
    items: { title: string; description: string; href: string }[];
  };
  about: {
    navLabel: string;
    title: string;
    description: string;
    heading: string;
    intro: string;
    founderName: string;
    founderRole: string;
    bodyParagraphs: string[];
    values: { title: string; text: string }[];
    contactHeading: string;
    contactBody: string;
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
      webNote: 'In the meantime, browse our recipes online →',
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
      indexIntro: 'A small selection of recipes from the MyPetitWok app is showing here, find the full library lives in the app.',
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
    ingredients: {
      navLabel: 'Ingredients',
      indexTitle: 'Essential Asian Ingredients — MyPetitWok',
      indexDescription: 'Learn about authentic Asian ingredients — doubanjiang, gochujang, fish sauce, Sichuan peppercorn and more. Clear descriptions and where to find each one.',
      indexHeading: 'Asian ingredient guide',
      indexIntro: 'Curious what doubanjiang is, or where to buy gochujang? Here\'s a plain-English guide to the Asian ingredients used in the MyPetitWok app — what they taste like, where to find them, and what to substitute when you can\'t.',
      substitute: 'Substitute',
      whereToFind: 'Where to find it',
      buyOnJoybuy: 'Buy online',
      usedIn: 'Used in these recipes',
      detailTitleSuffix: '— MyPetitWok Ingredient Guide',
      backToList: 'Back to all ingredients',
      relatedReading: 'Related reading',
      indexShowingNote: 'A taste of our ingredient library — featured here are the ones used in our online recipes.',
      moreInAppTitle: 'Want the full ingredient library?',
      moreInAppText: 'Get 50+ Asian ingredients with photos, substitutes and shopping tips — completely free in the MyPetitWok app.',
      moreInAppButton: 'Get the free app',
      faqTitle: 'Frequently asked questions',
      faqWhatIs: 'What is {name}?',
      faqSubstituteQ: 'What can I substitute for {name}?',
      faqWhereQ: 'Where can I buy {name}?',
    },
    guides: {
      navLabel: 'Articles',
      title: 'Cooking guides',
      subtitle: 'Short, practical answers to the questions every Asian home cook asks.',
      items: [
        {
          title: "Light soy sauce vs dark soy sauce: what's the difference?",
          description: 'One seasons, the other colors — and swapping them is the most common mistake in Chinese home cooking. Here is when to use each.',
          href: '/articles/light-vs-dark-soy-sauce',
        },
        {
          title: "Yakitori sauce vs teriyaki sauce: what's the difference?",
          description: 'Same Japanese base, two different jobs. A side-by-side comparison — and when you can swap one for the other.',
          href: '/articles/yakitori-vs-teriyaki',
        },
      ],
    },
    about: {
      navLabel: 'About',
      title: 'About MyPetitWok — Authentic Asian Cooking from Xi\'an to Your Kitchen',
      description: 'The story behind MyPetitWok — a free Asian recipe app built by a developer and mom from Xi\'an, China, now living in France. Authentic recipes, real techniques, made for home cooks.',
      heading: 'About MyPetitWok',
      intro: 'A free Asian recipe app, made by one person who genuinely cooks this food every week.',
      founderName: 'Jia Guo',
      founderRole: 'Founder, developer & home cook',
      bodyParagraphs: [
        'I grew up in Xi\'an, one of China\'s oldest and most food-obsessed cities — a place where street food is taken seriously and home cooking is a daily ritual. After moving to France for university, I became a software developer, then a mom of two boys. Through every move and life change, one thing stayed constant: the food I cook at home is still mostly Asian.',
        'Twelve years in France taught me something specific: there are so many people who love Asian food but feel locked out of cooking it themselves. The recipes online are confusing, the ingredients have unfamiliar names, the techniques look intimidating. And the recipe sites that do exist are often written by someone who learned from a cookbook, not from a grandmother.',
        'MyPetitWok is my answer. It\'s the app I wish existed when my French friends asked "how do you actually make this?" Every recipe is one I cook for my own family. Every ingredient guide is written from the perspective of someone who has stood confused in a Western supermarket looking for doubanjiang.',
        'The app is completely free. No subscriptions, no paywalls, no upsells. It\'s supported by ads and affiliate links on ingredients — that\'s it. My goal isn\'t to maximize revenue; it\'s to make authentic Asian home cooking accessible to anyone who wants to learn.',
      ],
      values: [
        {
          title: 'Authentic, not adapted',
          text: 'Real recipes from real Asian kitchens — Chinese, Japanese, Vietnamese, Korean and Thai. No Westernization, no shortcuts that betray the flavor. If a dish needs Sichuan peppercorns, the recipe uses Sichuan peppercorns.',
        },
        {
          title: 'Built for beginners',
          text: 'Every ingredient is explained. Every step is photographed. Every "weird" item comes with a guide on where to find it (or what to substitute when you can\'t).',
        },
        {
          title: 'Multilingual by design',
          text: 'English, French, Chinese — switch any time. Made for families like mine where everyone reads a different language.',
        },
        {
          title: 'Free, forever',
          text: 'Ad-supported, no subscriptions. The full recipe library is free for everyone, on iPhone, Android and the web.',
        },
      ],
      contactHeading: 'Get in touch',
      contactBody: 'Have a recipe to share, a suggestion, or want to collaborate? I read every email.',
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
      webNote: 'En attendant, découvrez nos recettes en ligne →',
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
      indexIntro: "Une petite sélection de recettes de l'app MyPetitWok sur web. tu trouveras la bibliothèque complète dans l'app.",
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
    ingredients: {
      navLabel: 'Ingrédients',
      indexTitle: 'Ingrédients asiatiques essentiels — MyPetitWok',
      indexDescription: "Découvrez les ingrédients asiatiques authentiques — doubanjiang, gochujang, sauce poisson, poivre de Sichuan et bien plus. Descriptions claires et où les trouver.",
      indexHeading: 'Guide des ingrédients asiatiques',
      indexIntro: "Vous vous demandez ce qu'est le doubanjiang ou où acheter du gochujang ? Voici un guide simple des ingrédients asiatiques utilisés dans l'app MyPetitWok — leur goût, où les trouver, et par quoi les remplacer si besoin.",
      substitute: 'Substitut',
      whereToFind: 'Où le trouver',
      buyOnJoybuy: 'Acheter en ligne',
      usedIn: 'Utilisé dans ces recettes',
      detailTitleSuffix: "— Guide des ingrédients MyPetitWok",
      backToList: 'Retour aux ingrédients',
      relatedReading: 'À lire aussi',
      indexShowingNote: "Un avant-goût de notre bibliothèque d'ingrédients — voici ceux utilisés dans nos recettes en ligne.",
      moreInAppTitle: "Vous voulez la bibliothèque complète ?",
      moreInAppText: "Plus de 50 ingrédients asiatiques avec photos, substituts et conseils d'achat — entièrement gratuit dans l'app MyPetitWok.",
      moreInAppButton: "Obtenir l'app gratuite",
      faqTitle: 'Questions fréquentes',
      faqWhatIs: "Qu'est-ce que {name} ?",
      faqSubstituteQ: 'Par quoi remplacer {name} ?',
      faqWhereQ: 'Où acheter {name} ?',
    },
    guides: {
      navLabel: 'Articles',
      title: 'Guides de cuisine',
      subtitle: 'Des réponses courtes et pratiques aux questions que se posent tous les cuisiniers de plats asiatiques.',
      items: [
        {
          title: 'Sauce soja claire vs sauce soja foncée : quelle différence ?',
          description: "L'une assaisonne, l'autre colore — les confondre est l'erreur la plus courante en cuisine chinoise. Voici quand utiliser chacune.",
          href: '/articles/light-vs-dark-soy-sauce',
        },
        {
          title: 'Sauce yakitori vs sauce teriyaki : quelle différence ?',
          description: "Même base japonaise, deux rôles différents. Une comparaison côte à côte — et quand remplacer l'une par l'autre.",
          href: '/articles/yakitori-vs-teriyaki',
        },
      ],
    },
    about: {
      navLabel: 'À propos',
      title: "À propos de MyPetitWok — Cuisine asiatique authentique de Xi'an à votre cuisine",
      description: "L'histoire derrière MyPetitWok — une app de recettes asiatiques gratuite, créée par une développeuse et maman originaire de Xi'an, vivant en France. Recettes authentiques, vraies techniques, pour cuisiner à la maison.",
      heading: 'À propos de MyPetitWok',
      intro: 'Une app de recettes asiatiques gratuite, créée par une personne qui cuisine vraiment ces plats chaque semaine.',
      founderName: 'Jia Guo',
      founderRole: 'Fondatrice, développeuse et cuisinière',
      bodyParagraphs: [
        "J'ai grandi à Xi'an, l'une des villes les plus anciennes et les plus passionnées de cuisine en Chine — un lieu où la street food se prend au sérieux et où cuisiner à la maison est un rituel quotidien. Après être venue étudier en France, je suis devenue développeuse, puis maman de deux garçons. À travers chaque déménagement et chaque changement de vie, une chose est restée constante : ce que je cuisine à la maison est encore largement asiatique.",
        "Douze ans en France m'ont appris une chose précise : il y a tellement de gens qui adorent la cuisine asiatique mais qui se sentent exclus quand il s'agit de la cuisiner eux-mêmes. Les recettes en ligne sont confuses, les ingrédients portent des noms inconnus, les techniques semblent intimidantes. Et les sites de recettes qui existent sont souvent écrits par quelqu'un qui a appris dans un livre, pas auprès d'une grand-mère.",
        "MyPetitWok est ma réponse. C'est l'app que j'aurais aimé avoir quand mes amis français me demandaient « mais comment tu fais, en vrai ? ». Chaque recette est une que je cuisine pour ma propre famille. Chaque guide d'ingrédient est écrit du point de vue de quelqu'un qui s'est déjà retrouvé perdu dans un supermarché à chercher du doubanjiang.",
        "L'app est entièrement gratuite. Pas d'abonnement, pas de paywall, pas de vente cachée. Elle est financée par la publicité et les liens d'affiliation sur les ingrédients — c'est tout. Mon objectif n'est pas de maximiser les revenus ; c'est de rendre la cuisine asiatique authentique accessible à toute personne qui veut apprendre.",
      ],
      values: [
        {
          title: 'Authentique, pas adapté',
          text: "Des vraies recettes de vraies cuisines asiatiques — chinoise, japonaise, vietnamienne, coréenne et thaïe. Pas d'occidentalisation, pas de raccourcis qui trahissent le goût. Si un plat demande du poivre de Sichuan, la recette utilise du poivre de Sichuan.",
        },
        {
          title: 'Pensé pour les débutants',
          text: "Chaque ingrédient est expliqué. Chaque étape est photographiée. Chaque produit « étrange » est accompagné d'un guide pour le trouver (ou pour le remplacer si vous ne le trouvez pas).",
        },
        {
          title: 'Multilingue par nature',
          text: "Anglais, français, chinois — basculez quand vous voulez. Pensé pour les familles comme la mienne où chacun lit une langue différente.",
        },
        {
          title: 'Gratuit, pour toujours',
          text: "Financé par la publicité, sans abonnement. La bibliothèque complète de recettes est gratuite pour tout le monde, sur iPhone, Android et le web.",
        },
      ],
      contactHeading: 'Me contacter',
      contactBody: "Une recette à partager, une suggestion, ou envie de collaborer ? Je lis chaque message.",
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
      headline: '地道亚洲美食, 在家轻松搞定',
      tagline: '发现、烹饪并收藏地道的亚洲菜谱 - 中餐、泰餐、越南菜、日料与韩餐。酸甜苦辣，一锅搞定。',
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
      webNote: '在此期间，先浏览我们的在线菜谱 →',
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
      indexIntro: '中精选的菜谱 — 免费、分步、为家庭烹饪而设。完整菜谱库请在应用中查看。',
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
    ingredients: {
      navLabel: '食材',
      indexTitle: '亚洲食材指南 — MyPetitWok 小锅',
      indexDescription: '了解地道亚洲食材 — 豆瓣酱、辣椒酱、鱼露、花椒等。清晰介绍以及哪里能买到。',
      indexHeading: '亚洲食材指南',
      indexIntro: '想了解豆瓣酱是什么，或者哪里能买到韩式辣椒酱？这里有小锅 MyPetitWok 应用中使用的亚洲食材的简明指南 — 介绍味道、在哪里购买，以及找不到时可以用什么代替。',
      substitute: '替代品',
      whereToFind: '哪里能买到',
      buyOnJoybuy: '在线购买',
      usedIn: '用于这些菜谱',
      detailTitleSuffix: '— MyPetitWok 食材指南',
      backToList: '返回食材列表',
      relatedReading: '延伸阅读',
      indexShowingNote: '我们食材库的一小部分 — 这里展示的是在线菜谱中使用的食材。',
      moreInAppTitle: '想看完整的食材库？',
      moreInAppText: '50+ 种亚洲食材，含图片、替代品建议和购物提示 — 在小锅 MyPetitWok 应用中完全免费。',
      moreInAppButton: '免费下载应用',
      faqTitle: '常见问题',
      faqWhatIs: '{name}是什么？',
      faqSubstituteQ: '{name}可以用什么代替？',
      faqWhereQ: '哪里能买到{name}？',
    },
    guides: {
      navLabel: '文章',
      title: '烹饪指南',
      subtitle: '简短实用，解答每位亚洲家常菜爱好者都会问的问题。',
      items: [
        {
          title: '生抽和老抽有什么区别？',
          description: '一个调味，一个上色 — 混用是海外做中餐最常见的错误。一张对比表说清什么时候用哪个。',
          href: '/articles/light-vs-dark-soy-sauce',
        },
        {
          title: '烤鸡肉串酱和照烧酱有什么区别？',
          description: '基础原料相同，用途各异。一张对比表看懂区别 — 以及什么时候可以互相替代。',
          href: '/articles/yakitori-vs-teriyaki',
        },
      ],
    },
    about: {
      navLabel: '关于',
      title: '关于 MyPetitWok 小锅 — 从西安到你的厨房的地道亚洲料理',
      description: 'MyPetitWok 小锅背后的故事 — 一款免费的亚洲菜谱应用，由一位来自西安、现居法国的开发者兼妈妈打造。地道菜谱，真实技法，为家庭烹饪而设。',
      heading: '关于 MyPetitWok',
      intro: '一款免费的亚洲菜谱应用，由一位真的每周都在做这些菜的人亲手打造。',
      founderName: '郭佳',
      founderRole: '创始人、开发者、家厨',
      bodyParagraphs: [
        '我在西安长大 — 中国最古老、最讲究吃的城市之一。在那里，街头小吃被认真对待，家常菜是每天的仪式。来法国念书后，我成了软件开发员，又当了俩男孩的妈妈。每次搬家，每次人生改变，唯一不变的是：我在家做的饭还是以亚洲菜为主。',
        '在法国生活十二年让我看清一件事：太多人爱吃亚洲菜，却觉得自己学不会做。网上的菜谱说得不清楚，食材名字陌生，技法看着吓人。而那些现有的菜谱网站，写的人很多是从书里学的，不是从奶奶手里学的。',
        '小锅 MyPetitWok 就是我的答案。这是我希望多年前就有的那款应用 — 当法国朋友问我"你到底怎么做出来的？"时我能给他们的工具。每一道菜谱都是我为自己家做的菜。每一份食材指南，都是从一个曾经在西方超市迷茫找豆瓣酱的人的角度写的。',
        '应用完全免费。没有订阅、没有付费墙、没有隐藏收费。靠广告和食材的联盟链接维持 — 仅此而已。我的目标不是赚得最多，而是让任何想学的人都能接触到地道的亚洲家常菜。',
      ],
      values: [
        {
          title: '地道，不妥协',
          text: '来自真正亚洲厨房的真菜谱 — 中餐、日料、越南菜、韩餐和泰餐。不西化、不走那种丢失味道的捷径。一道菜要花椒，菜谱就用花椒。',
        },
        {
          title: '为新手而设',
          text: '每个食材都解释清楚。每一步都有图示。每个"陌生"的东西，都附上哪里能买到的指引（或者买不到时该用什么代替）。',
        },
        {
          title: '天生多语言',
          text: '中文、英文、法文 — 随时切换。为像我这样家里每个人读不同语言的家庭而设。',
        },
        {
          title: '永远免费',
          text: '广告支持，无订阅。完整菜谱库对所有人免费 — iPhone、安卓、网页都一样。',
        },
      ],
      contactHeading: '联系我',
      contactBody: '有菜谱想分享、有建议、或想合作？每封邮件我都会读。',
    },
  },
};

export function t(lang: Lang) {
  return translations[lang] ?? translations[defaultLang];
}
