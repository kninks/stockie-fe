import { SelectDropdownOptionInterface } from '../ui/components/SelectDropdown.tsx';
import { RankedPredictionsInterface } from '../ui/sections/predict/models/predictInterface.ts';

export const industryOptions: SelectDropdownOptionInterface[] = [
    { value: 'agro', label: 'Agro & Food Industry' },
    { value: 'consump', label: 'Consumer Products' },
    { value: 'financial', label: 'Financials' },
    { value: 'indus', label: 'Industrials' },
    { value: 'propcon', label: 'Property Construction' },
    { value: 'resource', label: 'Resources' },
    { value: 'service', label: 'Services' },
    { value: 'tech', label: 'Technology' },
];

export const periodOptions: SelectDropdownOptionInterface<number>[] = [
    { value: 1, label: '1 day' },
    { value: 5, label: '5 days ' },
    { value: 10, label: '10 days' },
    { value: 15, label: '15 days' },
];

export const emptyPredictions: RankedPredictionsInterface[] = [
    {
        rank: 1,
        stockTicker: '',
        closingPrice: 0,
        predictedPrice: 0,
    },
    {
        rank: 2,
        stockTicker: '',
        closingPrice: 0,
        predictedPrice: 0,
    },
    {
        rank: 3,
        stockTicker: '',
        closingPrice: 0,
        predictedPrice: 0,
    },
    {
        rank: 4,
        stockTicker: '',
        closingPrice: 0,
        predictedPrice: 0,
    },
    {
        rank: 5,
        stockTicker: '',
        closingPrice: 0,
        predictedPrice: 0,
    },
];
