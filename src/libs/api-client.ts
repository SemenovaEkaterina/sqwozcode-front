import axios from "axios";

interface ActivitiesListParams {
    preset?: string;
    search?: string;
    online?: boolean;
    limit?: number;
    offset?: number;
}

export interface Activity {
    id: string;
    title: string;
    description: string;
    picture?: string;
    isOnline: boolean;
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
    // todo: getUser
    getActivitiesList: (
        params?: ActivitiesListParams
    ) => Promise<Array<Activity>>;
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
    };
};

export default useApiClient;
