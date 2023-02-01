import { Options } from "../types/Options.js";
import { createAthleteAPI } from "./athlete.js";
import { createEventAPI } from "./event.js";
import { OptionsWithDefaults } from "./internal-types.js";

export function createClient(options: Options = {}) {
  const optionsWithDefaults: OptionsWithDefaults = {
    host: "https://api.skateresults.app",
    ...options,
  };

  return {
    event: createEventAPI(optionsWithDefaults),
    athlete: createAthleteAPI(optionsWithDefaults),
  };
}
