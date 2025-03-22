interface RecommendedStockSchema {
    name: string;
    predictedPriceUpperBound: number;
    predictedPriceLowerBound: number;
    isIncrease: boolean;
}
interface OtherStockSchema {
    name: string;
    isIncrease: boolean;
}
export interface PredictInterface {
    recommendedStock: RecommendedStockSchema;
    otherStocks: OtherStockSchema[];
}
