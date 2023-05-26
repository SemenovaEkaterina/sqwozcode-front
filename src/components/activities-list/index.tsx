import React, { FC } from "react";
import { useClassname } from "../../libs/css";
import ActivityCard from "../activity-card";

import "./styles.scss";
import { Activity } from "../../libs/api-client";
import Filters, { FiltersData } from "../filters";
import { UrlParams } from "../../libs/url-params";

interface ActivitiesListProps {
    title: string;
    data: Array<Activity>;
    isLoading: boolean;
    filtersData: FiltersData;
    onChangeFilter: (key: keyof UrlParams, value: string[]) => void;
}

const ActivitiesList: FC<ActivitiesListProps> = ({
    title,
    data,
    filtersData,
    onChangeFilter,
}) => {
    const className = useClassname("activities-list");

    return (
        <div className={className()}>
            <div className={className("filters")}>
                <Filters data={filtersData} onChangeFilter={onChangeFilter} />
            </div>

            <div className={className("list")}>
                <div className={className("title")}>{title}</div>
                <div className={className("list")}>
                    {data.map((item) => (
                        <div className={className("item")}>
                            <ActivityCard
                                title={item.title}
                                description={item.description}
                                info={
                                    item.isOnline
                                        ? "Онлайн занятие"
                                        : "Очное занятие"
                                }
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ActivitiesList;
