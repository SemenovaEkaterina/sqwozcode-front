import axios from "axios";
import { Type } from "./url-params";

interface ActivitiesListParams {
    preset?: string;
    search?: string;
    online?: boolean;
    limit?: number;
    offset?: number;
    cluster?: string;
    type?: string;
}

export interface Activity {
    id: string;
    title: string;
    description: string;
    picture?: string;
    isOnline: boolean;
}

export interface Cluster {
    id: string;
    name: string;
    type: Type;
}

// todo: error response

interface ApiClient {
    createUser: (data: {
        fName: string;
        mName: string;
        lName: string;
        birth: string;
    }) => Promise<{
        id: string;
    }>;
    getActivitiesList: (
        params?: ActivitiesListParams
    ) => Promise<Array<Activity>>;
    getClusters: () => Promise<Array<Cluster>>;
}

const apiBasePath = "http://api.sqwozcode.ru";

const useApiClient = (): ApiClient => {
    return {
        getActivitiesList: (params) => {
            const queryParams: Record<string, string> = {};
            if (params?.preset) {
                queryParams.preset = params.preset;
            }
            if (params?.search) {
                queryParams.search = params.search;
            }

            if (typeof params?.online !== "undefined") {
                queryParams.online = params.online ? "1" : "0";
            }

            if (params?.cluster) {
                queryParams.clusterIds = params.cluster;
            }

            if (params?.type && !params?.cluster) {
                queryParams.type = params.type;
            }

            queryParams.limit = params?.limit?.toString() || "10";
            queryParams.offset = params?.offset?.toString() || "0";

            return axios
                .get(
                    `${apiBasePath}/getActivitiesList?${new URLSearchParams(
                        queryParams
                    )}`
                )
                .then(function (response) {
                    const items = response.data.message
                        ? response.data.message.map(
                              (item: Record<string, string>) => ({
                                  id: item.id,
                                  title: item.type3,
                                  description: item.d_level1,
                                  isOnline: item.online,
                              })
                          )
                        : [];

                    return items;
                })
                .catch(function (error) {
                    console.log(error);
                    return [];

                    // return [
                    //     {
                    //         id: "111",
                    //         title: "test",
                    //         description: "test",
                    //         isOnline: true,
                    //     },
                    //     {
                    //         id: "111",
                    //         title: "test",
                    //         description: "test",
                    //         isOnline: true,
                    //     },
                    //     {
                    //         id: "111",
                    //         title: "test",
                    //         description: "test",
                    //         isOnline: true,
                    //     },
                    //     {
                    //         id: "111",
                    //         title: "test",
                    //         description: "test",
                    //         isOnline: true,
                    //     },
                    // ];
                });
        },
        createUser: (data) =>
            axios
                .post(
                    `${apiBasePath}/createUser`,
                    {
                        f_name: data.fName,
                        m_name: data.mName,
                        l_name: data.lName,
                        dob: data.birth,
                    },
                    {
                        headers: {
                            Origin: document.location.origin,
                        },
                    }
                )
                .then(function (response) {
                    console.log(response);
                    return {
                        id: response.data.message.id,
                    };
                })
                .catch(function (error) {
                    // todo:
                    console.log(error);
                    return {
                        id: "1",
                    };
                }),
        getClusters: () => {
            return axios
                .get(`${apiBasePath}/getClusters`)
                .then(function (response) {
                    const items = response.data.message
                        ? response.data.message.map(
                              (item: Record<string, string>) => ({
                                  id: item.clusterId,
                                  name: item.name,
                                  type: item.type,
                              })
                          )
                        : [];

                    return items;
                })
                .catch(function (error) {
                    console.log(error);
                    return [];
                });
        },
    };
};

export default useApiClient;
