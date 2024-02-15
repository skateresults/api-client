import { List, Round } from "../types/index.js";
import { KyInstance } from "./internal-types.js";

export function createRoundAPI(ky: KyInstance) {
  return {
    async get(eventId: string, ageGroupId: string, competitionId: string, roundId: string): Promise<Round> {
      return await ky(
        `/events/${eventId}/age-groups/${ageGroupId}/competitions/${competitionId}/rounds/${roundId}`,
      ).json();
    },
    async getAll(eventId: string, ageGroupId: string, competitionId: string): Promise<List<Round>> {
      return await ky(`/events/${eventId}/age-groups/${ageGroupId}/competitions/${competitionId}/rounds`).json();
    },
  };
}
