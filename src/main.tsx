import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ThemeProvider } from './core/context/ThemeContext.tsx';
import { InitialInfoProvider } from './core/context/InitialInfoContext.tsx';
import { LanguageProvider } from './core/context/LanguageContext.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider>
            <LanguageProvider>
                <InitialInfoProvider>
                    <App />
                </InitialInfoProvider>
            </LanguageProvider>
        </ThemeProvider>
    </StrictMode>
);
