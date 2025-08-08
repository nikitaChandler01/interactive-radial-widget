import { api } from "../../api";
import { apiConfig } from "../../apiConfig";

export const login = async (payload: SignInDtoRequest) => {
    return (
        await api.post<Promise<SignInDtoResponse>>(apiConfig.oauth.signIn, {
            ...payload,
            client_id: import.meta.env.VITE_APP_CLIENT_ID,
            client_secret: import.meta.env.VITE_APP_CLIENT_SECRET,
            grant_type: "password",
        })
    ).data;
};

export const getUserInfo = async () => {
    return (await api.get<Promise<UserDtoResponse>>(apiConfig.user.getInfo)).data;
};

export const getUserById = async (payload: number) => {
    return (await api.post<Promise<UserDtoResponse>>(apiConfig.user.getById(payload)))
        .data;
};
