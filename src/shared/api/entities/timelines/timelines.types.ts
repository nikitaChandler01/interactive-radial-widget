import type { Event } from "../events/events.types";

export interface Timeline {
  id: string;
  name: string;
  events: Event[];
}

export const timelineSchema = "++id, name, events";
