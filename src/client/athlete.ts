import ky from "ky";
import { Athlete, List } from "../types/index.js";
import { OptionsWithDefaults } from "./internal-types.js";

export function createAthleteAPI(options: OptionsWithDefaults) {
  return {
    async get(eventId: string, athleteId: string): Promise<Athlete> {
      return await ky(new URL(`/events/${eventId}/athletes/${athleteId}`, options.host)).json();
    },
    async getAll(eventId: string): Promise<List<Athlete>> {
      return await ky(new URL(`/events/${eventId}/athletes`, options.host)).json();
    },
    async getAllForAgeGroup(eventId: string, ageGroupId: string): Promise<List<Athlete>> {
      return await ky(new URL(`/events/${eventId}/age-groups/${ageGroupId}/athletes`, options.host)).json();
    },
  };
}
