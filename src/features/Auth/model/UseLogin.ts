import { apiService } from "@shared/api/api";
import {
    userApiService,
    type SignInDtoRequest,
    type SignInDtoResponse,
} from "@shared/api/entities/user";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { userQueryKeys } from "./constants";
import { useAuthStore } from "@entities/user";

interface IUseLogin {
    remember?: boolean;
}

export const useLogin = ({ remember }: IUseLogin) => {
    const setIsAuthorized = useAuthStore((state) => state.setIsAuthorized);
    const {
        data,
        mutateAsync: login,
        isPending,
        isError,
        error,
    } = useMutation<SignInDtoResponse, AxiosError, SignInDtoRequest>({
        mutationKey: userQueryKeys.login,
        mutationFn: userApiService.login,
        onSuccess: (response) => onSuccess(response),
    });

    const onSuccess = (response: SignInDtoResponse) => {
        apiService.setAuthorizationHeader(response.access_token);
        const token = response.access_token;
        if (remember) {
            localStorage.setItem("access_token", token);
        }
        setIsAuthorized(true);
    };

    return {
        login,
        isPending,
        isError,
        error,
    };
};
