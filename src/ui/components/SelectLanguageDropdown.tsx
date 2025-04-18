import { useLang } from '../../core/context/LanguageContext.tsx';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import React from 'react';
import { IconButton } from '@mui/material';

export const SelectLanguageDropdown: React.FC = () => {
    const { lang, setLang } = useLang();

    const handleToggle = () => {
        setLang(lang === 'en' ? 'th' : 'en');
    };

    return (
        <IconButton
            onClick={handleToggle}
            sx={{
                'color': 'var(--soft-white)',
                '&:focus': { outline: 'none' },
                '&.Mui-focusVisible': { boxShadow: 'none' },
            }}
        >
            <LanguageRoundedIcon
                onClick={handleToggle}
                sx={{ color: 'var(--soft-white)', cursor: 'pointer' }}
            />
        </IconButton>
    );
};
