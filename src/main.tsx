import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ThemeProvider } from './core/context/ThemeContext.tsx';
import { InitialInfoProvider } from './core/context/InitialInfoContext.tsx';
import { LanguageProvider } from './core/context/LanguageContext.tsx';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import theme from './core/context/MuiThemeContext.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MuiThemeProvider theme={theme}>
            <ThemeProvider>
                <LanguageProvider>
                    <InitialInfoProvider>
                        <App />
                    </InitialInfoProvider>
                </LanguageProvider>
            </ThemeProvider>
        </MuiThemeProvider>
    </StrictMode>
);
