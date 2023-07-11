import ky from "ky";
import { List, Round } from "../types/index.js";
import { OptionsWithDefaults } from "./internal-types.js";

export function createRaceAPI(options: OptionsWithDefaults) {
  return {
    async get(
      eventId: string,
      ageGroupId: string,
      competitionId: string,
      roundId: string,
      raceId: string,
    ): Promise<Round> {
      return await ky(
        new URL(
          `/events/${eventId}/age-groups/${ageGroupId}/competitions/${competitionId}/rounds/${roundId}/races/${raceId}`,
          options.host,
        ),
      ).json();
    },
    async getAll(eventId: string, ageGroupId: string, competitionId: string, roundId: string): Promise<List<Round>> {
      return await ky(
        new URL(
          `/events/${eventId}/age-groups/${ageGroupId}/competitions/${competitionId}/rounds/${roundId}/races`,
          options.host,
        ),
      ).json();
    },
  };
}
