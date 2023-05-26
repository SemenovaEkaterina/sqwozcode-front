import React, { useState, FC } from "react";
import { useEffect } from "react";
import ActivitiesList from "../components/activities-list";
import useApiClient, { Activity } from "../libs/api-client";
import { UrlParams, useUrlParams } from "../libs/url-params";

const useActivitiesListLoader = () => {
    const apiClient = useApiClient();
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState<Array<Activity>>([]);

    const [urlParams] = useUrlParams();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const data = await apiClient.getActivitiesList({
                search: urlParams.search,
            });
            setData(data);
            setLoading(false);
        };

        fetchData();
    }, [setLoading, urlParams.search]);

    return {
        data,
        isLoading,
    };
};

const ActivitiesListContainer: FC = () => {
    const { data, isLoading } = useActivitiesListLoader();
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
        />
    );
};

export default ActivitiesListContainer;
