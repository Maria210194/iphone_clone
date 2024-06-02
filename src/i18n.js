// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import XHR from 'i18next-http-backend';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import localeDataEn from './translations/en.json';
import localeDataIt from "./translations/it.json";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  // en: {
  //   translation: localeDataEn,
  // },
  it: {
    translation: localeDataIt,
  },
};

const optionsDetection = {
  order: ["querystring", "navigator"],
  lookupQuerystring: "lng",
  htmlTag: document.documentElement,
};

// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init
i18n
  // .use(XHR)
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  // .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init(
    {
      detection: optionsDetection,
      resources,
      /* lng: 'en', */ // <--- turn off for detection to work
      lng: "it", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
      // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
      // if you're using a language detector, do not define the lng option
      fallbackLng: "it",
      // supportedLngs: ['en', 'it'],
      debug: false,
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
      // load: 'currentOnly',
      // react: {
      //   bindI18n: false,
      //   // wait: true,
      //   useSuspense: false,
      // },
    },
    (err) => {
      if (err) {
        console.error("Error loading translation files", err); // eslint-disable-line
        return;
      }
    }
  );
export default i18n;
