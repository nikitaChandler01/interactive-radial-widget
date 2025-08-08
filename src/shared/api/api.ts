import { QueryClient } from "@tanstack/react-query";
import axios, { type AxiosInstance } from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
});
const queryClientInstance = new QueryClient();

class ApiService {
    apiUrl: string;
    api: AxiosInstance;
    queryClient: QueryClient;

    constructor(body: {
        apiInstance: AxiosInstance;
        API_URL: string;
        queryClient: QueryClient;
    }) {
        this.apiUrl = body.API_URL;
        this.api = axiosInstance;
        this.queryClient = queryClientInstance;
    }

    setAuthorizationHeader(token: string) {
        this.api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }

    deleteAuthorizationHeader() {
        delete this.api.defaults.headers.common.Authorization;
    }
}

const apiService = new ApiService({
    apiInstance: axiosInstance,
    API_URL: import.meta.env.VITE_APP_API_URL,
    queryClient: queryClientInstance,
});

const { api, apiUrl, queryClient } = apiService;

export { api, apiService, apiUrl, queryClient };
