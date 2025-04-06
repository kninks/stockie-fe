export interface RankedPredictionsInterface {
    rank: number;
    stockTicker: string;
    closingPrice: number;
    predictedPrice: number;
}
