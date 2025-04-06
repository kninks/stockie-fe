import styles from './styles/HowToUse.module.css';
import SectionHeader from '../../components/SectionHeader.tsx';
import { Typography } from '@mui/material';
import { useLang } from '../../../core/context/LanguageContext.tsx';

const HowToUse = () => {
    const { t } = useLang();
    const staticText = t.howToUseSection;
    return (
        <>
            <SectionHeader>{staticText.title}</SectionHeader>
            {staticText.steps.map((step, index) => (
                <div className={styles.manualCard} key={index} test-id={`step-card-${index}`}>
                    <div className={styles.number}>
                        <Typography>{index + 1}</Typography>
                    </div>
                    <div className={styles.textWrapper}>
                        <Typography sx={{ fontSize: 'var(--header-4)', fontWeight: 600 }}>
                            {step.header}
                        </Typography>
                        <Typography>{step.description}</Typography>
                    </div>
                </div>
            ))}
        </>
    );
};

export default HowToUse;
