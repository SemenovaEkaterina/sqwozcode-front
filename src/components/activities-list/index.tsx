import React, { FC } from "react";
import { useClassname } from "../../libs/css";
import ActivityCard from "../activity-card";

import "./styles.scss";
import { Activity, Cluster } from "../../libs/api-client";
import Filters, { FiltersData } from "../filters";
import { UrlParams } from "../../libs/url-params";
import Button from "../button";

interface ActivitiesListProps {
    title: string;
    data: Array<Activity>;
    isLoading: boolean;
    filtersData: FiltersData;
    onChangeFilter: (key: keyof UrlParams, value: string[]) => void;
    loadMore: () => void;
    clusters: Array<Cluster>;
}

const ActivitiesList: FC<ActivitiesListProps> = ({
    title,
    data,
    filtersData,
    onChangeFilter,
    loadMore,
    clusters,
}) => {
    const className = useClassname("activities-list");

    return (
        <div className={className()}>
            <div className={className("filters")}>
                <Filters
                    data={filtersData}
                    onChangeFilter={onChangeFilter}
                    clusters={clusters}
                />
            </div>

            <div className={className("list")}>
                <div className={className("title")}>{title}</div>
                <div className={className("items")}>
                    {data.map((item, i) => (
                        <div
                            className={className("item")}
                            key={`${item.title}${i}`}
                        >
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
                <Button onClick={loadMore} size="l" mode="active" width="full">
                    Загрузить еще
                </Button>
            </div>
        </div>
    );
};

export default ActivitiesList;
