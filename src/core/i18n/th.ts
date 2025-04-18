import { i18nInterface } from './i18nInterface.ts';

import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import BookRoundedIcon from '@mui/icons-material/BookRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

import SourceRoundedIcon from '@mui/icons-material/SourceRounded';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';

export const th: i18nInterface = {
    // Common
    common: {
        loading: 'loading',
        error: 'An error occurred',
        noData: 'No data available',
    },

    layout: {
        home: {
            title: 'Stockie',
            subtitle: 'ผู้ช่วยคาดการณ์หุ้นไทยระยะสั้น',
            description: `Stockie ใช้เทคโนโลยี Machine Learning ในการคาดการณ์ผลตอบแทนหุ้นไทยระยะสั้น 
            ด้วยความแม่นยำกว่า 94% เพียงเลือกกลุ่มอุตสาหกรรมและช่วงเวลาที่ต้องการ เพื่อรับข้อมูลเชิงวิเคราะห์ที่ช่วย
            สนับสนุนการตัดสินใจลงทุนของคุณ เหมาะสำหรับทั้งนักลงทุนมือใหม่และมืออาชีพ`,
            getStarted: 'เริ่มต้นใช้งาน',
            disclaimer: `Stockie จัดทำขึ้นเพื่อวัตถุประสงค์ทางการศึกษาเท่านั้น ไม่ใช่เครื่องมือแนะนำการลงทุนที่ได้รับอนุญาต และไม่ควรใช้แทนคำแนะนำทางการเงินจากผู้เชี่ยวชาญ`,
        },

        navbar: {
            predict: {
                text: 'วิเคราะห์',
                icon: AutoAwesomeRoundedIcon,
            },
            industry: {
                text: 'กลุ่มอุตสาหกรรม',
                icon: BusinessCenterRoundedIcon,
            },
            howToUse: {
                text: 'คู่มือการใช้งาน',
                icon: BookRoundedIcon,
            },
            howItWorks: {
                text: 'เบื้องหลัง',
                icon: SettingsRoundedIcon,
            },
        },
    },

    // Predict Section
    predictSection: {
        title: 'การวิเคราะห์ราคาหุ้น',
        selectIndustryLabel: 'กลุ่มอุตสาหกรรม',
        selectPeriodLabel: 'ระยะเวลาคาดการณ์',
        selectIndustryPlaceholder: 'เลือกกลุ่มอุตสาหกรรม',
        selectPeriodPlaceholder: 'เลือกระยะเวลา',
        predictButton: 'เริ่มวิเคราะห์',
        predictionDashboard: {
            title: 'ผลการวิเคราะห์',
            closingPriceDate: 'ราคาปิด ณ วันที่',
            predictedPriceDate: 'ราคาที่คาดการณ์ ณ วันที่',
            rank: 'อันดับ',
            stock: 'หุ้น',
            closingPrice: 'ราคาปิด',
            predictedPrice: 'ราคาที่คาดการณ์',
        },
    },

    // Industry Section
    industrySection: {
        title: 'ข้อมูลกลุ่มอุตสาหกรรม',
    },

    // HowToUse
    howToUseSection: {
        title: 'วิธีการใช้งาน',
        steps: [
            {
                header: 'เลือกกลุ่มอุตสาหกรรม',
                description: `เลือกกลุ่มจากเมนูดรอปดาวน์ ระบบจะวิเคราะห์หุ้นตัวแทน 5 ตัวในกลุ่มนั้น โดยดูข้อมูลเพิ่มเติมได้ในหน้ากลุ่มอุตสาหกรรม`,
            },
            {
                header: 'เลือกช่วงเวลาการพยากรณ์',
                description: `เลือกจำนวนวันที่ต้องการพยากรณ์ เช่น “1 วัน” หรือ “5 วัน”`,
            },
            {
                header: 'คลิก "วิเคราะห์"',
                description: `หุ้นจะถูกจัดอันดับตามเปอร์เซ็นต์การเพิ่มขึ้นของราคาที่คาดการณ์ พร้อมแสดงผลในแดชบอร์ดที่สามารถจัดเรียงได้`,
            },
        ],
    },

    // How It Works Section
    howItWorksSection: {
        title: 'เบื้องหลังระบบ',
        manual: [
            {
                header: 'แหล่งข้อมูลและการจัดกลุ่ม',
                icon: SourceRoundedIcon,
                description: `Stockie ดึงข้อมูลหุ้นจาก Yahoo Finance โดยเน้นเฉพาะหุ้นไทยและจัดกลุ่มออกเป็น 
                8 อุตสาหกรรมตามการจำแนกของตลาดหลักทรัพย์แห่งประเทศไทย (SET) เพื่อสะท้อนแนวโน้มและพฤติกรรมของ
                หุ้นในแต่ละกลุ่มได้แม่นยำยิ่งขึ้น`,
            },
            {
                header: 'เกณฑ์การคัดเลือกหุ้น',
                icon: ChecklistRoundedIcon,
                description: `เพื่อให้ข้อมูลมีสภาพคล่องและสัมพันธ์กับการเปลี่ยนแปลงของตลาดที่รวดเร็ว 
                เราจึงคัดเลือกหุ้น 5 อันดับแรกของแต่ละอุตสาหกรรม จากปริมาณการซื้อขายสูงสุดทุก 15 วัน 
                เพื่อหลีกเลี่ยงหุ้นที่ไม่มีความเคลื่อนไหว และได้ใช้ข้อมูลที่สะท้อนตลาดจริง`,
            },
            {
                header: 'การเลือกใช้โมเดล Machine Learning',
                icon: PsychologyRoundedIcon,
                description: `Stockie ใช้โมเดล LSTM (Long Short-Term Memory) เพื่อคาดการณ์ผลตอบแทนหุ้น
                ระยะสั้น ในช่วง 1, 5, 10 และ 15 วัน โดยแนะนำหุ้นที่มีผลตอบแทนสูงสุดในแต่ละกลุ่ม 
                โมเดลนี้ถูกเรียนรู้จากข้อมูลราคาย้อนหลัง และปรับค่า hyperparameter เพื่อให้ได้ความแม่นยำมากกว่า 94%`,
            },
            {
                header: 'การดูแลและอัปเดตโมเดล',
                icon: BuildRoundedIcon,
                description: `เราประเมินประสิทธิภาพของโมเดลทุก 15 วัน หากต่ำกว่ามาตรฐานที่ตั้งไว้ 
                โมเดลจะถูกปรับแก้ใหม่ด้วยข้อมูลล่าสุด พร้อมอัปเดตรายชื่อหุ้นในแต่ละกลุ่มทุกๆ 15 วันตามเกณฑ์เดิม 
                เพื่อให้ผลวิเคราะห์ยังคงสอดคล้องกับสภาพตลาดปัจจุบัน`,
            },
        ],
    },
};
