import {
    PredictionDashboardInterface,
    RankedPredictionsInterface,
} from '../../ui/sections/predict/models/predictInterface.ts';
import {
    InitialInfoResponseInterface,
    InitialMappedData,
    PredictResponseInterface,
} from '../models/apiInterface.ts';
import { IndustryInfoInterface } from '../../ui/sections/industry/models/industryInterface.ts';
import { SelectDropdownOptionInterface } from '../../ui/components/SelectDropdown.tsx';

export const mapInitialInfoResponse = (
    response: InitialInfoResponseInterface
): InitialMappedData => {
    const periodOptions: SelectDropdownOptionInterface<number>[] = response.all_periods.map(
        (period) => ({
            value: period.value,
            label: period.label,
        })
    );

    const industryOptions: SelectDropdownOptionInterface[] = response.all_industries.map(
        (industry) => ({
            value: industry.industry_code,
            label: industry.industry_name_en,
        })
    );

    const industryInfo: IndustryInfoInterface[] = response.all_industries.map((industry) => ({
        industryCode: industry.industry_code,
        industryNameEN: industry.industry_name_en,
        industryNameTH: industry.industry_name_th,
        industryDescriptionEN: industry.industry_description_en,
        industryDescriptionTH: industry.industry_description_th,
        stocksInfo: industry.stocks_info.map((stock) => ({
            stockTicker: stock.stock_ticker,
            stockName: stock.stock_name,
        })),
    }));
    return {
        periodOptions: periodOptions,
        industryOptions: industryOptions,
        industryInfo: industryInfo,
    };
};

export const mapPredictResponse = (
    response: PredictResponseInterface
): PredictionDashboardInterface => {
    const ranking: RankedPredictionsInterface[] = response.ranked_predictions.map((stock) => ({
        rank: stock.rank,
        stockTicker: stock.ticker,
        closingPrice: stock.closing_price,
        predictedPrice: stock.predicted_price,
    }));

    return {
        closingPriceDate: new Date(response.closing_price_date),
        predictedPriceDate: new Date(response.predicted_price_date),
        rankedPredictions: ranking,
    };
};
