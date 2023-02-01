import ky from "ky";
import { Event, List } from "../types/index.js";
import { OptionsWithDefaults } from "./internal-types.js";

export function createEventAPI(options: OptionsWithDefaults) {
  return {
    async get(eventId: string): Promise<Event> {
      return await ky(new URL(`/events/${eventId}`, options.host)).json();
    },
    async getAll(): Promise<List<Event>> {
      return await ky(new URL("/events", options.host)).json();
    },
  };
}
