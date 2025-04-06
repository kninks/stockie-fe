import React, { useEffect, useState } from 'react';
import styles from './styles/NavBar.module.css';
import { ThemeToggleMobile } from '../components/ThemeToggle.tsx';
import { useLang } from '../../core/context/LanguageContext.tsx';
import { SelectLanguageDropdownMobile } from '../components/SelectLanguageDropdown.tsx';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import TempDrawer from '../components/TempDrawer.tsx';

const MobileNavBar: React.FC<{
    navItems: { id: string; label: string }[];
    active: string;
    onNavigate: (id: string) => void;
}> = ({ navItems, active, onNavigate }) => {
    return (
        <nav className={styles.container}>
            <div className={styles.navItemWrapperLeft}>
                <TempDrawer navItems={navItems} active={active} onNavigate={onNavigate} />
            </div>
            <div className={styles.navItemWrapperRight}>
                <ThemeToggleMobile />
                <SelectLanguageDropdownMobile />
            </div>
        </nav>
    );
};

const DesktopNavBar: React.FC<{
    navItems: { id: string; label: string }[];
    active: string;
    onNavigate: (id: string) => void;
}> = ({ navItems, active, onNavigate }) => {
    const { t } = useLang();
    return (
        <nav className={styles.container}>
            <div className={styles.navItemWrapperLeft}>
                <Typography
                    sx={{
                        color: 'var(--soft-white)',
                        letterSpacing: '0.1rem',
                        fontSize: '1.2rem',
                        marginLeft: '1rem',
                    }}
                >
                    {t.layout.home.title}
                </Typography>
            </div>
            <div className={styles.navItemWrapperRight}>
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        className={`${styles.navItem} ${active === item.id ? styles.active : ''}`}
                        onClick={() => onNavigate(item.id)}
                    >
                        {item.label}
                    </button>
                ))}
                {/*<ThemeToggle />*/}
                <ThemeToggleMobile />
                {/*<SelectLanguageDropdown />*/}
                <SelectLanguageDropdownMobile />
            </div>
        </nav>
    );
};

const NavBar: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const { t } = useLang();
    const navItems = [
        { id: 'predict', label: t.layout.navbar.predict },
        { id: 'industry', label: t.layout.navbar.industry },
        { id: 'how-to-use', label: t.layout.navbar.howToUse },
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
