import { Competition } from "../types/Competition.js";
import { List } from "../types/index.js";
import { KyInstance } from "./internal-types.js";

export function createCompetitionAPI(ky: KyInstance) {
  return {
    async get(eventId: string, ageGroupId: string, competitionId: string): Promise<Competition> {
      return await ky(`events/${eventId}/age-groups/${ageGroupId}/competitions/${competitionId}`).json();
    },
    async getAll(eventId: string, ageGroupId: string): Promise<List<Competition>> {
      return await ky(`events/${eventId}/age-groups/${ageGroupId}/competitions`).json();
    },
  };
}
