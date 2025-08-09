import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { User } from "./UserTypes";

type UserState = User | null;

interface State {
  user: UserState;
}

interface Actions {
  setUser: TVoidFunc<UserState>;
}

export const useUserStore = create<State & Actions>()(
  immer((set) => ({
    user: null,
    setUser: (user: UserState) =>
      set((state) => {
        state.user = user;
      }),
  }))
);
