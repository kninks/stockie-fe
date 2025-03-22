import { Switch, FormControlLabel } from '@mui/material';
import { useTheme } from './../../core/context/ThemeContext.tsx';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <FormControlLabel
            control={<Switch checked={theme === 'dark'} onChange={toggleTheme} color="default" />}
            label={theme === 'dark' ? <Brightness4 /> : <Brightness7 />}
        />
    );
};

export default ThemeToggle;
