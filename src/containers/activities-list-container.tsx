import React, { useState, FC, useCallback } from "react";
import { useEffect } from "react";
import ActivitiesList from "../components/activities-list";
import useApiClient, { Activity } from "../libs/api-client";
import { UrlParams, useUrlParams } from "../libs/url-params";

const useActivitiesListLoader = () => {
    const apiClient = useApiClient();
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState<Array<Activity>>([]);
    const [offset, setOffset] = useState(0);
    const limit = 2;

    const [urlParams] = useUrlParams();

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            const data = await apiClient.getActivitiesList({
                // todo: остальные
                search: urlParams.search,
                limit,
            });
            setData(data);
            setLoading(false);
        };

        loadData();
    }, [urlParams.search, urlParams.online]);

    useEffect(() => {
        const loadMoreData = async () => {
            const moreData = await apiClient.getActivitiesList({
                // todo: остальные параметры
                search: urlParams.search,
                limit,
                offset,
            });
            setData([...data, ...moreData]);
        };

        loadMoreData();
    }, [offset]);

    return {
        data,
        isLoading,
        loadMore: () => {
            setOffset(offset + limit);
        },
    };
};

const ActivitiesListContainer: FC = () => {
    const { data, isLoading, loadMore } = useActivitiesListLoader();
    const [urlParams, addUrlParam] = useUrlParams();

    return (
        <ActivitiesList
            title="Список занятий"
            data={data}
            isLoading={isLoading}
            filtersData={{
                online: urlParams.online?.split(",") || [],
                dayOfWeek: urlParams.dayOfWeek?.split(",") || [],
            }}
            onChangeFilter={(key: keyof UrlParams, value: string[]) => {
                addUrlParam(key, value.join(","));
            }}
            loadMore={loadMore}
        />
    );
};

export default ActivitiesListContainer;
