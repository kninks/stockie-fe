import styles from './styles/Industry.module.css';
import SectionHeader from '../../components/SectionHeader.tsx';
import { Typography } from '@mui/material';
import { IndustryInfoInterface } from './models/industryInterface.ts';
import { useInitialInfo } from '../../../core/context/InitialInfoContext.tsx';
import { useLang } from '../../../core/context/LanguageContext.tsx';

const IndustrySection = () => {
    const { t, lang } = useLang();
    const staticText = t.industrySection;

    const { initialInfo } = useInitialInfo();
    const industryInfo: IndustryInfoInterface[] = initialInfo.industryInfo;
    return (
        <>
            <SectionHeader>{staticText.title}</SectionHeader>
            <div className={styles.container}>
                {industryInfo.map((industry, index) => {
                    const industryName =
                        lang == 'th' ? industry.industryNameTH : industry.industryNameEN;
                    const industrySub = lang == 'th' ? industry.industryNameEN : null;

                    return (
                        <div className={styles.industryCard} key={index}>
                            <div>
                                <Typography
                                    sx={{
                                        fontSize: 'var(--header-4)',
                                        fontWeight: 600,
                                        textAlign: 'left',
                                    }}
                                >
                                    {industryName}
                                </Typography>
                                {industrySub && (
                                    <Typography
                                        sx={{
                                            fontSize: 'var(--caption)',
                                            textAlign: 'left',
                                            // color: 'var(--text-muted)',
                                        }}
                                    >
                                        ({industrySub})
                                    </Typography>
                                )}
                            </div>
                            <div>
                                {industry.stocksInfo.map((stock) => (
                                    <div
                                        className={styles.stockInfoWrapper}
                                        key={stock.stockTicker}
                                    >
                                        <Typography>{stock.stockTicker}</Typography>
                                        <Typography
                                            sx={{
                                                textAlign: 'right',
                                                color: 'var(--text-muted)',
                                            }}
                                        >
                                            {stock.stockName}
                                        </Typography>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default IndustrySection;
