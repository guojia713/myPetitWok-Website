import type { Lang } from './content';

type Section = { heading: string; body: string };

type PrivacyContent = {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: Section[];
  back: string;
};

const privacyTranslations: Record<Lang, PrivacyContent> = {
  en: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: 10 May 2026',
    intro:
      'This Privacy Policy explains how MyPetitWok ("we", "us") collects, uses, and protects your personal data when you use our mobile application.',
    sections: [
      {
        heading: '1. Who we are',
        body:
          'MyPetitWok is operated by Jia Guo, a French sole trader (entrepreneur individuel) trading as "MY PETIT WOK", SIRET 104 407 721 00026, registered office at 27 Avenue Jean Médecin, 06000 Nice, France. You can contact us at hello@mypetitwok.com for any privacy-related question or to exercise your rights.',
      },
      {
        heading: '2. Data we collect',
        body:
          'Account data: email address, display name, optional profile photo.\n\nUsage data: recipes you favourite, feedback messages you submit, ratings and reviews.\n\nDevice data: device model, OS version, language, push notification token, advertising ID (IDFA on iOS / AAID on Android), approximate region.\n\nWe do not collect bank, payment, or government identification data.',
      },
      {
        heading: '3. How we use your data',
        body:
          'To provide the app and its features (account, favourites, recipe content in your language).\n\nTo send push notifications about new recipes (only if you accept).\n\nTo measure app performance and improve features (analytics).\n\nTo display advertising that helps keep the app free.\n\nTo respond to feedback and support requests.',
      },
      {
        heading: '4. Legal basis (GDPR)',
        body:
          'We process your data based on (a) the contract to provide you the app, (b) your consent for analytics and personalised advertising, and (c) our legitimate interest in operating and improving the service.',
      },
      {
        heading: '5. Third-party services',
        body:
          'We use the following processors:\n\n• Google AdMob — mobile advertising. See https://policies.google.com/privacy.\n• Google Firebase Analytics — anonymised app usage statistics.\n• Amazon Web Services (AWS) — hosting, in the EU (Frankfurt).\n• Expo Push Notifications — to deliver notifications.\n\nThese services may process limited technical data (IP, device ID, advertising ID) on our behalf.',
      },
      {
        heading: '6. Advertising and consent',
        body:
          'We display ads through Google AdMob to keep the app free. In the EU, UK, Switzerland, and California, we ask for your consent the first time you open the app. You can withdraw or change your choice at any time from the in-app settings. If you refuse, we will only show non-personalised ads.',
      },
      {
        heading: '7. Data retention',
        body:
          'Account data is kept while your account is active and deleted within 30 days of account deletion. Feedback messages are kept up to 24 months. Anonymous analytics data is kept up to 14 months.',
      },
      {
        heading: '8. Your rights',
        body:
          'Under GDPR you have the right to access, rectify, delete, restrict, port, or object to the processing of your personal data, and to withdraw consent. You can delete your account at any time from the app, or contact us at hello@mypetitwok.com. You can also lodge a complaint with the French data protection authority (CNIL, www.cnil.fr).',
      },
      {
        heading: '9. Children',
        body:
          'MyPetitWok is not directed to children under 16. We do not knowingly collect data from children. If you believe a child has provided us data, please contact us so we can delete it.',
      },
      {
        heading: '10. International transfers',
        body:
          'Some of our service providers (Google) may transfer data outside the EU. These transfers are covered by Standard Contractual Clauses or equivalent safeguards.',
      },
      {
        heading: '11. Changes to this policy',
        body:
          'We may update this policy. The "last updated" date above will reflect any change. Significant changes will be announced in the app.',
      },
      {
        heading: '12. Contact',
        body: 'For any question about this policy or your personal data: hello@mypetitwok.com.',
      },
    ],
    back: '← Back to home',
  },
  fr: {
    title: 'Politique de confidentialité',
    lastUpdated: 'Dernière mise à jour : 10 mai 2026',
    intro:
      "La présente politique explique comment MyPetitWok (« nous ») collecte, utilise et protège vos données personnelles lorsque vous utilisez notre application mobile.",
    sections: [
      {
        heading: '1. Qui sommes-nous',
        body:
          "MyPetitWok est édité par Jia Guo, entrepreneur individuel exerçant sous le nom « MY PETIT WOK », SIRET 104 407 721 00026, siège social au 27 Avenue Jean Médecin, 06000 Nice, France. Pour toute question relative à la confidentialité ou pour exercer vos droits, contactez-nous à hello@mypetitwok.com.",
      },
      {
        heading: '2. Données collectées',
        body:
          "Données de compte : adresse e-mail, nom d'affichage, photo de profil (facultative).\n\nDonnées d'usage : recettes mises en favori, messages de retour, notes et avis.\n\nDonnées techniques : modèle d'appareil, version du système, langue, jeton de notification push, identifiant publicitaire (IDFA iOS / AAID Android), région approximative.\n\nNous ne collectons aucune donnée bancaire, de paiement ou d'identité officielle.",
      },
      {
        heading: '3. Finalités du traitement',
        body:
          "Fournir l'application et ses fonctionnalités (compte, favoris, contenu dans votre langue).\n\nEnvoyer des notifications push concernant les nouvelles recettes (uniquement si vous acceptez).\n\nMesurer la performance de l'application et améliorer les fonctionnalités.\n\nAfficher des publicités pour garder l'application gratuite.\n\nRépondre à vos retours et demandes de support.",
      },
      {
        heading: '4. Base légale (RGPD)',
        body:
          "Nous traitons vos données sur la base (a) du contrat pour vous fournir l'application, (b) de votre consentement pour l'analytique et la publicité personnalisée, et (c) de notre intérêt légitime à exploiter et améliorer le service.",
      },
      {
        heading: '5. Services tiers',
        body:
          "Nous utilisons les sous-traitants suivants :\n\n• Google AdMob — publicité mobile. Voir https://policies.google.com/privacy.\n• Google Firebase Analytics — statistiques d'usage anonymisées.\n• Amazon Web Services (AWS) — hébergement, dans l'UE (Francfort).\n• Expo Push Notifications — diffusion des notifications.\n\nCes services peuvent traiter pour notre compte des données techniques limitées (IP, identifiant d'appareil, identifiant publicitaire).",
      },
      {
        heading: '6. Publicité et consentement',
        body:
          "Nous affichons des publicités via Google AdMob pour garder l'application gratuite. Dans l'UE, au Royaume-Uni, en Suisse et en Californie, nous vous demandons votre consentement à la première ouverture. Vous pouvez le retirer ou le modifier à tout moment depuis les paramètres de l'application. En cas de refus, seules des publicités non personnalisées vous seront proposées.",
      },
      {
        heading: '7. Durée de conservation',
        body:
          "Les données de compte sont conservées tant que le compte est actif, et supprimées dans les 30 jours suivant la suppression du compte. Les messages de retour sont conservés jusqu'à 24 mois. Les données analytiques anonymisées sont conservées jusqu'à 14 mois.",
      },
      {
        heading: '8. Vos droits',
        body:
          "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression, de limitation, de portabilité et d'opposition au traitement de vos données, ainsi que du droit de retirer votre consentement. Vous pouvez supprimer votre compte directement depuis l'application, ou nous écrire à hello@mypetitwok.com. Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr).",
      },
      {
        heading: '9. Enfants',
        body:
          "MyPetitWok n'est pas destinée aux enfants de moins de 16 ans. Nous ne collectons pas sciemment de données d'enfants. Si vous pensez qu'un enfant nous a transmis des données, contactez-nous pour que nous les supprimions.",
      },
      {
        heading: '10. Transferts internationaux',
        body:
          "Certains de nos prestataires (Google) peuvent transférer des données hors de l'UE. Ces transferts sont encadrés par les Clauses Contractuelles Types ou des garanties équivalentes.",
      },
      {
        heading: '11. Modifications',
        body:
          "Cette politique peut être mise à jour. La date « dernière mise à jour » ci-dessus sera modifiée en conséquence. Les changements significatifs seront annoncés dans l'application.",
      },
      {
        heading: '12. Contact',
        body: "Pour toute question sur cette politique ou vos données personnelles : hello@mypetitwok.com.",
      },
    ],
    back: '← Retour à l\'accueil',
  },
  zh: {
    title: '隐私政策',
    lastUpdated: '最后更新：2026年5月10日',
    intro:
      '本隐私政策说明 MyPetitWok（"我们"）在您使用我们的移动应用程序时如何收集、使用和保护您的个人数据。',
    sections: [
      {
        heading: '1. 关于我们',
        body:
          'MyPetitWok 由 Jia Guo（郭佳）以个体经营者身份运营，经营名称「MY PETIT WOK」，SIRET 104 407 721 00026，注册地址 27 Avenue Jean Médecin, 06000 Nice, France。如有任何隐私相关问题或需行使您的权利，请通过 hello@mypetitwok.com 联系我们。',
      },
      {
        heading: '2. 我们收集的数据',
        body:
          '账户数据：电子邮件地址、显示名、可选的头像。\n\n使用数据：您收藏的菜谱、提交的反馈消息、评分与评论。\n\n设备数据：设备型号、操作系统版本、语言、推送通知令牌、广告标识符（iOS 的 IDFA / Android 的 AAID）、大致地区。\n\n我们不收集任何银行、支付或官方身份证件信息。',
      },
      {
        heading: '3. 数据用途',
        body:
          '提供应用及其功能（账户、收藏、按语言提供的菜谱内容）。\n\n发送有关新菜谱的推送通知（仅在您同意时）。\n\n衡量应用性能并改进功能。\n\n展示广告以保持应用免费。\n\n回应您的反馈和支持请求。',
      },
      {
        heading: '4. 法律依据（GDPR）',
        body:
          '我们基于（a）为您提供应用的合同关系、（b）您对分析和个性化广告的同意、（c）我们运营和改进服务的合法利益来处理您的数据。',
      },
      {
        heading: '5. 第三方服务',
        body:
          '我们使用以下处理方：\n\n• Google AdMob — 移动广告。详见 https://policies.google.com/privacy。\n• Google Firebase Analytics — 匿名应用使用统计。\n• Amazon Web Services (AWS) — 数据托管，位于欧盟（法兰克福）。\n• Expo Push Notifications — 用于发送推送通知。\n\n这些服务可能代表我们处理有限的技术数据（IP、设备 ID、广告 ID）。',
      },
      {
        heading: '6. 广告与同意',
        body:
          '我们通过 Google AdMob 展示广告以保持应用免费。在欧盟、英国、瑞士和加利福尼亚州，我们会在您首次打开应用时请求您的同意。您可以随时在应用内设置中撤回或更改选择。如果您拒绝，我们仅向您展示非个性化广告。',
      },
      {
        heading: '7. 数据保留',
        body:
          '账户数据在您的账户激活期间保留，并在账户删除后 30 天内删除。反馈消息最长保留 24 个月。匿名分析数据最长保留 14 个月。',
      },
      {
        heading: '8. 您的权利',
        body:
          '根据 GDPR，您有权访问、更正、删除、限制、可携带和反对处理您的个人数据，并有权撤回同意。您可以随时从应用内删除您的账户，或通过 hello@mypetitwok.com 联系我们。您还可以向法国数据保护机构（CNIL，www.cnil.fr）提出投诉。',
      },
      {
        heading: '9. 儿童',
        body:
          'MyPetitWok 并非面向 16 岁以下儿童。我们不会有意收集儿童数据。如您认为儿童向我们提供了数据，请联系我们以便删除。',
      },
      {
        heading: '10. 国际数据传输',
        body:
          '我们的部分服务提供商（Google）可能会将数据传输至欧盟以外。此类传输受标准合同条款或同等保障措施约束。',
      },
      {
        heading: '11. 政策变更',
        body:
          '本政策可能会更新。上方"最后更新"日期会相应变更。重大变更将在应用内公告。',
      },
      {
        heading: '12. 联系方式',
        body: '关于本政策或您的个人数据的任何问题，请联系：hello@mypetitwok.com。',
      },
    ],
    back: '← 返回首页',
  },
};

export function getPrivacy(lang: Lang) {
  return privacyTranslations[lang];
}
