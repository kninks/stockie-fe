import { i18nInterface } from './i18nInterface.ts';

import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import BookRoundedIcon from '@mui/icons-material/BookRounded';
import BatchPredictionRoundedIcon from '@mui/icons-material/BatchPredictionRounded';

import SourceRoundedIcon from '@mui/icons-material/SourceRounded';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';

export const en: i18nInterface = {
    // Common
    common: {
        loading: 'loading',
        error: 'An error occurred',
        noData: 'No data available',
    },

    layout: {
        home: {
            title: 'Stockie',
            subtitle: 'Your Smart Assistant for Thai Stock Prediction',
            description: `Stockie uses machine learning to predict short-term stock returns in the 
            Thai market with over 95% accuracy. Perfect for both new and experienced investors.`,
            getStarted: 'Get Started',
            disclaimer: `Stockie is intended for educational purposes only -- not a licensed financial advisory platform.`,
        },
        navbar: {
            predict: {
                text: 'Prediction',
                icon: AutoAwesomeRoundedIcon,
            },
            howToUse: {
                text: 'Usage',
                icon: BookRoundedIcon,
            },
            industry: {
                text: 'Industry',
                icon: BusinessCenterRoundedIcon,
            },
            howItWorks: {
                text: 'About Engine',
                icon: BatchPredictionRoundedIcon,
            },
        },
    },

    // Predict Section
    predictSection: {
        title: 'Prediction',
        selectIndustryLabel: 'Industry',
        selectPeriodLabel: 'Period',
        selectIndustryPlaceholder: 'Choose an Industry',
        selectPeriodPlaceholder: 'Choose a Period',
        predictButton: 'Run Prediction',
        predictionDashboard: {
            title: 'Result',
            rank: 'Rank',
            stock: 'Stock',
            closingPrice: 'Closing Price',
            predictedPrice: 'Forecasted Price',
        },
    },

    // HowToUse
    howToUseSection: {
        title: 'Usage',
        steps: [
            {
                header: 'Select an Industry',
                description: `Choose one industry from the dropdown to analyze five top-traded stocks in that group.`,
                picture1: `/indus-before.png`,
                picture2: `/indus-after.png`,
            },
            {
                header: 'Select a Prediction Period',
                description: `Pick the number of days ahead to forecast. For example, 
                1 is the next market date.`,
                picture1: `/period-before.png`,
                picture2: `/period-after.png`,
            },
            {
                header: 'Click "Run Prediction"',
                description: `Five stocks is ranked by predicted growth. Results appear in a sortable dashboard.`,
                picture1: '/predict-before.png',
                picture2: '/predict-after.png',
            },
        ],
        startButton: 'Start Prediction',
    },

    // Industry Section
    industrySection: {
        title: 'Industry Information',
    },

    // How It Works Section
    howItWorksSection: {
        title: 'About Engine',
        manual: [
            {
                header: 'Data Source & Industry Grouping',
                icon: SourceRoundedIcon,
                description: `Stock data is sourced from Yahoo Finance, focusing on Thai stocks 
                grouped into 8 industries defined by the Stock Exchange of Thailand (SET). 
                This grouping helps capture similar trends and behaviors within each sector to 
                improve prediction accuracy.`,
            },
            {
                header: 'Stock Selection Criteria',
                icon: ChecklistRoundedIcon,
                description: `To ensure relevance and liquidity of the fast-changing trends, 
                we select the top 5 stocks in each industry every 15 days based on the highest 
                trading volume. This avoids inactive stocks and ensures the model is trained on 
                data with consistent movement.`,
            },
            {
                header: 'Machine Learning Model',
                icon: PsychologyRoundedIcon,
                description: `Stockie uses a Long Short-Term Memory (LSTM) model to predict 
                short-term stock returns over 1, 5, 10, and 15 days. The model suggests the 
                highest-return stock in each industry, training on historical prices and tuned 
                through hyperparameter for over 94% accuracy.`,
            },
            {
                header: 'Model Maintenance & Updates',
                icon: BuildRoundedIcon,
                description: `The model is reviewed every 15 days. If performance drops below 
                our benchmark, it is retrained with the most recent data. Stock lists are also 
                updated every 15 days using the same volume-based criteria to keep predictions 
                relevant and up to date.`,
            },
        ],
    },
};
