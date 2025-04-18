import { Button, Grid2, Snackbar } from '@mui/material';
import styles from './styles/Predict.module.css';
import { useEffect, useState } from 'react';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
// import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded';
import SelectDropdown from '../../components/SelectDropdown.tsx';
import PredictionResultDashboard from './PredictionResultDashboard.tsx';
import { usePrediction } from '../../../core/api/apiService.ts';
import { PredictRequestInterface } from '../../../core/models/apiInterface.ts';
import { useInitialInfo } from '../../../core/context/InitialInfoContext.tsx';
// import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { useLang } from '../../../core/context/LanguageContext.tsx';
import SectionHeader from '../../components/SectionHeader.tsx';
import { IconButton } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

// https://mui.com/material-ui/material-icons/?theme=Rounded&query=group

const PredictSection = () => {
    const { t } = useLang();
    const predictText = t.predictSection;
    const errorText = t.common.error;

    const { initialInfo } = useInitialInfo();
    const industryOptions = initialInfo.industryOptions;
    const periodOptions = initialInfo.periodOptions;

    const [selectedIndustry, setSelectedIndustry] = useState<string>('agro');
    const [selectedPeriod, setSelectedPeriod] = useState<number>(1);
    const { data, loading, error, fetchData } = usePrediction();

    const [openErrorToast, setOpenErrorToast] = useState(true);

    const handlePredict = async () => {
        const requestData: PredictRequestInterface = {
            industry: selectedIndustry,
            period: selectedPeriod,
        };
        try {
            setOpenErrorToast(false);
            await fetchData(requestData);
        } catch (error) {
            console.error('Error fetching prediction:', error);
            setTimeout(() => setOpenErrorToast(true), 50);
        }
    };

    useEffect(() => {
        if (error) {
            setOpenErrorToast(true);
        }
    }, [error]);

    return (
        <>
            <Grid2
                container
                direction="column"
                spacing={2}
                size={{ xs: 12, sm: 12, md: 10, lg: 10, xl: 8 }}
                className={styles.wrapper}
            >
                <SectionHeader>{predictText.title}</SectionHeader>
                <Grid2
                    container
                    direction="row"
                    sx={{
                        display: 'flex',
                        alignItems: 'end',
                        border: '1px solid var(--border-color)',
                        padding: '1rem',
                        paddingBottom: '1.2rem',
                        borderRadius: '1.5rem',
                    }}
                >
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
                        <Button
                            variant="contained"
                            startIcon={<AutoAwesomeRoundedIcon />}
                            onClick={handlePredict}
                            loading={loading}
                            loadingPosition="start"
                            sx={{
                                'backgroundColor': 'var(--accent-yellow)',
                                'color': 'var(--white)',
                                'borderRadius': '3rem',
                                'width': '100%',
                                'height': '2.3rem',
                                'fontWeight': '600',
                                'fontSize': '1.05rem',
                                'marginTop': '0.6rem',
                                '&:hover': {
                                    backgroundColor: 'var(--sub-yellow)',
                                },
                                '&:focus': { outline: 'none' },
                            }}
                        >
                            {predictText.predictButton}
                        </Button>
                    </Grid2>
                </Grid2>
                <Grid2
                    size="grow"
                    sx={{
                        border: '1px solid var(--border-color)',
                        padding: '1rem',
                        borderRadius: '1.5rem',
                    }}
                >
                    <PredictionResultDashboard data={data} error={error} />
                </Grid2>
            </Grid2>
            <Snackbar
                open={!!error && openErrorToast}
                autoHideDuration={4000}
                onClose={() => {
                    setOpenErrorToast(false);
                }}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                message={errorText}
                ContentProps={{
                    sx: {
                        backgroundColor: 'var(--red)',
                        color: 'var(--white)',
                        fontWeight: '600',
                        justifyContent: 'center',
                        width: 'fit-content',
                    },
                }}
                action={
                    <IconButton
                        size="small"
                        color="inherit"
                        onClick={() => setOpenErrorToast(false)}
                    >
                        <CloseRoundedIcon fontSize="small" />
                    </IconButton>
                }
            />
        </>
    );
};

export default PredictSection;
