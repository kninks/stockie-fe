import React from 'react';

export interface i18nInterface {
    // Common
    common: {
        loading: string;
        error: string;
        noData: string;
    };

    layout: {
        home: {
            title: string;
            subtitle: string;
            description: string;
            disclaimer: string;
        };
        navbar: {
            predict: string;
            industry: string;
            howToUse: string;
            howItWorks: string;
        };
    };

    // Predict Section
    predictSection: {
        selectIndustryLabel: string;
        selectPeriodLabel: string;
        selectIndustryPlaceholder: string;
        selectPeriodPlaceholder: string;
        predictButton: string;
        predictionDashboard: {
            title: string;
            rank: string;
            stock: string;
            closingPrice: string;
            predictedPrice: string;
        };
    };

    // Industry Section (industry info will use the fallback values)
    industrySection: {
        title: string;
    };

    // HowToUse
    howToUseSection: {
        title: string;
        steps: {
            header: string;
            description: string;
        }[];
    };

    // How It Works Section
    howItWorksSection: {
        title: string;
        manual: {
            header: string;
            icon: React.ElementType;
            description: string;
        }[];
    };
}
