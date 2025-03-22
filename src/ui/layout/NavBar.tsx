import { useEffect, useState } from 'react';
import styles from '../styles/layouts/NavBar.module.css';
import { NavbarProps } from '../../core/models/ui/NavBar.ts';
import ThemeToggle from '../components/ThemeToggle.tsx';

const NavBar: React.FC<NavbarProps> = ({ navItems }) => {
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
            <nav className={styles.navbar}>
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
            </nav>
        </>
    );
};

export default NavBar;
