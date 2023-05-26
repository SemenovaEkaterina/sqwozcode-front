import React, { useState, FC } from "react";
import { useEffect } from "react";
import ActivitiesPreset from "../components/activities-preset";
import useApiClient, { Activity } from "../libs/api-client";

const useActivitiesPresetLoader = (preset: string) => {
    const apiClient = useApiClient();
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState<Array<Activity>>([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const data = await apiClient.getActivitiesList({ preset });
            setData(data);
            setLoading(false);
        };

        fetchData();
    }, [setLoading]);

    return {
        data,
        isLoading,
    };
};

const ActivitiesPresetContainer: FC<{
    title: string;
    preset: string;
}> = ({ title, preset }) => {
    const { data, isLoading } = useActivitiesPresetLoader(preset);

    return <ActivitiesPreset title={title} data={data} isLoading={isLoading} />;
};

export default ActivitiesPresetContainer;
