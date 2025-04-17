import { i18nInterface } from './i18nInterface.ts';
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
            subtitle: 'Welcome to Stockie — Your Smart Assistant for Thai Stock Prediction',
            description: `Stockie is a web-based tool that uses machine learning to help you forecast short-term stock price movements in the Thai market with over 94% accuracy. 
            Simply select your industry and time period to get data-driven insights to support your investment decisions.
            Perfect for new investors who want clarity, and for experienced ones looking to enhance their strategies.`,
            disclaimer: `Stockie is intended for educational purposes only. It is not a licensed financial advisory platform and should not be relied upon as a substitute for professional financial advice.`,
        },
        navbar: {
            predict: 'Predict',
            industry: 'Industry',
            howToUse: 'Usage Guide',
            howItWorks: 'Prediction Engine',
        },
    },

    // Predict Section
    predictSection: {
        selectIndustryLabel: 'Industry',
        selectPeriodLabel: 'Period',
        selectIndustryPlaceholder: 'Choose an Industry',
        selectPeriodPlaceholder: 'Choose a Period',
        predictButton: 'Run Prediction',
        predictionDashboard: {
            title: 'Prediction Dashboard',
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
        title: 'Usage Guide',
        steps: [
            {
                header: 'Step 1: Select an Industry',
                description: `Choose one industry from the dropdown. The system will consider five 
                representative stocks within the selected industry. You can view industry 
                information and stock listings in the Industry section.`,
            },
            {
                header: 'Step 2: Select a Prediction Period',
                description: `Pick the number of days ahead you want to predict. For example, "1" means tomorrow, while "5" refers to the next 5 days. The model uses historical data to forecast expected stock performance over the selected period.`,
            },
            {
                header: 'Step 3: Click "Predict"',
                description: `After clicking the Predict button, the system ranks the five stocks 
                in your selected industry based on predicted percentage increase. Results will be 
                shown in the dashboard, where you can also sort the table as needed.`,
            },
        ],
    },

    // How It Works Section
    howItWorksSection: {
        title: 'Prediction Engine',
        manual: [
            {
                header: 'Data Source & Industry Grouping',
                icon: SourceRoundedIcon,
                description: `Stockie sources its stock data directly from Yahoo Finance. 
                We focus exclusively on Thai stocks and organize them into 8 industries based on the classifications by the Stock Exchange of Thailand (SET). 
                This grouping allows us to better reflect the similar patterns and trends, risk factors, and price behavior within each sector to improve prediction accuracy.`,
            },
            {
                header: 'Stock Selection Criteria',
                icon: ChecklistRoundedIcon,
                description: `As we prioritize relevance and liquidity to reflect the fast-changing trends in the stock market, 
                we implement a dynamic stock selection process by selecting the top 5 stocks in each industry based on the highest trading volume. 
                This method helps us avoid inactive stocks and ensures the model is trained and evaluated on data with consistent movement, which makes 
                the predictions more practical and useful for short-term decision-making.`,
            },
            {
                header: 'Machine Learning Model',
                icon: PsychologyRoundedIcon,
                description: `Stockie uses machine learning for its ability to capture complex and price patterns that traditional 
                methods often overlook. We apply a Long Short-Term Memory (LSTM) model, a type of neural network for time series forecasting, to 
                predict short-term stock returns over 1, 5, 10, and 15 days. The model suggests the highest-return stock in each industry. 
                It is trained on historical price data and optimized through hyperparameter tuning for high accuracy. Each cycle is validated using 
                standard metrics such as Root Mean Squared Error (RMSE) before being deployed, with an accuracy of over 94%.`,
            },
            {
                header: 'Model Maintenance & Updates',
                icon: BuildRoundedIcon,
                description: `To maintain reliability, we monitor the model’s accuracy every 15 days. If performance drops 
                below our benchmark, the model is retrained using the most recent data. Additionally, we update the stock lists in 
                each industry every 15 days using the same volume-based criteria to ensure that our predictions stay current and data-driven.`,
            },
        ],
    },
};
