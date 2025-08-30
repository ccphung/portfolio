import React, { useState, useEffect } from 'react';
import i18n from '../../i18n';

const locales = ['fr', 'en'];

export default function LocaleSwitcher() {
  const [currentLocale, setCurrentLocale] = useState(i18n.language || 'fr');

  useEffect(() => {
    const handleLanguageChange = (lng) => setCurrentLocale(lng);
    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  const handleChange = (locale) => {
    i18n.changeLanguage(locale);
    setCurrentLocale(locale);
    document.cookie = `LOCALE=${locale}; path=/; max-age=31536000`;
  };

  return (
    <div className="mr-10 flex justify-end">
      {locales.map((locale, index) => (
        <div key={locale} className="flex items-center">
          <button
            onClick={() => handleChange(locale)}
            className={`text-sm capitalize ${
              currentLocale === locale ? 'border-b border-black' : ''
            }`}
          >
            {locale}
          </button>
          {index < locales.length - 1 && <span className="mx-1">/</span>}
        </div>
      ))}
    </div>
  );
}
