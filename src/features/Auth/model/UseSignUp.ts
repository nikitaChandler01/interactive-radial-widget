import { dbInstance } from "@shared/api/api";
import type { User } from "@shared/api/entities/user/user.types";
import { getHash } from "@shared/lib/hashFunc";
import { useState } from "react";

export const useSignUp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const table = dbInstance.getStoreByName("users");
  const register = async (userData: Omit<User, "id">) => {
    setLoading(true);
    return table
      .add(userData)
      .then((response) => {
        return {
          name: userData.name,
          email: userData.email
          access_token: getHash(userData.password),
        };
      })
      .catch((e) => {
        return e;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { register };
};
