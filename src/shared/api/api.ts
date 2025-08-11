import Dexie, { type EntityTable } from "dexie";
import { eventScheme, type Event } from "./entities/events/events.types";
import {
  timelineSchema,
  type Timeline,
} from "./entities/timelines/timelines.types";
import type { User } from "./entities/user/user.types";
import { userSchema } from "./entities/user/user.types";

const db = new Dexie("radial-widget") as Dexie & {
  friends: EntityTable<User, "id">;
  timelines: EntityTable<Timeline, "id">;
  events: EntityTable<Event, "id">;
};

interface IDb {
  dbInstance: Dexie;
}

class ApiService {
  dbInstance: Dexie;

  constructor({ dbInstance }: IDb) {
    this.dbInstance = dbInstance;
  }

  initDb() {
    this.dbInstance.version(1).stores({
      users: userSchema,
      timelines: timelineSchema,
      events: eventScheme,
    });
    this.dbInstance.open();
  }

  getStoreByName(name: string) {
    return this.dbInstance.table(name);
  }
}
const dbInstance = new ApiService({ dbInstance: db });

export { dbInstance };
