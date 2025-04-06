import { IndustryInfoInterface } from '../../ui/sections/industry/models/industryInterface.ts';
import { SelectDropdownOptionInterface } from '../../ui/components/SelectDropdown.tsx';

// --- /predict -------------------------------------------------
// /predict - Request
export interface PredictRequestInterface {
    industry: string;
    period: number;
}

// /predict - Response
interface StockPredictionSchema {
    rank: number;
    ticker: string;
    closing_price: number;
    predicted_price: number;
}

export interface PredictResponseInterface {
    ranked_predictions: StockPredictionSchema[];
}
// ----------------------------------------------------

// --- /info -------------------------------------------------
// /info - Request
export interface StockInfoSchema {
    stock_ticker: string;
    stock_name: string;
}

export interface InitialStockInfoResponseInterface {
    value: number;
    label: string;
}

export interface InitialIndustryInfoRequestInterface {
    industry_code: string;
    industry_name_en: string;
    industry_name_th: string;
    industry_description_en: string;
    industry_description_th: string;
    stocks_info: StockInfoSchema[];
}

// /info - Response
export interface InitialInfoResponseInterface {
    all_periods: InitialStockInfoResponseInterface[];
    all_industries: InitialIndustryInfoRequestInterface[];
}

export interface InitialMappedData {
    industryOptions: SelectDropdownOptionInterface[];
    periodOptions: SelectDropdownOptionInterface<number>[];
    industryInfo: IndustryInfoInterface[];
}
// ----------------------------------------------------
