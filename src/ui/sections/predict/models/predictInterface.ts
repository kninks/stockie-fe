export interface RankedPredictionsInterface {
    rank: number;
    stockTicker: string;
    closingPrice: number | null;
    predictedPrice: number | null;
}

export interface PredictionDashboardInterface {
    closingPriceDate: Date;
    predictedPriceDate: Date;
    rankedPredictions: RankedPredictionsInterface[];
}
