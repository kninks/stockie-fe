import './styles/Industry.css';
import { industries } from '../../data/industryData.ts';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeader from '../../ui/components/SectionHeader.tsx';

const Industry = () => {
    return (
        <>
            <SectionHeader>Industry</SectionHeader>
            <div className="scrolling-wrapper">
                {industries.map((industry, index) => (
                    <Swiper
                        keyboard={{ enabled: true }}
                        pagination={{ clickable: true }}
                        navigation={true}
                    >
                        <SwiperSlide
                            className={'industry-card'}
                            key={industry.id}
                            test-id={`industry-card-${index}`}
                        >
                            <h3>{industry.name}</h3>
                            <p>{industry.description}</p>
                        </SwiperSlide>
                    </Swiper>
                    // <div
                    //     className={"industry-card"}
                    //     key={industry.id}
                    //     test-id={`industry-card-${index}`}
                    // >
                    //     <h3>{industry.name}</h3>
                    //     <p>{industry.description}</p>
                    // </div>
                ))}
            </div>
        </>
    );
};

export default Industry;
