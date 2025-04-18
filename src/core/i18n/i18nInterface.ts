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
            getStarted: string;
            disclaimer: string;
        };
        navbar: {
            predict: {
                text: string;
                icon: React.ElementType;
            };
            industry: {
                text: string;
                icon: React.ElementType;
            };
            howToUse: {
                text: string;
                icon: React.ElementType;
            };
            howItWorks: {
                text: string;
                icon: React.ElementType;
            };
        };
    };

    // Predict Section
    predictSection: {
        title: string;
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
