import { Button, Typography } from '@mui/material';
import styles from './Landing.module.css';
import { useLang } from '../../../core/context/LanguageContext.tsx';

const LandingSection = () => {
    const { t } = useLang();
    const stockieText = t.layout.home;
    const handleScrollToUsage = () => {
        const element = document.getElementById('how-to-use');
        if (element) {
            const yOffset = -100;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.infoContainer}>
                    <Typography
                        sx={{
                            fontSize: 'var(--title)',
                            letterSpacing: '0.2rem',
                            fontWeight: 800,
                        }}
                    >
                        {stockieText.title}
                    </Typography>
                    <Typography sx={{ fontSize: 'var(--header-3)', fontWeight: 600, mb: '0.5rem' }}>
                        {stockieText.subtitle}
                    </Typography>
                    <Typography sx={{ textAlign: 'center' }}>{stockieText.description}</Typography>
                    <Button
                        variant="contained"
                        onClick={handleScrollToUsage}
                        disableRipple={false}
                        sx={{
                            'height': '2.3rem',
                            'backgroundColor': 'var(--primary)',
                            'color': 'var(--white)',
                            'borderRadius': '3rem',
                            'marginTop': '1rem',
                            'padding': '1.5rem 2rem',
                            'letterSpacing': '0.05rem',
                            'fontSize': '1.05rem',
                            'fontWeight': '600',
                            '&:hover': {
                                backgroundColor: 'var(--secondary)',
                            },
                            '&:focus': { outline: 'none' },
                        }}
                    >
                        {stockieText.getStarted}
                    </Button>
                </div>
                <div className={styles.disclaimerContainer}>
                    <Typography>{stockieText.disclaimer}</Typography>
                </div>
            </div>
        </>
    );
};

export default LandingSection;
