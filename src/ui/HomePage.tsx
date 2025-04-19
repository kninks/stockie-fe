import PredictSection from './sections/predict/PredictSection.tsx';
import HowToUseSection from './sections/howToUse/HowToUseSection.tsx';
import IndustrySection from './sections/industry/IndustrySection.tsx';
import HowItWorksSection from './sections/howItWorks/HowItWorksSection.tsx';
import './styles/HomePage.css';
import NavBar from './layout/NavBar.tsx';
import Footer from './layout/Footer.tsx';
import LandingSection from './sections/landing/LandingSection.tsx';
import { useMediaQuery, useTheme } from '@mui/material';

const HomePage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    // useEffect(() => {
    //     const sections = document.querySelectorAll('[data-section]');
    //
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach((entry) => {
    //                 const section = entry.target as HTMLElement;
    //                 const rect = entry.boundingClientRect;
    //                 const windowHeight = window.innerHeight;
    //
    //                 if (entry.intersectionRatio >= 0.3) {
    //                     // ✅ Fully visible after 30% is shown
    //                     section.style.setProperty('--visibility', '1');
    //                 } else if (rect.top > 0 && rect.top < windowHeight) {
    //                     // 🔄 Gradually fade in while entering
    //                     section.style.setProperty(
    //                         '--visibility',
    //                         entry.intersectionRatio.toString()
    //                     );
    //                 } else if (rect.top >= windowHeight) {
    //                     // ❌ Fade out ONLY when leaving through the bottom
    //                     section.style.setProperty('--visibility', '0');
    //                 }
    //                 // ❌ Do nothing if leaving through the top
    //             });
    //         },
    //         { threshold: Array.from({ length: 11 }, (_, i) => i * 0.1) } // Visibility steps from 0 to 1
    //     );
    //
    //     sections.forEach((section) => observer.observe(section));
    //
    //     return () => observer.disconnect();
    // }, []);

    return (
        <>
            <NavBar />
            <LandingSection />
            <div className={isMobile ? 'page-mobile' : 'page'}>
                <section id="predict" className="section" data-section="true">
                    <PredictSection />
                </section>
                <section id="how-to-use" className="section" data-section="true">
                    <HowToUseSection />
                </section>
                <section id="industry" className="section" data-section="true">
                    <IndustrySection />
                </section>
                <section id="guide" className="section" data-section="true">
                    <HowItWorksSection />
                </section>
            </div>
            <Footer />
        </>
    );
};

export default HomePage;
