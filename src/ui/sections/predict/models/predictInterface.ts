export interface RankedPredictionsInterface {
    rank: number;
    stockTicker: string;
    closingPrice: number | null;
    predictedPrice: number | null;
}
