import type { Lang } from './content';

type Faq = { q: string; a: string };

type SupportContent = {
  title: string;
  intro: string;
  contactTitle: string;
  contactBody: string;
  email: string;
  responseNote: string;
  faqTitle: string;
  faqs: Faq[];
  back: string;
};

const EMAIL = 'hello@mypetitwok.com';

const supportTranslations: Record<Lang, SupportContent> = {
  en: {
    title: 'Support',
    intro:
      'Need help with MyPetitWok? We’re happy to assist. Check the common questions below, or reach out to us directly by email.',
    contactTitle: 'Contact us',
    contactBody:
      'For any question, bug report, or feedback, email us at:',
    email: EMAIL,
    responseNote: 'We usually reply within 2 business days.',
    faqTitle: 'Frequently asked questions',
    faqs: [
      {
        q: 'How do I save a recipe?',
        a: 'Tap the heart icon on any recipe. Saved recipes appear in the "Saved" tab. You need to be signed in to save recipes.',
      },
      {
        q: 'How do I change the app language?',
        a: 'Open your Profile, go to Settings, then Language, and pick English, French, or Chinese. Recipes reload in the selected language.',
      },
      {
        q: 'I forgot my password. What do I do?',
        a: 'On the login screen, tap "Forgot password". We’ll email you a 6-digit code to reset it.',
      },
      {
        q: 'How do I delete my account?',
        a: 'Go to your Profile and tap "Delete Account", or email us. See our account deletion page for details.',
      },
    ],
    back: 'Back to home',
  },
  fr: {
    title: 'Assistance',
    intro:
      'Besoin d’aide avec MyPetitWok ? Nous sommes la pour vous aider. Consultez les questions frequentes ci-dessous, ou contactez-nous directement par e-mail.',
    contactTitle: 'Nous contacter',
    contactBody:
      'Pour toute question, signalement de bug ou retour, ecrivez-nous a :',
    email: EMAIL,
    responseNote: 'Nous repondons generalement sous 2 jours ouvres.',
    faqTitle: 'Questions frequentes',
    faqs: [
      {
        q: 'Comment enregistrer une recette ?',
        a: 'Appuyez sur l’icone en forme de cœur sur une recette. Les recettes enregistrees apparaissent dans l’onglet « Enregistrees ». Vous devez etre connecte pour les enregistrer.',
      },
      {
        q: 'Comment changer la langue de l’application ?',
        a: 'Ouvrez votre Profil, allez dans Reglages, puis Langue, et choisissez francais, anglais ou chinois. Les recettes se rechargent dans la langue choisie.',
      },
      {
        q: 'J’ai oublie mon mot de passe. Que faire ?',
        a: 'Sur l’ecran de connexion, appuyez sur « Mot de passe oublie ». Nous vous enverrons un code a 6 chiffres par e-mail pour le reinitialiser.',
      },
      {
        q: 'Comment supprimer mon compte ?',
        a: 'Allez dans votre Profil et appuyez sur « Supprimer le compte », ou ecrivez-nous. Consultez notre page de suppression de compte pour plus de details.',
      },
    ],
    back: 'Retour a l’accueil',
  },
  zh: {
    title: '帮助与支持',
    intro:
      '使用 MyPetitWok 需要帮助吗？我们很乐意为您服务。请查看下方的常见问题，或直接通过电子邮件联系我们。',
    contactTitle: '联系我们',
    contactBody:
      '如有任何问题、错误反馈或建议，请发邮件至：',
    email: EMAIL,
    responseNote: '我们通常会在 2 个工作日内回复。',
    faqTitle: '常见问题',
    faqs: [
      {
        q: '如何收藏食谱？',
        a: '点击任意食谱上的爱心图标。收藏的食谱会出现在“收藏”选项卡中。您需要登录后才能收藏食谱。',
      },
      {
        q: '如何更改应用语言？',
        a: '打开“个人资料”，进入“设置”，然后选择“语言”，可选择中文、英文或法文。食谱将以所选语言重新加载。',
      },
      {
        q: '我忘记密码了，怎么办？',
        a: '在登录界面点击“忘记密码”。我们会向您发送一个 6 位验证码以重置密码。',
      },
      {
        q: '如何删除我的账户？',
        a: '进入“个人资料”并点击“删除账户”，或发邮件联系我们。详情请参阅我们的账户删除页面。',
      },
    ],
    back: '返回首页',
  },
};

export function getSupport(lang: Lang): SupportContent {
  return supportTranslations[lang];
}
