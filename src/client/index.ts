import { Options } from "../types/Options.js";
import { createAgeGroupAPI } from "./age-group.js";
import { createAthleteAPI } from "./athlete.js";
import { createCompetitionAPI } from "./competition.js";
import { createEventAPI } from "./event.js";
import { OptionsWithDefaults } from "./internal-types.js";

export function createClient(options: Options = {}) {
  const optionsWithDefaults: OptionsWithDefaults = {
    host: "https://api.skateresults.app",
    ...options,
  };

  return {
    ageGroup: createAgeGroupAPI(optionsWithDefaults),
    athlete: createAthleteAPI(optionsWithDefaults),
    competition: createCompetitionAPI(optionsWithDefaults),
    event: createEventAPI(optionsWithDefaults),
  };
}
