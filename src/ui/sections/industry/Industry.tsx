import './styles/Industry.css';
import styles from './styles/Industry.module.css';
import SectionHeader from '../../components/SectionHeader.tsx';
import { Typography } from '@mui/material';
import { IndustryInfoInterface } from './models/industryInterface.ts';
import { useInitialInfo } from '../../../core/context/InitialInfoContext.tsx';
import { useLang } from '../../../core/context/LanguageContext.tsx';

const Industry = () => {
    const { t } = useLang();
    const staticText = t.industrySection;
    const { initialInfo } = useInitialInfo();
    const industryInfo: IndustryInfoInterface[] = initialInfo.industryInfo;
    return (
        <>
            <SectionHeader>{staticText.title}</SectionHeader>
            <div className={styles.container}>
                {industryInfo.map((industry) => (
                    <div className={styles.industryCard} key={industry.industryCode}>
                        <div>
                            <Typography
                                sx={{
                                    fontSize: 'var(--header-4)',
                                    fontWeight: 600,
                                    textAlign: 'left',
                                }}
                            >
                                {industry.industryName}
                            </Typography>
                            <Typography
                                sx={{
                                    textAlign: 'left',
                                }}
                            >
                                {industry.industryDescription}
                            </Typography>
                        </div>
                        <div>
                            {industry.stocksInfo.map((stock) => (
                                <div className={styles.stockInfoWrapper} key={stock.stockTicker}>
                                    <Typography>{stock.stockTicker}</Typography>
                                    <Typography>{stock.stockName}</Typography>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Industry;
