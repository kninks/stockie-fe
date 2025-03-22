export interface PredictRequestInterface {
    industry: string;
    period: number;
}

interface RecommendedStockSchema {
    name: string;
    predicted_price_upper_bound: number;
    predicted_price_lower_bound: number;
    is_increase: boolean;
}
interface OtherStockSchema {
    name: string;
    is_increase: boolean;
}
export interface PredictResponseInterface {
    recommended_stock: RecommendedStockSchema;
    other_stocks: OtherStockSchema[];
}
