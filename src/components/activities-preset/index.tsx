import React, { FC, useRef } from "react";
import { useClassname } from "../../libs/css";
import ActivityCard from "../activity-card";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";

import "./styles.scss";
import "swiper/css";
import { Activity } from "../../libs/api-client";

interface ActivitiesPresetProps {
    title: string;
    data: Array<Activity>;
    isLoading: boolean;
}

const ActivitiesPreset: FC<ActivitiesPresetProps> = ({ title, data }) => {
    const className = useClassname("activities-preset");
    const swiperRef = useRef<SwiperRef>(null);

    return (
        <div className={className()}>
            <div className={className("title")}>{title}</div>
            <Swiper
                spaceBetween={24}
                slidesPerView={3}
                ref={swiperRef}
                mousewheel={{ thresholdDelta: 40, forceToAxis: true }}
                modules={[Mousewheel]}
            >
                {data.map((item) => (
                    <SwiperSlide>
                        <ActivityCard
                            title={item.title}
                            description={item.description}
                            info={
                                item.isOnline
                                    ? "Онлайн занятие"
                                    : "Очное занятие"
                            }
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ActivitiesPreset;
