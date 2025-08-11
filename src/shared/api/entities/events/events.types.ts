export interface Event {
  id: string;
  timeline_id: string;
  name: string;
  description: string;
}

export const eventScheme = "++id, timeline_id, name, description";
