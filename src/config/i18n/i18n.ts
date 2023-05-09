import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from './locale/en.json';
import esTranslations from './locale/es.json';

i18next
.use(initReactI18next)
.use(LanguageDetector) // see full detection options here: https://github.com/i18next/i18next-browser-languageDetector
.init({
    fallbackLng: 'en',
    detection: {
        order: ['navigator']
    },
    resources: {
        en: {
            translation: enTranslations
        },
        es: {
            translation: esTranslations
        }
    },
    parseMissingKeyHandler: (missing) => {
        console.log('Missing: ' + missing)
        const lang = missing[0].split('-')[0];
        
        return lang;
    },
}); 