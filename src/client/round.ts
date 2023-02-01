import ky from "ky";
import { List, Round } from "../types/index.js";
import { OptionsWithDefaults } from "./internal-types.js";

export function createRoundAPI(options: OptionsWithDefaults) {
  return {
    async get(eventId: string, ageGroupId: string, competitionId: string, roundId: string): Promise<Round> {
      return await ky(
        new URL(
          `/events/${eventId}/age-groups/${ageGroupId}/competitions/${competitionId}/rounds/${roundId}`,
          options.host
        )
      ).json();
    },
    async getAll(eventId: string, ageGroupId: string, competitionId: string): Promise<List<Round>> {
      return await ky(
        new URL(`/events/${eventId}/age-groups/${ageGroupId}/competitions/${competitionId}/rounds`, options.host)
      ).json();
    },
  };
}
