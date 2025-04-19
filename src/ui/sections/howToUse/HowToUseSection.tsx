import styles from './styles/HowToUse.module.css';
import SectionHeader from '../../components/SectionHeader.tsx';
import { Grid2, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import { useLang } from '../../../core/context/LanguageContext.tsx';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const HowToUseSection = () => {
    const { t } = useLang();
    const staticText = t.howToUseSection;

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleScrollToPredict = () => {
        document.getElementById('predict')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div style={{ minHeight: '90vh' }}>
            <SectionHeader>{staticText.title}</SectionHeader>
            <Grid2
                container
                direction="row"
                spacing={2}
                sx={{
                    marginBottom: '2rem',
                }}
            >
                {staticText.steps.map((step, index) => (
                    <Grid2
                        size={{ xs: 12, sm: 4, md: 4, lg: 4, xl: 4 }}
                        className={styles.manualCard}
                        key={index}
                        test-id={`step-card-${index}`}
                    >
                        <div className={styles.number}>
                            <Typography sx={{ fontSize: 'var(--header-4)' }}>
                                {index + 1}
                            </Typography>
                        </div>
                        <Typography sx={{ fontSize: 'var(--header-4)', fontWeight: 600 }}>
                            {step.header}
                        </Typography>
                        <Typography>{step.description}</Typography>
                        {!isMobile && step.picture1 && (
                            <img
                                src={step.picture1}
                                alt={step.picture1}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                            />
                        )}
                        {!isMobile && step.picture2 && (
                            <>
                                <ArrowDownwardIcon />
                                <img
                                    src={step.picture2}
                                    alt={step.picture2}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                />
                            </>
                        )}
                    </Grid2>
                ))}
            </Grid2>

            <Button
                variant="contained"
                onClick={handleScrollToPredict}
                disableRipple={false}
                sx={{
                    'height': '2.3rem',
                    'backgroundColor': 'var(--primary)',
                    'color': 'var(--white)',
                    'borderRadius': '3rem',
                    'marginTop': '1rem',
                    // 'marginBottom': '6vh',
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
                {staticText.startButton}
            </Button>
        </div>
    );
};

export default HowToUseSection;
