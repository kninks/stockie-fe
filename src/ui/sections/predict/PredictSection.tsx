import { Button, Grid2, styled, Typography } from '@mui/material';
import styles from './styles/Predict.module.css';
import { useState } from 'react';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
// import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import SelectDropdown from '../../components/SelectDropdown.tsx';
import PredictionResultDashboard from './PredictionResultDashboard.tsx';
import { usePrediction } from '../../../core/api/apiService.ts';
import { PredictRequestInterface } from '../../../core/models/apiInterface.ts';
import { useInitialInfo } from '../../../core/context/InitialInfoContext.tsx';
import { useLang } from '../../../core/context/LanguageContext.tsx';

// https://mui.com/material-ui/material-icons/?theme=Rounded&query=group

const PredictButton = styled(Button)({
    backgroundColor: 'var(--accent-yellow)',
    color: 'var(--white)',
    borderRadius: '3rem',
    // borderRadius: '0.5rem',
    width: '100%',
    height: '2.3rem',
    fontWeight: '600',
    fontSize: '1.15rem',
    // textTransform: "none"
});

const PredictSection = () => {
    const { t } = useLang();
    const stockieText = t.layout.home;
    const predictText = t.predictSection;

    const { initialInfo } = useInitialInfo();
    const industryOptions = initialInfo.industryOptions;
    const periodOptions = initialInfo.periodOptions;

    const [selectedIndustry, setSelectedIndustry] = useState<string>('agro');
    const [selectedPeriod, setSelectedPeriod] = useState<number>(1);
    const { data, loading, error, fetchData } = usePrediction();

    const handlePredict = async () => {
        const requestData: PredictRequestInterface = {
            industry: selectedIndustry,
            period: selectedPeriod,
        };
        try {
            await fetchData(requestData);
        } catch (error) {
            console.error('Error fetching prediction:', error);
        }
    };

    return (
        <>
            <Grid2
                container
                spacing={4}
                direction={'row'}
                sx={{
                    justifyContent: 'center',
                    maxWidth: '1500px',
                }}
            >
                <Grid2
                    size={{ xs: 12, sm: 12, md: 10, lg: 10, xl: 4 }}
                    className={styles.infoContainer}
                >
                    <Typography
                        sx={{
                            fontSize: 'var(--title)',
                            letterSpacing: '0.2rem',
                            fontWeight: 600,
                        }}
                    >
                        {stockieText.title}
                    </Typography>
                    <Typography sx={{ fontSize: 'var(--header-3)', fontWeight: 600, mb: '0.5rem' }}>
                        {stockieText.subtitle}
                    </Typography>
                    <Typography sx={{ textAlign: 'justify' }}>{stockieText.description}</Typography>
                    <div className={styles.disclaimerContainer}>
                        <InfoRoundedIcon />
                        <Typography>{stockieText.disclaimer}</Typography>
                    </div>
                </Grid2>
                <Grid2
                    container
                    direction="column"
                    spacing={2}
                    size={{ xs: 12, sm: 12, md: 10, lg: 10, xl: 8 }}
                >
                    <Grid2 container direction="row" sx={{ display: 'flex', alignItems: 'end' }}>
                        <Grid2 size={{ xs: 12, sm: 7, md: 5, lg: 5, xl: 5 }}>
                            <SelectDropdown
                                options={industryOptions}
                                placeholder={predictText.selectIndustryPlaceholder}
                                selectedOption={selectedIndustry}
                                onChange={setSelectedIndustry}
                                icon={<BusinessCenterRoundedIcon />}
                                label={predictText.selectIndustryLabel}
                            />
                        </Grid2>
                        <Grid2 size={{ xs: 12, sm: 5, md: 4, lg: 4, xl: 4 }}>
                            <SelectDropdown
                                options={periodOptions}
                                placeholder={predictText.selectPeriodPlaceholder}
                                selectedOption={selectedPeriod}
                                onChange={setSelectedPeriod}
                                icon={<AccessTimeFilledRoundedIcon />}
                                label={predictText.selectPeriodLabel}
                            />
                        </Grid2>
                        <Grid2 size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}>
                            <PredictButton
                                variant="contained"
                                startIcon={<AutoAwesomeRoundedIcon />}
                                onClick={handlePredict}
                                loading={loading}
                                loadingPosition="start"
                            >
                                {predictText.predictButton}
                            </PredictButton>
                        </Grid2>
                    </Grid2>
                    <Grid2 size="grow">
                        {error && (
                            <Typography variant="h4" sx={{ color: 'var(--red)' }}>
                                Error fetching prediction: {error}
                            </Typography>
                        )}
                        <PredictionResultDashboard predictions={data} />
                    </Grid2>
                </Grid2>
            </Grid2>
        </>
    );
};

export default PredictSection;
