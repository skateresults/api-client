import { Event, List } from "../types/index.js";
import { KyInstance } from "./internal-types.js";

export function createEventAPI(ky: KyInstance) {
  return {
    async get(eventId: string): Promise<Event> {
      return await ky(`/events/${eventId}`).json();
    },
    async getAll(): Promise<List<Event>> {
      return await ky("/events").json();
    },
  };
}
