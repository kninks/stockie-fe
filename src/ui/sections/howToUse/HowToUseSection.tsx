import styles from './styles/HowToUse.module.css';
import SectionHeader from '../../components/SectionHeader.tsx';
import { Grid2, Typography } from '@mui/material';
import { useLang } from '../../../core/context/LanguageContext.tsx';

const HowToUseSection = () => {
    const { t } = useLang();
    const staticText = t.howToUseSection;
    return (
        <>
            <SectionHeader>{staticText.title}</SectionHeader>
            <Grid2 container direction="row" spacing={2} className={styles.wrapper}>
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
                    </Grid2>
                ))}
            </Grid2>
        </>
    );
};

export default HowToUseSection;
