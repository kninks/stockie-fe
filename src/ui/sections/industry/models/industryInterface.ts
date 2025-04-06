export interface StockInfoInterface {
    stockTicker: string;
    stockName: string;
}

export interface IndustryInfoInterface {
    industryCode: string;
    industryNameEN: string;
    industryNameTH: string;
    industryDescriptionEN: string;
    industryDescriptionTH: string;
    stocksInfo: StockInfoInterface[];
}
