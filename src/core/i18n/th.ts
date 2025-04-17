import { i18nInterface } from './i18nInterface.ts';
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
            subtitle: 'ผู้ช่วยในการคาดการณ์หุ้นไทยระยะสั้น',
            description: `Stockie เป็นเครื่องมือออนไลน์ที่ใช้เทคโนโลยี Machine Learning เพื่อช่วยวิเคราะห์แนวโน้มของราคาหุ้นในตลาดไทยช่วงระยะสั้นด้วยความแม่นยำมากกว่า 94% 
            เพียงเลือกกลุ่มอุตสาหกรรมและช่วงเวลาที่ต้องการก็สามารถรับข้อมูลเชิงวิเคราะห์ที่ช่วยสนับสนุนการตัดสินใจลงทุนของคุณ
            เหมาะสำหรับนักลงทุนมือใหม่ที่ต้องการความเข้าใจง่าย และนักลงทุนมืออาชีพที่ต้องการเพิ่มความแม่นยำในการวางแผนการลงทุน`,
            getStarted: 'เริ่มต้นใช้งาน',
            disclaimer: `Stockie จัดทำขึ้นเพื่อวัตถุประสงค์ทางการศึกษาเท่านั้น ไม่ใช่เครื่องมือแนะนำการลงทุนที่ได้รับอนุญาต และไม่ควรใช้แทนคำแนะนำทางการเงินจากผู้เชี่ยวชาญ`,
        },
        navbar: {
            predict: 'การคาดการณ์',
            industry: 'กลุ่มอุตสาหกรรม',
            howToUse: 'คู่มือการใช้งาน',
            howItWorks: 'เบื้องหลังระบบ',
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
                description: `เลือกกลุ่มอุตสาหกรรมที่ต้องการจากเมนูดรอปดาวน์ ระบบจะพิจารณาหุ้นตัวแทน 5 ตัวภายในกลุ่มนั้น 
        สามารถดูข้อมูลกลุ่มอุตสาหกรรมและรายชื่อหุ้นได้ในหน้ากลุ่มอุตสาหกรรม`,
            },
            {
                header: 'เลือกช่วงเวลาการพยากรณ์',
                description: `เลือกจำนวนวันที่ต้องการให้ระบบพยากรณ์ล่วงหน้า เช่น “1 day” หมายถึงพรุ่งนี้ ส่วน “5 days” หมายถึงอีก 5 วันข้างหน้า 
        ระบบจะใช้ข้อมูลราคาหุ้นย้อนหลังเพื่อวิเคราะห์แนวโน้มของราคาหุ้นในช่วงเวลาที่เลือก`,
            },
            {
                header: 'คลิก "วิเคราะห์"',
                description: `หลังจากคลิกปุ่มวิเคราะห์ ระบบจะจัดอันดับหุ้นทั้ง 5 ตัวในกลุ่มที่เลือก โดยเรียงตามเปอร์เซ็นต์การเพิ่มขึ้นของราคาที่คาดการณ์ 
        ผลลัพธ์จะแสดงในแดชบอร์ด พร้อมฟังก์ชันการจัดเรียงตารางเพิ่มเติมตามความต้องการ`,
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
                description: `Stockie ดึงข้อมูลราคาหุ้นโดยตรงจาก Yahoo Finance โดยเน้นเฉพาะหุ้นไทย 
                และจัดกลุ่มออกเป็น 8 กลุ่มอุตสาหกรรมตามการจำแนกของตลาดหลักทรัพย์แห่งประเทศไทย (SET) การจัดกลุ่มนี้ช่วยสะท้อนรูปแบบ แนวโน้ม ความเสี่ยง 
                และพฤติกรรมราคาที่คล้ายกันภายในแต่ละกลุ่ม เพื่อเพิ่มความแม่นยำในการคาดการณ์`,
            },
            {
                header: 'เกณฑ์การคัดเลือกหุ้น',
                icon: ChecklistRoundedIcon,
                description: `เราให้ความสำคัญกับความสภาพคล่องของตลาดหุ้นและแนวโน้มของตลาดที่เปลี่ยนแปลงอย่างรวดเร็ว เราจึงใช้มีการคัดเลือกหุ้นอยู่สม่ำเสมอ 
                โดยเลือกหุ้น 5 อันดับแรกในแต่ละกลุ่มอุตสาหกรรมตามปริมาณการซื้อขายสูงสุด วิธีนี้ช่วยหลีกเลี่ยงหุ้นที่ไม่มีความเคลื่อนไหว 
                และทำให้โมเดลเรียนรู้จากข้อมูลที่สะท้อนพฤติกรรมตลาดจริง ส่งผลให้ผลลัพธ์การวิเคราะห์มีความแม่นยำในระยะสั้น`,
            },
            {
                header: 'การเลือกใช้โมเดล Machine Learning',
                icon: PsychologyRoundedIcon,
                description: `Stockie เลือกใช้ Machine Learning เป็นเครื่องมือในการวิเคราะห์รูปแบบราคาที่ซับซ้อนซึ่งวิธีการแบบเดิมๆอาจมองข้าม 
                เราใช้โมเดล LSTM (Long Short-Term Memory) ซึ่งเป็น nueral network ที่ออกแบบมาเฉพาะสำหรับการวิเคราะห์ข้อมูล time series 
                เพื่อคาดการณ์ผลตอบแทนของหุ้นในระยะสั้นที่ช่วงเวลา 1, 5, 10 และ 15 วัน โดยโมเดลจะแนะนำหุ้นที่ให้ผลตอบแทนสูงสุดในแต่ละกลุ่มอุตสาหกรรม 
                โมเดลนี้ถูกเรียนรู้จากข้อมูลราคาหุ้นย้อนหลัง และผ่านการปรับค่า hyperparameter เพื่อเพิ่มความแม่นยำ จากนั้นจะประเมินผลด้วยค่าชี้วัด
                 เช่น Root Mean Squared Error (RMSE) ก่อนนำมาเผยแพร่ โดยโมเดลมีความแม่นยำมากกว่า 94%`,
            },
            {
                header: 'การดูแลและอัปเดตโมเดล',
                icon: BuildRoundedIcon,
                description: `เพื่อรักษาความแม่นยำและความน่าเชื่อถือของระบบ เราจะตรวจสอบความแม่นยำของโมเดลทุก ๆ 15 วัน 
                หากประสิทธิภาพลดลงต่ำกว่ามาตรฐานที่กำหนดไว้ ระบบจะทำการปรับแก้โมเดลใหม่โดยใช้ข้อมูลล่าสุด นอกจากนี้ 
                เรายังมีการอัปเดตรายชื่อหุ้นในแต่ละกลุ่มอุตสาหกรรมทุก ๆ 15 วัน ตามเกณฑ์ปริมาณการซื้อขายสูงสุดเช่นเดิม 
                เพื่อให้ผลการวิเคราะห์ยังคงสอดคล้องกับข้อมูลและสภาวะตลาดในปัจจุบัน`,
            },
        ],
    },
};
