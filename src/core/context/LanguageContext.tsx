import { en } from '../i18n/en.ts';
import { th } from '../i18n/th.ts';
import { createContext, ReactNode, useContext, useState } from 'react';

type Lang = 'en' | 'th';
const translations = { en, th };

export const LanguageContext = createContext({
    lang: 'en' as Lang,
    setLang: (lang: Lang) => {},
    t: en,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLang] = useState<Lang>('en');
    const t = translations[lang];

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
    );
};

export const useLang = () => useContext(LanguageContext);
