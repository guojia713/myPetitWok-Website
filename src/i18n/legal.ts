import type { Lang } from './content';

type Section = { heading: string; body: string };
type LegalDoc = {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: Section[];
  back: string;
};

// ─────────────────────────────────────────────────────────────────────────────
// Mentions Légales / Legal Notice (required by French LCEN art. 6-III)
// Business details from the official French registry (annuaire-entreprises.data.gouv.fr).
// ─────────────────────────────────────────────────────────────────────────────
const legalNotice: Record<Lang, LegalDoc> = {
  en: {
    title: 'Legal Notice',
    lastUpdated: 'Last updated: 15 June 2026',
    intro:
      'Legal information about the publisher and host of MyPetitWok.com, in accordance with French law (LCEN, art. 6-III).',
    sections: [
      {
        heading: '1. Site publisher',
        body:
          'The MyPetitWok website and mobile application are published by:\n\nJia Guo — sole trader (entrepreneur individuel), trading as "MY PETIT WOK".\nSIRET: 104 407 721 00026 (SIREN 104 407 721).\nRegistered office: 27 Avenue Jean Médecin, 06000 Nice, France.\nMain activity (APE/NAF): 62.01Z — Computer programming.\nIntra-community VAT number: FR87104407721.\nEmail: hello@mypetitwok.com',
      },
      {
        heading: '2. Director of publication',
        body: 'The director of publication is Jia Guo.',
      },
      {
        heading: '3. Hosting',
        body:
          'The website is hosted by:\n\nVercel Inc.\n340 S Lemon Ave #4133, Walnut, CA 91789, United States.\nWebsite: https://vercel.com\n\nApplication data and content are served via Amazon Web Services (AWS), in the European Union (Frankfurt region).',
      },
      {
        heading: '4. Intellectual property',
        body:
          'All content on this site (texts, recipes, ingredient guides, images, logo, layout) is the property of MyPetitWok or its partners and is protected by French and international intellectual property law. Any reproduction or reuse without prior written permission is prohibited, except for short quotations with a link to the source.',
      },
      {
        heading: '5. Personal data',
        body:
          'The processing of personal data is described in our Privacy Policy, available at https://mypetitwok.com/en/privacy. In accordance with the GDPR and the French Data Protection Act, you have rights of access, rectification and deletion of your data, which you can exercise at hello@mypetitwok.com.',
      },
      {
        heading: '6. Affiliate links',
        body:
          'Some ingredient and article pages may contain affiliate links. If you make a purchase through these links, MyPetitWok may earn a small commission at no extra cost to you. This helps keep the app and website free.',
      },
      {
        heading: '7. Contact',
        body: 'For any question regarding the site, you can contact us at hello@mypetitwok.com.',
      },
    ],
    back: 'Back to home',
  },
  fr: {
    title: 'Mentions Légales',
    lastUpdated: 'Dernière mise à jour : 15 juin 2026',
    intro:
      'Informations légales relatives à l’éditeur et à l’hébergeur du site MyPetitWok.com, conformément à la loi française (LCEN, art. 6-III).',
    sections: [
      {
        heading: '1. Éditeur du site',
        body:
          'Le site et l’application MyPetitWok sont édités par :\n\nJia Guo — entrepreneur individuel (micro-entreprise), exerçant sous le nom « MY PETIT WOK ».\nSIRET : 104 407 721 00026 (SIREN 104 407 721).\nSiège social : 27 Avenue Jean Médecin, 06000 Nice, France.\nActivité principale (APE/NAF) : 62.01Z — Programmation informatique.\nNuméro de TVA intracommunautaire : FR87104407721.\nEmail : hello@mypetitwok.com',
      },
      {
        heading: '2. Directrice de la publication',
        body: 'La directrice de la publication est Jia Guo.',
      },
      {
        heading: '3. Hébergement',
        body:
          'Le site est hébergé par :\n\nVercel Inc.\n340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.\nSite web : https://vercel.com\n\nLes données et contenus de l’application sont servis via Amazon Web Services (AWS), au sein de l’Union européenne (région de Francfort).',
      },
      {
        heading: '4. Propriété intellectuelle',
        body:
          'L’ensemble des contenus de ce site (textes, recettes, guides d’ingrédients, images, logo, mise en page) est la propriété de MyPetitWok ou de ses partenaires et est protégé par le droit de la propriété intellectuelle français et international. Toute reproduction ou réutilisation sans autorisation écrite préalable est interdite, à l’exception de courtes citations accompagnées d’un lien vers la source.',
      },
      {
        heading: '5. Données personnelles',
        body:
          'Le traitement des données personnelles est décrit dans notre Politique de confidentialité, disponible à l’adresse https://mypetitwok.com/fr/privacy. Conformément au RGPD et à la loi Informatique et Libertés, vous disposez de droits d’accès, de rectification et de suppression de vos données, que vous pouvez exercer à l’adresse hello@mypetitwok.com.',
      },
      {
        heading: '6. Liens d’affiliation',
        body:
          'Certaines pages d’ingrédients et d’articles peuvent contenir des liens d’affiliation. Si vous effectuez un achat via ces liens, MyPetitWok peut percevoir une petite commission, sans coût supplémentaire pour vous. Cela contribue à maintenir l’application et le site gratuits.',
      },
      {
        heading: '7. Contact',
        body: 'Pour toute question concernant le site, vous pouvez nous contacter à hello@mypetitwok.com.',
      },
    ],
    back: 'Retour à l’accueil',
  },
  zh: {
    title: '法律声明',
    lastUpdated: '最后更新：2026 年 6 月 15 日',
    intro:
      '根据法国法律（LCEN 第 6-III 条），以下为 MyPetitWok.com 网站的发布者及托管方法律信息。',
    sections: [
      {
        heading: '1. 网站发布者',
        body:
          'MyPetitWok 网站及移动应用由以下主体发布：\n\nJia Guo（郭佳）— 个体经营者（法国 micro-entreprise），经营名称「MY PETIT WOK」。\nSIRET：104 407 721 00026（SIREN 104 407 721）。\n注册地址：27 Avenue Jean Médecin, 06000 Nice, France。\n主营业务（APE/NAF）：62.01Z — 计算机编程。\n欧盟内增值税号（TVA intracommunautaire）：FR87104407721。\n邮箱：hello@mypetitwok.com',
      },
      {
        heading: '2. 出版负责人',
        body: '出版负责人为 Jia Guo（郭佳）。',
      },
      {
        heading: '3. 托管服务',
        body:
          '本网站由以下服务商托管：\n\nVercel Inc.\n340 S Lemon Ave #4133, Walnut, CA 91789, 美国。\n网站：https://vercel.com\n\n应用数据与内容通过 Amazon Web Services (AWS) 在欧盟（法兰克福区域）提供。',
      },
      {
        heading: '4. 知识产权',
        body:
          '本网站的所有内容（文字、菜谱、食材指南、图片、标志、版面设计）均归 MyPetitWok 或其合作伙伴所有，受法国及国际知识产权法保护。未经事先书面许可，禁止任何形式的复制或再利用，附带来源链接的简短引用除外。',
      },
      {
        heading: '5. 个人数据',
        body:
          '个人数据的处理详见我们的隐私政策：https://mypetitwok.com/zh/privacy。根据 GDPR 及法国《信息与自由法》，您享有访问、更正和删除个人数据的权利，可通过 hello@mypetitwok.com 行使。',
      },
      {
        heading: '6. 联盟推广链接',
        body:
          '部分食材和文章页面可能包含联盟推广链接。如您通过这些链接购买，MyPetitWok 可能获得少量佣金，您无需支付任何额外费用。这有助于保持应用和网站免费。',
      },
      {
        heading: '7. 联系方式',
        body: '如对本网站有任何疑问，请通过 hello@mypetitwok.com 与我们联系。',
      },
    ],
    back: '返回首页',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Terms of Service / Conditions Générales d'Utilisation (CGU)
// ─────────────────────────────────────────────────────────────────────────────
const terms: Record<Lang, LegalDoc> = {
  en: {
    title: 'Terms of Service',
    lastUpdated: 'Last updated: 15 June 2026',
    intro:
      'These Terms of Service govern your use of the MyPetitWok website and mobile application. By using the service, you accept these terms.',
    sections: [
      {
        heading: '1. Purpose',
        body:
          'MyPetitWok provides authentic Asian recipes, ingredient guides and shopping help through a website and a free mobile application (the "Service"), published by Jia Guo, sole trader (SIRET 104 407 721 00026).',
      },
      {
        heading: '2. Acceptance of the terms',
        body:
          'By accessing or using the Service, you agree to be bound by these Terms. If you do not accept them, please do not use the Service. We may update these Terms; the version in force is the one published on this page.',
      },
      {
        heading: '3. Access to the Service',
        body:
          'The Service is free. Recipes are available on the website and, with additional features, in the mobile app (iOS and Android). The app is supported by advertising. We do not currently offer paid features, subscriptions or in-app purchases.',
      },
      {
        heading: '4. User account',
        body:
          'Some features (favourites, ratings, reviews) require an account. You are responsible for keeping your login credentials confidential and for activity on your account. You must provide accurate information and be at least 15 years old, or have parental consent.',
      },
      {
        heading: '5. User-generated content',
        body:
          'You may submit content such as ratings, reviews and photos. You remain the owner of your content but grant MyPetitWok a free, worldwide, non-exclusive licence to display it within the Service. You must not post illegal, offensive, misleading or infringing content. We may moderate, hide or remove content, and a review is automatically hidden after several reports pending moderation.',
      },
      {
        heading: '6. Intellectual property',
        body:
          'The Service, its content (recipes, guides, texts, images, logo) and its software are protected by intellectual property law. Except for your own content, you may not copy, reproduce or distribute them without our prior written consent.',
      },
      {
        heading: '7. Advertising and affiliate links',
        body:
          'The Service displays advertising (e.g. Google AdMob) and may include affiliate links to retailers. Purchases made through affiliate links may earn us a small commission at no extra cost to you. We are not responsible for third-party websites or products.',
      },
      {
        heading: '8. Recipes, food safety and allergens',
        body:
          'Recipes and ingredient information are provided for general guidance only. You are responsible for checking ingredients for allergens and for safe food handling and cooking. MyPetitWok cannot be held liable for any allergic reaction, illness or damage resulting from the preparation or consumption of dishes.',
      },
      {
        heading: '9. Availability and liability',
        body:
          'We aim to keep the Service available but cannot guarantee uninterrupted access and may modify or suspend it. To the extent permitted by law, the Service is provided "as is" and our liability is limited to direct, foreseeable damage.',
      },
      {
        heading: '10. Personal data',
        body:
          'Your personal data is processed as described in our Privacy Policy (https://mypetitwok.com/en/privacy), in accordance with the GDPR.',
      },
      {
        heading: '11. Termination',
        body:
          'You may stop using the Service and delete your account at any time from the app. We may suspend or close an account that breaches these Terms.',
      },
      {
        heading: '12. Governing law and disputes',
        body:
          'These Terms are governed by French law. In case of a dispute, you may use the European Online Dispute Resolution platform (https://ec.europa.eu/consumers/odr) or contact a consumer mediator. Failing an amicable solution, the competent French courts shall have jurisdiction.',
      },
      {
        heading: '13. Contact',
        body: 'For any question about these Terms, contact us at hello@mypetitwok.com.',
      },
    ],
    back: 'Back to home',
  },
  fr: {
    title: 'Conditions Générales d’Utilisation',
    lastUpdated: 'Dernière mise à jour : 15 juin 2026',
    intro:
      'Les présentes Conditions Générales d’Utilisation (CGU) régissent l’utilisation du site et de l’application MyPetitWok. En utilisant le service, vous acceptez ces conditions.',
    sections: [
      {
        heading: '1. Objet',
        body:
          'MyPetitWok propose des recettes asiatiques authentiques, des guides d’ingrédients et une aide aux courses, via un site web et une application mobile gratuite (le « Service »), édités par Jia Guo, entrepreneur individuel (SIRET 104 407 721 00026).',
      },
      {
        heading: '2. Acceptation des conditions',
        body:
          'En accédant au Service ou en l’utilisant, vous acceptez d’être lié par les présentes CGU. Si vous ne les acceptez pas, veuillez ne pas utiliser le Service. Nous pouvons mettre à jour ces CGU ; la version en vigueur est celle publiée sur cette page.',
      },
      {
        heading: '3. Accès au Service',
        body:
          'Le Service est gratuit. Les recettes sont disponibles sur le site et, avec des fonctionnalités supplémentaires, dans l’application mobile (iOS et Android). L’application est financée par la publicité. Nous ne proposons actuellement aucune fonctionnalité payante, abonnement ou achat intégré.',
      },
      {
        heading: '4. Compte utilisateur',
        body:
          'Certaines fonctionnalités (favoris, notes, avis) nécessitent un compte. Vous êtes responsable de la confidentialité de vos identifiants et de l’activité sur votre compte. Vous devez fournir des informations exactes et être âgé d’au moins 15 ans, ou disposer de l’accord de vos parents.',
      },
      {
        heading: '5. Contenus des utilisateurs',
        body:
          'Vous pouvez publier des contenus tels que des notes, avis et photos. Vous restez propriétaire de vos contenus mais accordez à MyPetitWok une licence gratuite, mondiale et non exclusive pour les afficher au sein du Service. Vous ne devez pas publier de contenu illégal, offensant, trompeur ou contrefaisant. Nous pouvons modérer, masquer ou supprimer un contenu ; un avis est automatiquement masqué après plusieurs signalements, dans l’attente d’une modération.',
      },
      {
        heading: '6. Propriété intellectuelle',
        body:
          'Le Service, ses contenus (recettes, guides, textes, images, logo) et son logiciel sont protégés par le droit de la propriété intellectuelle. À l’exception de vos propres contenus, vous ne pouvez pas les copier, reproduire ou distribuer sans notre accord écrit préalable.',
      },
      {
        heading: '7. Publicité et liens d’affiliation',
        body:
          'Le Service affiche de la publicité (par ex. Google AdMob) et peut contenir des liens d’affiliation vers des marchands. Les achats effectués via ces liens peuvent nous rapporter une petite commission, sans coût supplémentaire pour vous. Nous ne sommes pas responsables des sites ou produits tiers.',
      },
      {
        heading: '8. Recettes, sécurité alimentaire et allergènes',
        body:
          'Les recettes et informations sur les ingrédients sont fournies à titre indicatif. Il vous appartient de vérifier la présence d’allergènes et de respecter les règles d’hygiène et de cuisson. MyPetitWok ne peut être tenu responsable d’une réaction allergique, d’une maladie ou d’un dommage résultant de la préparation ou de la consommation des plats.',
      },
      {
        heading: '9. Disponibilité et responsabilité',
        body:
          'Nous nous efforçons de maintenir le Service disponible mais ne pouvons garantir un accès ininterrompu et pouvons le modifier ou le suspendre. Dans les limites autorisées par la loi, le Service est fourni « en l’état » et notre responsabilité est limitée aux dommages directs et prévisibles.',
      },
      {
        heading: '10. Données personnelles',
        body:
          'Vos données personnelles sont traitées comme décrit dans notre Politique de confidentialité (https://mypetitwok.com/fr/privacy), conformément au RGPD.',
      },
      {
        heading: '11. Résiliation',
        body:
          'Vous pouvez cesser d’utiliser le Service et supprimer votre compte à tout moment depuis l’application. Nous pouvons suspendre ou fermer un compte qui enfreint les présentes CGU.',
      },
      {
        heading: '12. Droit applicable et litiges',
        body:
          'Les présentes CGU sont régies par le droit français. En cas de litige, vous pouvez recourir à la plateforme européenne de règlement en ligne des litiges (https://ec.europa.eu/consumers/odr) ou à un médiateur de la consommation. À défaut de solution amiable, les tribunaux français compétents seront saisis.',
      },
      {
        heading: '13. Contact',
        body: 'Pour toute question relative aux présentes CGU, contactez-nous à hello@mypetitwok.com.',
      },
    ],
    back: 'Retour à l’accueil',
  },
  zh: {
    title: '用户服务条款',
    lastUpdated: '最后更新：2026 年 6 月 15 日',
    intro:
      '本服务条款规范您对 MyPetitWok 网站及移动应用的使用。使用本服务即表示您接受这些条款。',
    sections: [
      {
        heading: '1. 目的',
        body:
          'MyPetitWok 通过网站和免费移动应用（「服务」）提供地道亚洲菜谱、食材指南和购物帮助，由个体经营者 Jia Guo（郭佳）发布（SIRET 104 407 721 00026）。',
      },
      {
        heading: '2. 条款的接受',
        body:
          '访问或使用本服务即表示您同意受本条款约束。如不接受，请勿使用本服务。我们可能更新本条款，以本页面公布的版本为准。',
      },
      {
        heading: '3. 服务的使用',
        body:
          '本服务免费。菜谱在网站上提供，移动应用（iOS 与安卓）则提供更多功能。应用由广告支持。我们目前不提供任何付费功能、订阅或应用内购买。',
      },
      {
        heading: '4. 用户账户',
        body:
          '部分功能（收藏、评分、评价）需要账户。您有责任保管登录凭证的机密性并对账户活动负责。您须提供准确信息，且年满 15 周岁，或已获得父母同意。',
      },
      {
        heading: '5. 用户生成内容',
        body:
          '您可发布评分、评价和照片等内容。您仍是内容的所有者，但授予 MyPetitWok 在本服务内展示该内容的免费、全球、非独占许可。您不得发布违法、冒犯、误导或侵权的内容。我们可对内容进行审核、隐藏或删除；评价在多次举报后将自动隐藏，等待审核。',
      },
      {
        heading: '6. 知识产权',
        body:
          '本服务及其内容（菜谱、指南、文字、图片、标志）和软件均受知识产权法保护。除您自己的内容外，未经我们事先书面同意，您不得复制、再现或分发。',
      },
      {
        heading: '7. 广告与联盟推广链接',
        body:
          '本服务展示广告（如 Google AdMob），并可能包含指向商家的联盟推广链接。通过这些链接购买可能使我们获得少量佣金，您无需支付额外费用。我们对第三方网站或产品不承担责任。',
      },
      {
        heading: '8. 菜谱、食品安全与过敏原',
        body:
          '菜谱和食材信息仅供一般参考。您有责任检查食材中的过敏原，并遵守安全的食品处理和烹饪规范。对于因准备或食用菜肴而导致的任何过敏反应、疾病或损害，MyPetitWok 概不负责。',
      },
      {
        heading: '9. 可用性与责任',
        body:
          '我们努力保持服务可用，但无法保证不间断访问，并可能对其进行修改或暂停。在法律允许的范围内，本服务按「现状」提供，我们的责任仅限于直接的、可预见的损害。',
      },
      {
        heading: '10. 个人数据',
        body:
          '您的个人数据将按照我们的隐私政策（https://mypetitwok.com/zh/privacy）并依据 GDPR 进行处理。',
      },
      {
        heading: '11. 终止',
        body:
          '您可随时停止使用本服务，并在应用内删除账户。对于违反本条款的账户，我们可暂停或关闭。',
      },
      {
        heading: '12. 适用法律与争议',
        body:
          '本条款受法国法律管辖。如发生争议，您可使用欧盟在线争议解决平台（https://ec.europa.eu/consumers/odr）或联系消费者调解机构。如无法友好解决，将由法国主管法院管辖。',
      },
      {
        heading: '13. 联系方式',
        body: '如对本条款有任何疑问，请通过 hello@mypetitwok.com 与我们联系。',
      },
    ],
    back: '返回首页',
  },
};

export function getLegalNotice(lang: Lang): LegalDoc {
  return legalNotice[lang] ?? legalNotice.en;
}

export function getTerms(lang: Lang): LegalDoc {
  return terms[lang] ?? terms.en;
}
