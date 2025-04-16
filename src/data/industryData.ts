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
            { stockTicker: 'OSP', stockName: 'Osotspa' },
            { stockTicker: 'BTG', stockName: 'Betagro' },
            { stockTicker: 'ITC', stockName: 'i-Tail Corporation' },
            { stockTicker: 'CPF', stockName: 'Charoen Pokphand Foods' },
            { stockTicker: 'CBG', stockName: 'Carabao Group' },
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
            { stockTicker: 'STGT', stockName: 'Sri Trang Gloves (Thailand)' },
            { stockTicker: 'SABINA', stockName: 'Sabina' },
            { stockTicker: 'AURA', stockName: 'Aurora Design' },
            { stockTicker: 'BLC', stockName: 'BLC Corporation' },
            { stockTicker: 'SUC', stockName: 'SUC Corporation' },
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
            { stockTicker: 'TISCO', stockName: 'TISCO Financial Group' },
            { stockTicker: 'BBL', stockName: 'Bangkok Bank' },
            { stockTicker: 'KTB', stockName: 'Krung Thai Bank' },
            { stockTicker: 'KBANK', stockName: 'Kasikornbank' },
            { stockTicker: 'SCB', stockName: 'Siam Commercial Bank' },
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
            { stockTicker: 'TSTH', stockName: 'Tata Steel (Thailand)' },
            { stockTicker: 'MCS', stockName: 'M.C.S. Steel' },
            { stockTicker: 'SCGP', stockName: 'SCG Packaging' },
            { stockTicker: 'IVL', stockName: 'Indorama Ventures' },
            { stockTicker: 'PTTGC', stockName: 'PTT Global Chemical' },
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
            { stockTicker: 'WHA', stockName: 'WHA Corporation' },
            { stockTicker: 'CPN', stockName: 'Central Pattana' },
            { stockTicker: 'SCC', stockName: 'The Siam Cement Group' },
            { stockTicker: 'AP', stockName: 'AP (Thailand)' },
            { stockTicker: 'TOA', stockName: 'TOA Paint (Thailand)' },
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
            { stockTicker: 'BCP', stockName: 'Bangchak Corporation' },
            { stockTicker: 'PTT', stockName: 'PTT Group' },
            { stockTicker: 'TOP', stockName: 'Thai Oil' },
            { stockTicker: 'GPSC', stockName: 'Global Power Synergy' },
            { stockTicker: 'PTTEP', stockName: 'PTT Exploration & Production' },
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
            { stockTicker: 'HMPRO', stockName: 'Home Product Center' },
            { stockTicker: 'BDMS', stockName: 'Bangkok Dusit Medical Services' },
            { stockTicker: 'AOT', stockName: 'Airports of Thailand' },
            { stockTicker: 'CPALL', stockName: 'CP All (7-Eleven)' },
            { stockTicker: 'MINT', stockName: 'Minor International' },
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
            { stockTicker: 'KCE', stockName: 'KCE Electronics' },
            { stockTicker: 'TRUE', stockName: 'True Corporation' },
            { stockTicker: 'ADVANC', stockName: 'Advanced Info Service (AIS)' },
            { stockTicker: 'DELTA', stockName: 'Delta Electronics (Thailand)' },
            { stockTicker: 'CCET', stockName: 'Cal-Comp Electronics (Thailand)' },
        ],
    },
];
