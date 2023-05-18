import axios from 'axios';

interface ApiClient {
    getList: (id: string) => Promise<Array<string>>;
}

const useApiClient = (): ApiClient => {
    return {
        getList: (id: string) => axios.get(`/testApiPath?id=${id}`)
            .then(function (response) {
                // handle success
                console.log(response);
                return ['1', '2'];
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                return ['1', '2'];
            })
    }
}

export default useApiClient;