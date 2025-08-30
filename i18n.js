import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonEn from './locales/en/common.json';
import commonFr from './/locales/fr/common.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { common: commonEn },
    fr: { common: commonFr },
  },
  lng: 'fr',
  fallbackLng: 'fr',
  ns: ['common'],
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
