import { dbInstance } from "@shared/api/api";
import { useLiveQuery } from "dexie-react-hooks";

export const useGetUsers = async () => {
  const { users } = dbInstance.getStores();
  const allUsers = useLiveQuery(() => users.toArray());
  console.log(users, allUsers);
};
