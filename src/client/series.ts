import { List, Series } from "../types/index.js";
import { KyInstance } from "./internal-types.js";

export function createSeriesAPI(ky: KyInstance) {
  return {
    async get(seriesId: string): Promise<Series> {
      return await ky(`series/${seriesId}`).json();
    },
    async getAll(): Promise<List<Series>> {
      return await ky(`series`).json();
    },
  };
}
