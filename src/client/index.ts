import ky from "ky";
import { Options } from "../types/Options.js";
import { createAgeGroupAPI } from "./age-group.js";
import { createAthleteAPI } from "./athlete.js";
import { createCompetitionAPI } from "./competition.js";
import { createEventAPI } from "./event.js";
import { OptionsWithDefaults } from "./internal-types.js";
import { createRaceAPI } from "./race.js";
import { createRoundAPI } from "./round.js";

export interface Client {
  ageGroup: ReturnType<typeof createAgeGroupAPI>;
  athlete: ReturnType<typeof createAthleteAPI>;
  event: ReturnType<typeof createEventAPI>;
  competition: ReturnType<typeof createCompetitionAPI>;
  races: ReturnType<typeof createRaceAPI>;
  round: ReturnType<typeof createRoundAPI>;
}

export function createClient(options: Options = {}): Client {
  const optionsWithDefaults: OptionsWithDefaults = {
    host: "https://api.skateresults.app",
    retry: 0,
    ...options,
  };

  const kyInstance = ky.create({
    prefixUrl: optionsWithDefaults.host,
    headers: optionsWithDefaults.token ? { Authorization: `Bearer ${optionsWithDefaults.token}` } : {},
    retry: optionsWithDefaults.retry,
  });

  return {
    ageGroup: createAgeGroupAPI(kyInstance),
    athlete: createAthleteAPI(kyInstance),
    competition: createCompetitionAPI(kyInstance),
    event: createEventAPI(kyInstance),
    races: createRaceAPI(kyInstance),
    round: createRoundAPI(kyInstance),
  };
}
