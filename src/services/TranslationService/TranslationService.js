import i18next from 'i18next';
import XHR from 'i18next-xhr-backend';

export default {
  /* Initializes translation library asynchronously (returns a promise) */
  load() {
    const i18nextConfig = {
      fallbackLng: 'en',
      lng: 'en',
      backend: {
        loadPath: '/locales/{{ns}}-{{lng}}.json',
      },
    };

    return new Promise((resolve, reject) => {
      i18next.use(XHR).init(i18nextConfig, (error) => {
        if (error) {
          reject('Translation service could not load translation files');
        } else {
          resolve();
        }
      });
    });
  },
};
