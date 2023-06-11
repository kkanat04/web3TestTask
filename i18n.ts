import { I18n } from 'i18n-js';
import * as Localization from 'expo-localization';
import en from './src/locales/en/common.json';
import ru from './src/locales/ru/common.json';

const translations = {
  en,
  ru,
};

export const i18n = new I18n(translations);
i18n.locale = Localization.locale;
i18n.enableFallback = true;
