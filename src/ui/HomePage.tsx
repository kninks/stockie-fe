import PredictSection from '../features/predict/PredictSection.tsx';
import HowToUse from '../features/howToUse/HowToUse.tsx';
import Industry from '../features/industry/Industry.tsx';
import HowItWorks from '../features/howItWorks/HowItWorks.tsx';
import './styles/HomePage.css';
import NavBar from './layout/NavBar.tsx';
import { NavItem } from '../core/models/ui/NavBar.ts';
import { useEffect } from 'react';

const navItems: NavItem[] = [
    { id: 'predict', label: 'Predict' },
    { id: 'industry', label: 'Industry' },
    { id: 'how-to-use', label: 'How to use' },
    { id: 'how-it-works', label: 'How it works' },
];

const HomePage = () => {
    useEffect(() => {
        const sections = document.querySelectorAll('[data-section]');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const section = entry.target as HTMLElement;
                    const rect = entry.boundingClientRect;
                    const windowHeight = window.innerHeight;

                    if (entry.intersectionRatio >= 0.3) {
                        // ✅ Fully visible after 30% is shown
                        section.style.setProperty('--visibility', '1');
                    } else if (rect.top > 0 && rect.top < windowHeight) {
                        // 🔄 Gradually fade in while entering
                        section.style.setProperty(
                            '--visibility',
                            entry.intersectionRatio.toString()
                        );
                    } else if (rect.top >= windowHeight) {
                        // ❌ Fade out ONLY when leaving through the bottom
                        section.style.setProperty('--visibility', '0');
                    }
                    // ❌ Do nothing if leaving through the top
                });
            },
            { threshold: Array.from({ length: 11 }, (_, i) => i * 0.1) } // Visibility steps from 0 to 1
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <NavBar navItems={navItems} />
            <div className="page">
                <section id="predict" className="section" data-section="true">
                    <PredictSection />
                </section>
                <section id="industry" className="section" data-section="true">
                    <Industry />
                </section>
                <section id="how-to-use" className="section" data-section="true">
                    <HowToUse />
                </section>
                <section id="how-it-works" className="section" data-section="true">
                    <HowItWorks />
                </section>
            </div>
        </>
    );
};

export default HomePage;
