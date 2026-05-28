import type { Lang } from './content';

type DeleteAccountContent = {
  title: string;
  lastUpdated: string;
  intro: string;
  inAppTitle: string;
  inAppSteps: string[];
  emailTitle: string;
  emailBody: string;
  dataNote: string;
  back: string;
};

const deleteAccountTranslations: Record<Lang, DeleteAccountContent> = {
  en: {
    title: 'Delete Your Account',
    lastUpdated: 'Last updated: 28 May 2026',
    intro:
      'You can permanently delete your MyPetitWok account and all associated data at any time. Choose one of the methods below.',
    inAppTitle: 'Option 1: Delete from the app',
    inAppSteps: [
      'Open MyPetitWok and go to your Profile.',
      'Tap "Delete Account" at the bottom of the page.',
      'Enter your password to confirm.',
      'Your account and all data will be permanently removed.',
    ],
    emailTitle: 'Option 2: Request by email',
    emailBody:
      'If you can no longer access the app, send an email to hello@mypetitwok.com from the email address associated with your account. We will process your request within 30 days as required by GDPR Article 17.',
    dataNote:
      'When your account is deleted, we permanently remove: your profile information (name, email, photo), your favourites and ratings, your feedback messages, and your push notification token. This action cannot be undone.',
    back: 'Back to home',
  },
  fr: {
    title: 'Supprimer votre compte',
    lastUpdated: 'Derniere mise a jour : 28 mai 2026',
    intro:
      'Vous pouvez supprimer definitivement votre compte MyPetitWok et toutes les donnees associees a tout moment. Choisissez une des methodes ci-dessous.',
    inAppTitle: 'Option 1 : Supprimer depuis l\'application',
    inAppSteps: [
      'Ouvrez MyPetitWok et allez dans votre Profil.',
      'Appuyez sur "Supprimer le compte" en bas de la page.',
      'Saisissez votre mot de passe pour confirmer.',
      'Votre compte et toutes vos donnees seront definitivement supprimes.',
    ],
    emailTitle: 'Option 2 : Demande par e-mail',
    emailBody:
      'Si vous ne pouvez plus acceder a l\'application, envoyez un e-mail a hello@mypetitwok.com depuis l\'adresse e-mail associee a votre compte. Nous traiterons votre demande dans un delai de 30 jours conformement a l\'article 17 du RGPD.',
    dataNote:
      'Lorsque votre compte est supprime, nous supprimons definitivement : vos informations de profil (nom, e-mail, photo), vos favoris et evaluations, vos messages de retour, et votre jeton de notification push. Cette action est irreversible.',
    back: 'Retour a l\'accueil',
  },
  zh: {
    title: 'Delete Your Account',
    lastUpdated: 'Last updated: 28 May 2026',
    intro:
      'You can permanently delete your MyPetitWok account and all associated data at any time. Choose one of the methods below.',
    inAppTitle: 'Option 1: Delete from the app',
    inAppSteps: [
      'Open MyPetitWok and go to your Profile.',
      'Tap "Delete Account" at the bottom of the page.',
      'Enter your password to confirm.',
      'Your account and all data will be permanently removed.',
    ],
    emailTitle: 'Option 2: Request by email',
    emailBody:
      'If you can no longer access the app, send an email to hello@mypetitwok.com from the email address associated with your account. We will process your request within 30 days as required by GDPR Article 17.',
    dataNote:
      'When your account is deleted, we permanently remove: your profile information (name, email, photo), your favourites and ratings, your feedback messages, and your push notification token. This action cannot be undone.',
    back: 'Back to home',
  },
};

export function getDeleteAccount(lang: Lang): DeleteAccountContent {
  return deleteAccountTranslations[lang];
}
