import { IconButton } from '@mui/material';
import { useTheme } from './../../core/context/ThemeContext.tsx';
import BedtimeRoundedIcon from '@mui/icons-material/BedtimeRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
// import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';
// import Brightness7RoundedIcon from '@mui/icons-material/Brightness7Rounded';

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <IconButton
            onClick={toggleTheme}
            sx={{
                'color': 'var(--soft-white)',
                '&:focus': { outline: 'none' },
                '&.Mui-focusVisible': { boxShadow: 'none' },
            }}
        >
            {theme === 'dark' ? <BedtimeRoundedIcon /> : <WbSunnyRoundedIcon />}
            {/*{theme === 'dark' ? <Brightness4RoundedIcon /> : <Brightness7RoundedIcon />}*/}
        </IconButton>
    );
};
