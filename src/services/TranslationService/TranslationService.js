import i18next from 'i18next';
var enTranslations = require('src/locales/translation-en.json');
var arTranslations = require('src/locales/translation-ar.json');

export default {
  /* Initializes translation library asynchronously (returns a promise) */
  load(language) {
    const i18nextConfig = {
      lng: language,
      resources: {
        en: enTranslations,
        ar: arTranslations
      }
    };

    return new Promise((resolve, reject) => {
      i18next.init(i18nextConfig, (err, t) => {
            // initialized and ready to go!
            console.log('Loaded translation resources.'); // hw = 'hello world'
          }
      );
    });
  },
};
