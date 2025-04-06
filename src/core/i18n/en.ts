import { i18nInterface } from './i18nInterface.ts';

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
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a 
            consectetur eros, tempor varius neque. Etiam lacus leo, euismod at diam nec, egestas 
            finibus dui. Aliquam laoreet, risus sit amet maximus tincidunt, nibh erat mattis neque, 
            imperdiet molestie massa nisi sit amet elit. Praesent interdum nunc quis dolor 
            placerat, non auctor ex scelerisque. Sed fermentum porta metus.`,
            disclaimer: `This is a disclaimer for Stockie. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        },
        navbar: {
            predict: 'Predict',
            industry: 'Industry',
            howToUse: 'How to Use',
            howItWorks: 'How it works',
        },
    },

    // Predict Section
    predictSection: {
        selectIndustryLabel: 'Industry',
        selectPeriodLabel: 'Period',
        selectIndustryPlaceholder: 'Select an Industry',
        selectPeriodPlaceholder: 'Select a Period',
        predictButton: 'Predict',
        predictionDashboard: {
            title: 'Prediction Results',
            rank: 'Rank',
            stock: 'Stock',
            closingPrice: 'Closing Price',
            predictedPrice: 'Predicted Price',
        },
    },

    // Industry Section
    industrySection: {
        title: 'Industry Information',
    },

    // HowToUse
    howToUseSection: {
        title: 'How to Use',
        steps: [
            {
                header: 'Step 1',
                description: 'Description for Step 1',
            },
            {
                header: 'Step 2',
                description: 'Description for Step 2',
            },
            {
                header: 'Step 3',
                description: 'Description for Step 3',
            },
            {
                header: 'Step 4',
                description: 'Description for Step 4',
            },
        ],
    },

    // How It Works Section
    howItWorksSection: {
        title: 'How it works',
        manual: [
            {
                header: 'Manual A',
                description: `Description for Manual A. Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Donec porta felis nec malesuada mattis. Phasellus nunc lorem, 
                aliquam non quam non, consequat condimentum leo. Vestibulum porta posuere nisl, non 
                sollicitudin dui ullamcorper ac. Mauris pharetra ac quam ut porttitor. Praesent 
                egestas eros sit amet sem auctor, imperdiet dignissim dolor rhoncus. Integer 
                faucibus odio id risus dignissim bibendum. Pellentesque at eros ultrices, 
                ultrices ligula eget, scelerisque sapien. Suspendisse id fermentum nunc, quis 
                rutrum purus.`,
            },
            {
                header: 'Manual B',
                description: `Description for Manual A. Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Donec porta felis nec malesuada mattis. Phasellus nunc lorem, 
                aliquam non quam non, consequat condimentum leo. Vestibulum porta posuere nisl, non 
                sollicitudin dui ullamcorper ac. Mauris pharetra ac quam ut porttitor. Praesent 
                egestas eros sit amet sem auctor, imperdiet dignissim dolor rhoncus. Integer 
                faucibus odio id risus dignissim bibendum. Pellentesque at eros ultrices, 
                ultrices ligula eget, scelerisque sapien. Suspendisse id fermentum nunc, quis 
                rutrum purus.`,
            },
            {
                header: 'Manual C',
                description: `Description for Manual A. Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Donec porta felis nec malesuada mattis. Phasellus nunc lorem, 
                aliquam non quam non, consequat condimentum leo. Vestibulum porta posuere nisl, non 
                sollicitudin dui ullamcorper ac. Mauris pharetra ac quam ut porttitor. Praesent 
                egestas eros sit amet sem auctor, imperdiet dignissim dolor rhoncus. Integer 
                faucibus odio id risus dignissim bibendum. Pellentesque at eros ultrices, 
                ultrices ligula eget, scelerisque sapien. Suspendisse id fermentum nunc, quis 
                rutrum purus.`,
            },
            {
                header: 'Manual D',
                description: `Description for Manual A. Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Donec porta felis nec malesuada mattis. Phasellus nunc lorem, 
                aliquam non quam non, consequat condimentum leo. Vestibulum porta posuere nisl, non 
                sollicitudin dui ullamcorper ac. Mauris pharetra ac quam ut porttitor. Praesent 
                egestas eros sit amet sem auctor, imperdiet dignissim dolor rhoncus. Integer 
                faucibus odio id risus dignissim bibendum. Pellentesque at eros ultrices, 
                ultrices ligula eget, scelerisque sapien. Suspendisse id fermentum nunc, quis 
                rutrum purus.`,
            },
        ],
    },
};
