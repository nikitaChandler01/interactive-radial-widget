import { useQuery } from "@tanstack/react-query";
import { userQueryKeys } from "./constants";
import { userApiService } from "@shared/api/entities/user";
import type { User } from "@entities/user/types";

export const useGetUser = () => {
    const {
        data: user,
        refetch,
        isPending,
        isError,
    } = useQuery({
        queryKey: userQueryKeys.getUser,
        queryFn: userApiService.getUserInfo,
        staleTime: Infinity,
        select: (data): User => data?.data,
    });

    return {
        user,
        refetch,
        isError,
        isPending,
    };
};
