import { useLang } from '../../core/context/LanguageContext.tsx';
import SelectDropdown, { SelectDropdownOptionInterface } from './SelectDropdown.tsx';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import React from 'react';
import { IconButton } from '@mui/material';

// const styles = {
//     selectClassName: {
//         // margin: '0 1rem',
//         // display: 'flex',
//         // alignItems: 'center',
//         backgroundColor: 'var(--red)',
//     },
// }

const SelectLanguageDropdown: React.FC = () => {
    const { lang, setLang } = useLang();

    const handleLanguageChange = () => {
        setLang(lang === 'en' ? 'th' : 'en');
    };

    const options: SelectDropdownOptionInterface[] = [
        { value: 'en', label: 'EN' },
        { value: 'th', label: 'TH' },
    ];

    return (
        <SelectDropdown
            options={options}
            // placeholder
            selectedOption={lang}
            onChange={handleLanguageChange}
            icon={<LanguageRoundedIcon />}
            // style={styles.selectClassName}
        />
    );
};

export const SelectLanguageDropdownMobile: React.FC = () => {
    const { lang, setLang } = useLang();

    // const handleLanguageChange = () => {
    //     setLang(lang === 'en' ? 'th' : 'en');
    // };
    //
    // const options: SelectDropdownOptionInterface[] = [
    //     { value: 'en', label: 'EN' },
    //     { value: 'th', label: 'TH' },
    // ];

    const handleToggle = () => {
        setLang(lang === 'en' ? 'th' : 'en');
    };

    return (
        <IconButton onClick={handleToggle} sx={{ color: 'var(--soft-white)' }}>
            <span style={{ display: 'flex', alignItems: 'center' }}>
                <LanguageRoundedIcon
                    onClick={handleToggle}
                    sx={{ color: 'var(--soft-white)', cursor: 'pointer' }}
                />
            </span>
        </IconButton>
    );
};

export default SelectLanguageDropdown;
