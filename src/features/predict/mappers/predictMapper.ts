import { PredictResponseInterface } from '../models/predictApiInterface.ts';
import { PredictInterface } from '../models/predictInterface.ts';

export const mapPredictResponse = (response: PredictResponseInterface): PredictInterface => {
    const recommendedStock = {
        name: response.recommended_stock.name,
        predictedPriceUpperBound: response.recommended_stock.predicted_price_upper_bound,
        predictedPriceLowerBound: response.recommended_stock.predicted_price_lower_bound,
        isIncrease: response.recommended_stock.is_increase,
    };
    const otherStocks = response.other_stocks.map((stock) => {
        return {
            name: stock.name,
            isIncrease: stock.is_increase,
        };
    });
    return {
        recommendedStock: recommendedStock,
        otherStocks: otherStocks,
    };
};
