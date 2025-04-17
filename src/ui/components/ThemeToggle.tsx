import { Switch, FormControlLabel, IconButton } from '@mui/material';
import { useTheme } from './../../core/context/ThemeContext.tsx';
import { Brightness4, Brightness7 } from '@mui/icons-material';

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <FormControlLabel
            sx={{
                margin: '0 1rem 0 0',
                display: 'flex',
                alignItems: 'center',
            }}
            control={<Switch checked={theme === 'dark'} onChange={toggleTheme} color="default" />}
            label={
                theme === 'dark' ? (
                    <Brightness4 />
                ) : (
                    <Brightness7 style={{ color: 'var(--soft-white)' }} />
                )
            }
        />
    );
};

export const ThemeToggleMobile = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <IconButton
            onClick={toggleTheme}
            sx={{
                'color': 'var(--soft-white)',
                'padding': '6px',
                '&:focus': { outline: 'none' },
                '&.Mui-focusVisible': { boxShadow: 'none' },
                margin: '0 0.2rem 0 0.3rem',
            }}
        >
            {theme === 'dark' ? <Brightness4 /> : <Brightness7 />}
        </IconButton>
    );
};
