import { i18nInterface } from './i18nInterface.ts';

import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import BookRoundedIcon from '@mui/icons-material/BookRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

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
            Thai market with over 94% accuracy. Simply select an industry and time period to get 
            quick and data-driven insights to support your investment decisions. 
            Perfect for both new and experienced investors.`,
            getStarted: 'Get Started',
            disclaimer: `Stockie is intended for educational purposes only. It is not a licensed financial advisory platform and should not be relied upon as a substitute for professional financial advice.`,
        },
        navbar: {
            predict: {
                text: 'Prediction',
                icon: AutoAwesomeRoundedIcon,
            },
            industry: {
                text: 'Industry',
                icon: BusinessCenterRoundedIcon,
            },
            howToUse: {
                text: 'Usage',
                icon: BookRoundedIcon,
            },
            howItWorks: {
                text: 'About Engine',
                icon: SettingsRoundedIcon,
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

    // Industry Section
    industrySection: {
        title: 'Industry Information',
    },

    // HowToUse
    howToUseSection: {
        title: 'Usage',
        steps: [
            {
                header: 'Select an Industry',
                // description: `Choose one industry from the dropdown. The system will consider five
                // representative stocks within the selected industry. You can view industry
                // information and stock listings in the Industry section.`,
                description: `Choose one industry from the dropdown to analyze five top-traded stocks in that group.`,
            },
            {
                header: 'Select a Prediction Period',
                description: `Pick the number of days ahead to forecast. For example, 
                "1" is tomorrow, "5" is the next 5 days.`,
                // description: `Pick the number of days ahead you want to predict. For example,
                // "1" means tomorrow, while "5" refers to the next 5 days. The model uses historical
                // data to forecast expected stock performance over the selected period.`,
            },
            {
                header: 'Click "Predict"',
                description: `The system ranks the five stocks by predicted growth. 
                Results appear in a sortable dashboard.`,
                // description: `After clicking the Predict button, the system ranks the five stocks
                // in your selected industry based on predicted percentage increase. Results will be
                // shown in the dashboard, where you can also sort the table as needed.`,
            },
        ],
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
