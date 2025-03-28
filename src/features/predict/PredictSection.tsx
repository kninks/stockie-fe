import { Button, Grid2, styled, Typography } from '@mui/material';
import styles from './styles/Predict.module.css';
import { useState } from 'react';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
// import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { industryOptions, periodOptions, stockie } from '../../data/predictData.ts';
import SectionHeader from '../../ui/components/SectionHeader.tsx';
import { usePrediction } from './services/predictService.ts';
import { PredictRequestInterface } from './models/predictApiInterface.ts';
import SelectDropdown from '../../ui/components/SelectDropdown.tsx';

// https://mui.com/material-ui/material-icons/?theme=Rounded&query=group

const PredictButton = styled(Button)({
    backgroundColor: 'var(--yellow)',
    color: 'var(--white)',
    borderRadius: '20px',
    width: '100%',
    // textTransform: "none"
});

const PredictSection = () => {
    const [selectedIndustry, setSelectedIndustry] = useState<string>('');
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
            <SectionHeader>Predict</SectionHeader>
            <Grid2 container spacing={4} direction={'row'} sx={{ justifyContent: 'center' }}>
                <Grid2 size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
                    <Typography variant="h2">{stockie.title}</Typography>
                    <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                        {stockie.description}
                    </Typography>
                    <div className={styles.disclaimerContainer}>
                        <InfoRoundedIcon />
                        <Typography variant="body1">{stockie.disclaimer}</Typography>
                    </div>
                </Grid2>
                <Grid2
                    container
                    direction="column"
                    spacing={2}
                    size={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 8 }}
                >
                    <Grid2 container direction="row">
                        <Grid2 size={{ xs: 7, sm: 5, md: 5, lg: 5, xl: 5 }}>
                            <SelectDropdown
                                options={industryOptions}
                                placeholder={'Select an Industry'}
                                selectedOption={selectedIndustry}
                                onChange={setSelectedIndustry}
                                icon={<BusinessCenterRoundedIcon />}
                            />
                        </Grid2>
                        <Grid2 size={{ xs: 5, sm: 4, md: 4, lg: 4, xl: 4 }}>
                            <SelectDropdown
                                options={periodOptions}
                                placeholder={'Period'}
                                selectedOption={selectedPeriod}
                                onChange={setSelectedPeriod}
                                icon={<AccessTimeFilledRoundedIcon />}
                            />
                        </Grid2>
                        <Grid2 size={{ xs: 12, sm: 3, md: 3, lg: 3, xl: 3 }}>
                            <PredictButton
                                variant="contained"
                                startIcon={<AutoAwesomeRoundedIcon />}
                                onClick={handlePredict}
                                loading={loading}
                                loadingPosition="start"
                            >
                                Predict
                            </PredictButton>
                        </Grid2>
                    </Grid2>
                    <Grid2 size="grow" sx={{ backgroundColor: 'var(--brown)', minHeight: '200px' }}>
                        {data && (
                            <Typography variant="h2" sx={{ color: 'var(--white)' }}>
                                Prediction Results
                                {data.recommendedStock.name},
                                {data.recommendedStock.predictedPriceUpperBound},
                                {data.recommendedStock.predictedPriceLowerBound},
                                {data.recommendedStock.isIncrease}
                            </Typography>
                        )}
                        {error && (
                            <Typography variant="h2" sx={{ color: 'var(--white)' }}>
                                Error fetching prediction: {error}
                            </Typography>
                        )}
                    </Grid2>
                </Grid2>
            </Grid2>
        </>
    );
};

export default PredictSection;
