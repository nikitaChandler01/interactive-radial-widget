import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface State {
    isAuthorized: boolean;
}

interface Action {
    setIsAuthorized: (item: boolean) => void;
}

export const useAuthStore = create<State & Action>()(
    immer((set) => ({
        isAuthorized: false,
        setIsAuthorized: (item: boolean) =>
            set((state) => {
                state.isAuthorized = item;
            }),
    }))
);
