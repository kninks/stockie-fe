export interface StockInfoInterface {
    stockTicker: string;
    stockName: string;
}

export interface IndustryInfoInterface {
    industryCode: string;
    industryName: string;
    industryDescription: string;
    stocksInfo: StockInfoInterface[];
}
