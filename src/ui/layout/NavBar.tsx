import { useEffect, useState } from 'react';
import styles from './styles/NavBar.module.css';
import ThemeToggle from '../components/ThemeToggle.tsx';
import { Button } from '@mui/material';
import { useLang } from '../../core/context/LanguageContext.tsx';

const NavBar: React.FC = () => {
    const { t, lang, setLang } = useLang();
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
            <nav className={styles.container}>
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        className={`${styles.navItem} ${active === item.id ? styles.active : ''}`}
                        onClick={() => handleNavigate(item.id)}
                    >
                        {item.label}
                    </button>
                ))}
                <ThemeToggle />
                <Button onClick={() => setLang(lang === 'en' ? 'th' : 'en')}>
                    Switch to {lang === 'en' ? 'ไทย' : 'English'}
                </Button>
            </nav>
        </>
    );
};

export default NavBar;
