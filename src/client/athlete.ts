import { Athlete, List } from "../types/index.js";
import { KyInstance } from "./internal-types.js";

export function createAthleteAPI(ky: KyInstance) {
  return {
    async get(eventId: string, athleteId: string): Promise<Athlete> {
      return await ky(`/events/${eventId}/athletes/${athleteId}`).json();
    },
    async getAll(eventId: string): Promise<List<Athlete>> {
      return await ky(`/events/${eventId}/athletes`).json();
    },
    async getAllForAgeGroup(eventId: string, ageGroupId: string): Promise<List<Athlete>> {
      return await ky(`/events/${eventId}/age-groups/${ageGroupId}/athletes`).json();
    },
  };
}
