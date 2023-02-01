import ky from "ky";
import { Competition } from "../types/Competition.js";
import { List } from "../types/index.js";
import { OptionsWithDefaults } from "./internal-types.js";

export function createCompetitionAPI(options: OptionsWithDefaults) {
  return {
    async get(eventId: string, ageGroupId: string, competitionId: string): Promise<Competition> {
      return await ky(
        new URL(`/events/${eventId}/age-groups/${ageGroupId}/competitions/${competitionId}`, options.host)
      ).json();
    },
    async getAll(eventId: string, ageGroupId: string): Promise<List<Competition>> {
      return await ky(new URL(`/events/${eventId}/age-groups/${ageGroupId}/competitions`, options.host)).json();
    },
  };
}
