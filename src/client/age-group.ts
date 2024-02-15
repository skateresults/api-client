import { AgeGroup, List } from "../types/index.js";
import { KyInstance } from "./internal-types.js";

export function createAgeGroupAPI(ky: KyInstance) {
  return {
    async get(eventId: string, ageGroupId: string): Promise<AgeGroup> {
      return await ky(`/events/${eventId}/age-groups/${ageGroupId}`).json();
    },
    async getAll(eventId: string): Promise<List<AgeGroup>> {
      return await ky(`/events/${eventId}/age-groups`).json();
    },
  };
}
