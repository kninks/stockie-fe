import { IndustryInfoInterface } from '../ui/sections/industry/models/industryInterface.ts';

export const fallbackIndustryInfo: IndustryInfoInterface[] = [
    {
        industryCode: 'agro',
        industryNameTH: 'เกษตรและอุตสาหกรรมอาหาร',
        industryNameEN: 'Agro & Food Industry',
        industryDescriptionEN:
            'Businesses relating to farming, forestation, livestock, processing agricultural products, and food and beverage production.',
        industryDescriptionTH: `ธุรกิจเกี่ยวกับการเพาะปลูก ทำป่าไม้ ทำปศุสัตว์ แปรรูปผลิตผลทางการเกษตร และผลิตอาหารและเครื่องดื่ม`,
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
        industryNameTH: 'สินค้าอุปโภคบริโภค',
        industryNameEN: 'Consumer Products',
        industryDescriptionEN:
            'Businesses relating to the production and distribution of consumer products, both necessity and luxury goods.',

        industryDescriptionTH: `ธุรกิจเกี่ยวกับการผลิตหรือตัวแทนจำหน่ายสินค้า เพื่อการอุปโภคบริโภคต่างๆ ทั้งที่เป็นสินค้าจำเป็นและสินค้าฟุ่มเฟือย`,
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
        industryNameTH: 'ธุรกิจการเงิน',
        industryNameEN: 'Financials',
        industryDescriptionEN:
            'Industries relating to different types of financial service providers.',
        industryDescriptionTH: `อุตสาหกรรมที่เกี่ยวกับผู้ให้บริการทางการเงินประเภทต่าง ๆ`,
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
        industryNameTH: 'สินค้าอุตสาหกรรม',
        industryNameEN: 'Industrials',
        industryDescriptionEN:
            'Business relating to the production and distribution of general raw materials used in various industries, primary and intermediate products, machines and equipment used in production industry and the automotive industry.',
        industryDescriptionTH: `กลุ่มอุตสาหกรรมที่ทำธุรกิจเกี่ยวกับการผลิตและจัดจำหน่ายวัตถุดิบทั่วไปที่สามารถนำไปใช้ได้ใน
        หลายอุตสาหกรรม สินค้าขั้นต้นหรือสินค้าขั้นกลาง เครื่องมือและเครื่องจักรต่างๆที่นำไปใช้ต่อในอุตสาหกรรมการผลิตต่างๆ 
        นอกจากนี้ยังรวมถึงอุตสาหกรรมยานยนต์`,
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
        industryNameTH: 'อสังหาริมทรัพย์และก่อสร้าง',
        industryNameEN: 'Property & Construction',
        industryDescriptionEN:
            'Industries relating to the producers of construction material, the developers and managers of real estates, as well as the construction and engineering services.',
        industryDescriptionTH: `กลุ่มอุตสาหกรรมที่เกี่ยวกับผู้ผลิตวัสดุก่อสร้าง ผู้พัฒนาและบริหารอสังหาริมทรัพย์ รวมถึงบริการก่อสร้างและงานวิศวกรรม`,
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
        industryNameTH: 'ทรัพยากร',
        industryNameEN: 'Resources',
        industryDescriptionEN:
            'Businesses relating sourcing and managing the resources such as production and allocation of energy and mining.',
        industryDescriptionTH: `ธุรกิจเกี่ยวกับการแสวงหา หรือจัดการทรัพยากรต่างๆ เช่น การผลิตและจัดสรรเชื้อเพลิงพลังงาน และการทำเหมืองแร่ เป็นต้น`,
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
        industryNameTH: 'บริการ',
        industryNameEN: 'Services',
        industryDescriptionEN:
            'Businesses in the service industry, except financial service and IT as they are classified in different groups.',
        industryDescriptionTH: `ธุรกิจในสาขาบริการต่างๆ ยกเว้นบริการทางการเงินและบริการด้านข้อมูลสารสนเทศหรือเทคโนโลยี หรือเป็นบริการที่ถูกจัดไว้ในกลุ่มอุตสาหกรรมหรือหมวดธุรกิจอื่นแล้ว`,
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
        industryNameTH: 'เทคโนโลยี',
        industryNameEN: 'Technology',
        industryDescriptionEN:
            'Businesses relating to IT products, including all primary, intermediate and final products, and the providers of IT and telecommunication services.',
        industryDescriptionTH: `ธุรกิจเกี่ยวกับสินค้าเทคโนโลยี ไม่ว่าจะเป็นสินค้าขั้นต้น ขั้นกลางหรือขั้นสุดท้าย และรวมถึงผู้ให้บริการทางเทคโนโลยีสารสนเทศและการสื่อสาร`,
        stocksInfo: [
            { stockTicker: 'TEC1', stockName: 'NextGen Tech' },
            { stockTicker: 'TEC2', stockName: 'CodeBase Inc.' },
            { stockTicker: 'TEC3', stockName: 'SoftLogic' },
            { stockTicker: 'TEC4', stockName: 'CyberCom' },
            { stockTicker: 'TEC5', stockName: 'DataWave' },
        ],
    },
];
