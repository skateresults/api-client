import ky from "ky";
import { AgeGroup, List } from "../types/index.js";
import { OptionsWithDefaults } from "./internal-types.js";

export function createAgeGroupAPI(options: OptionsWithDefaults) {
  return {
    async get(eventId: string, ageGroupId: string): Promise<AgeGroup> {
      return await ky(new URL(`/events/${eventId}/age-groups/${ageGroupId}`, options.host)).json();
    },
    async getAll(eventId: string): Promise<List<AgeGroup>> {
      return await ky(new URL(`/events/${eventId}/age-groups`, options.host)).json();
    },
  };
}
