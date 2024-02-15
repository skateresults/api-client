import { List, Round } from "../types/index.js";
import { KyInstance } from "./internal-types.js";

export function createRaceAPI(ky: KyInstance) {
  return {
    async get(
      eventId: string,
      ageGroupId: string,
      competitionId: string,
      roundId: string,
      raceId: string,
    ): Promise<Round> {
      return await ky(
        `/events/${eventId}/age-groups/${ageGroupId}/competitions/${competitionId}/rounds/${roundId}/races/${raceId}`,
      ).json();
    },
    async getAll(eventId: string, ageGroupId: string, competitionId: string, roundId: string): Promise<List<Round>> {
      return await ky(
        `/events/${eventId}/age-groups/${ageGroupId}/competitions/${competitionId}/rounds/${roundId}/races`,
      ).json();
    },
  };
}
