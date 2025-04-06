import styles from './styles/HowItWorks.module.css';
import SectionHeader from '../../components/SectionHeader.tsx';
import { Grid2, Typography } from '@mui/material';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import { useLang } from '../../../core/context/LanguageContext.tsx';

const HowItWorks = () => {
    const { t } = useLang();
    const staticText = t.howItWorksSection;
    return (
        <>
            <SectionHeader>{staticText.title}</SectionHeader>
            <Grid2
                container
                sx={{ display: 'flex', alignItems: 'flex-start' }}
                spacing={4}
                className={styles.container}
            >
                {staticText.manual.map((m, index) => (
                    <Grid2
                        className={styles.card}
                        key={index}
                        test-id={`manual-card-${index}`}
                        size={{ xs: 12, sm: 6, md: 6, lg: 3, xl: 3 }}
                    >
                        <div className={styles.iconWrapper}>
                            <PsychologyRoundedIcon fontSize={'large'} />
                        </div>
                        <Typography sx={{ fontSize: 'var(--header-4)', fontWeight: 600 }}>
                            {m.header}
                        </Typography>
                        <Typography>{m.description}</Typography>
                    </Grid2>
                ))}
            </Grid2>
            {/*<div className={styles.container}>*/}
            {/*    {staticText.manual.map((m, index) => (*/}
            {/*        <div className={styles.card} key={index} test-id={`manual-card-${index}`}>*/}
            {/*            <div className={styles.iconWrapper}>*/}
            {/*                <PsychologyRoundedIcon fontSize={'large'} />*/}
            {/*            </div>*/}
            {/*            <Typography sx={{ fontSize: 'var(--header-4)', fontWeight: 600 }}>*/}
            {/*                {m.header}*/}
            {/*            </Typography>*/}
            {/*            <Typography>{m.description}</Typography>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </>
    );
};

export default HowItWorks;
