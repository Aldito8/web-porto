"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';

interface Item {
    icon: string;
    nametech: string;
}

interface TechnologySliderProps {
    items: Item[];
}

const TechnologySlider: React.FC<TechnologySliderProps> = ({ items }) => {
    const extendedItems = [...items, ...items, ...items];

    return (
        <div className="w-full">
            <Swiper
                modules={[Autoplay, FreeMode]}
                loop={true}
                spaceBetween={100}
                freeMode={true}
                slidesPerView="auto"
                allowTouchMove={true}
                speed={5000}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                }}
                className="mySwiper"
            >
                {extendedItems.map((item, index) => (
                    <SwiperSlide key={index} className="!w-auto flex-shrink-0">
                        <div className="mx-8 flex h-20 items-center justify-center">
                            <Image
                                src={item.icon}
                                alt={item.nametech}
                                width={55}
                                height={55}
                                className="max-h-[55px] object-contain"
                                title={item.nametech}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TechnologySlider;