import React, { useEffect, useState } from 'react';
import styles from './styles/NavBar.module.css';
import { ThemeToggle } from '../components/ThemeToggle.tsx';
import { useLang } from '../../core/context/LanguageContext.tsx';
import { SelectLanguageDropdown } from '../components/SelectLanguageDropdown.tsx';
import { Button, Divider, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import {
    PlsSupportModalIconStockie,
    PlsSupportModalSideStockie,
} from '../components/PlsSupportModal.tsx';

const MobileNavBar: React.FC<{
    navItems: { id: string; label: { text: string; icon: React.ElementType } }[];
    active: string;
    onNavigate: (id: string) => void;
}> = ({ navItems, active, onNavigate }) => {
    return (
        <nav className={styles.container}>
            <div style={{ height: '100%' }}>
                <PlsSupportModalIconStockie />
            </div>
            <div className={styles.navItemWrapperRight}>
                {navItems.map((item) => {
                    const Icon = item.label.icon;
                    return (
                        <IconButton
                            key={item.id}
                            onClick={() => onNavigate(item.id)}
                            sx={{
                                'color': 'var(--soft-white)',
                                'marginX': '0.15rem',
                                'transition': '0.3s',
                                ...(active === item.id && { background: 'var(--primary)' }),
                                '&:hover': { background: 'var(--primary)' },
                                '&:focus': { outline: 'none' },
                            }}
                        >
                            <Icon />
                        </IconButton>
                    );
                })}
                <Divider
                    style={{
                        width: '1.5px',
                        backgroundColor: 'var(--soft-white)',
                        height: '2.5rem',
                        margin: '0 0.5rem',
                    }}
                />
                <div style={{ display: 'flex', gap: '0.1rem' }}>
                    <ThemeToggle />
                    <SelectLanguageDropdown />
                </div>
            </div>
        </nav>
    );
};

const DesktopNavBar: React.FC<{
    navItems: { id: string; label: { text: string; icon: React.ElementType } }[];
    active: string;
    onNavigate: (id: string) => void;
}> = ({ navItems, active, onNavigate }) => {
    return (
        <nav className={styles.container}>
            <div style={{ height: '100%', marginLeft: '0.5rem' }}>
                <PlsSupportModalSideStockie />
            </div>
            <div className={styles.navItemWrapperRight}>
                {navItems.map((item) => (
                    <Button
                        key={item.id}
                        onClick={() => onNavigate(item.id)}
                        sx={{
                            'color': 'var(--soft-white)',
                            'background': 'transparent',
                            'border': 'none',
                            'borderRadius': 0,
                            'cursor': 'pointer',
                            'transition': '0.3s',
                            'height': '100%',
                            'margin': 0,
                            'padding': '0 0.8rem',
                            'textTransform': 'none',
                            ...(active === item.id && { background: 'var(--primary)' }),
                            '&:hover': { background: 'var(--primary)' },
                            '&:focus': { outline: 'none' },
                            '&.Mui-focusVisible': { boxShadow: 'none' },
                        }}
                    >
                        <Typography
                            sx={{
                                color: 'var(--soft-white)',
                                fontWeight: 400,
                                letterSpacing: '0.05rem',
                            }}
                        >
                            {item.label.text}
                        </Typography>
                    </Button>
                ))}
                <div
                    style={{
                        display: 'flex',
                        gap: '0.2rem',
                        marginLeft: '0.5rem',
                        marginRight: '0.5rem',
                    }}
                >
                    <ThemeToggle />
                    <SelectLanguageDropdown />
                </div>
            </div>
        </nav>
    );
};

const NavBar: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const { t } = useLang();
    const navItems = [
        { id: 'predict', label: t.layout.navbar.predict },
        { id: 'how-to-use', label: t.layout.navbar.howToUse },
        { id: 'industry', label: t.layout.navbar.industry },
        { id: 'guide', label: t.layout.navbar.howItWorks },
    ];
    const [active, setActive] = useState<string>('');

    const handleNavigate = (id: string) => {
        // setActive(id);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map((item) => document.getElementById(item.id));
            const offset = window.innerHeight / 2;

            sections.forEach((section) => {
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= offset && rect.bottom >= offset) {
                        setActive(section.id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger scroll detection on load

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [navItems]);

    return (
        <>
            {isMobile ? (
                <MobileNavBar navItems={navItems} active={active} onNavigate={handleNavigate} />
            ) : (
                <DesktopNavBar navItems={navItems} active={active} onNavigate={handleNavigate} />
            )}
        </>
    );
};

export default NavBar;
