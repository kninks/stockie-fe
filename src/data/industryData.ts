import { IndustryInfoInterface } from '../ui/sections/industry/models/industryInterface.ts';

export const fallbackIndustryInfo: IndustryInfoInterface[] = [
    {
        industryCode: 'agro',
        industryName: 'Agro & Food Industry',
        industryDescription:
            'Businesses relating to farming, forestation, livestock, processing agricultural products, and food and beverage production.',
        stocksInfo: [
            { stockTicker: 'AGF1', stockName: 'GreenFarm Ltd.' },
            { stockTicker: 'AGF2', stockName: 'FreshHarvest Co.' },
            { stockTicker: 'AGF3', stockName: 'AgriFoods Inc.' },
            { stockTicker: 'AGF4', stockName: 'PureMilk Corp.' },
            { stockTicker: 'AGF5', stockName: 'Organic Roots' },
        ],
    },
    {
        industryCode: 'consump',
        industryName: 'Consumer Products',
        industryDescription:
            'Businesses relating to the production and distribution of consumer products, both necessity and luxury goods.',
        stocksInfo: [
            { stockTicker: 'CON1', stockName: 'DailyGoods Inc.' },
            { stockTicker: 'CON2', stockName: 'LuxBrand Co.' },
            { stockTicker: 'CON3', stockName: 'HomeNeeds Ltd.' },
            { stockTicker: 'CON4', stockName: 'StyleWare Corp.' },
            { stockTicker: 'CON5', stockName: 'FreshLiving' },
        ],
    },
    {
        industryCode: 'financial',
        industryName: 'Financials',
        industryDescription:
            'Industries relating to different types of financial service providers.',
        stocksInfo: [
            { stockTicker: 'FIN1', stockName: 'SecureBank' },
            { stockTicker: 'FIN2', stockName: 'InvestSmart Ltd.' },
            { stockTicker: 'FIN3', stockName: 'MoneyTree Inc.' },
            { stockTicker: 'FIN4', stockName: 'GlobalFunds' },
            { stockTicker: 'FIN5', stockName: 'CapitalTrust' },
        ],
    },
    {
        industryCode: 'indus',
        industryName: 'Industrials',
        industryDescription:
            'Business relating to the production and distribution of general raw materials used in various industries, primary and intermediate products, machines and equipment used in production industry and the automotive industry.',
        stocksInfo: [
            { stockTicker: 'IND1', stockName: 'IronWorks Inc.' },
            { stockTicker: 'IND2', stockName: 'Machina Co.' },
            { stockTicker: 'IND3', stockName: 'RawMat Global' },
            { stockTicker: 'IND4', stockName: 'AutoForge Ltd.' },
            { stockTicker: 'IND5', stockName: 'SteelGear Corp.' },
        ],
    },
    {
        industryCode: 'propcon',
        industryName: 'Property & Construction',
        industryDescription:
            'Industries relating to the producers of construction material, the developers and managers of real estates, as well as the construction and engineering services.',
        stocksInfo: [
            { stockTicker: 'PRC1', stockName: 'BuildRight' },
            { stockTicker: 'PRC2', stockName: 'UrbanDevelopers' },
            { stockTicker: 'PRC3', stockName: 'RealEstate Group' },
            { stockTicker: 'PRC4', stockName: 'CementPlus' },
            { stockTicker: 'PRC5', stockName: 'ConstructCo' },
        ],
    },
    {
        industryCode: 'resource',
        industryName: 'Resources',
        industryDescription:
            'Businesses relating sourcing and managing the resources such as production and allocation of energy and mining.',
        stocksInfo: [
            { stockTicker: 'RES1', stockName: 'EnergyNow' },
            { stockTicker: 'RES2', stockName: 'MineCore' },
            { stockTicker: 'RES3', stockName: 'OilPlus Ltd.' },
            { stockTicker: 'RES4', stockName: 'EcoResource' },
            { stockTicker: 'RES5', stockName: 'PowerStream' },
        ],
    },
    {
        industryCode: 'service',
        industryName: 'Services',
        industryDescription:
            'Businesses in the service industry, except financial service and IT as they are classified in different groups.',
        stocksInfo: [
            { stockTicker: 'SER1', stockName: 'QuickLogistics' },
            { stockTicker: 'SER2', stockName: 'CleanServe Co.' },
            { stockTicker: 'SER3', stockName: 'HealthPlus Services' },
            { stockTicker: 'SER4', stockName: 'EventMaster Ltd.' },
            { stockTicker: 'SER5', stockName: 'TravelEase' },
        ],
    },
    {
        industryCode: 'tech',
        industryName: 'Technology',
        industryDescription:
            'Businesses relating to IT products, including all primary, intermediate and final products, and the providers of IT and telecommunication services.',
        stocksInfo: [
            { stockTicker: 'TEC1', stockName: 'NextGen Tech' },
            { stockTicker: 'TEC2', stockName: 'CodeBase Inc.' },
            { stockTicker: 'TEC3', stockName: 'SoftLogic' },
            { stockTicker: 'TEC4', stockName: 'CyberCom' },
            { stockTicker: 'TEC5', stockName: 'DataWave' },
        ],
    },
];
