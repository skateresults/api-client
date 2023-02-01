/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/events": {
    /** List all events */
    get: operations["getEvents"];
  };
  "/events/{eventId}": {
    /** Info for a specific event */
    get: operations["getEventById"];
  };
  "/events/{eventId}/age-groups": {
    /** List all age groups of an event */
    get: operations["getAgeGroups"];
  };
  "/events/{eventId}/age-groups/{ageGroupId}": {
    /** Info for a specific age group */
    get: operations["getAgeGroupById"];
  };
  "/events/{eventId}/age-groups/{ageGroupId}/competitions": {
    /** List all competitions of an age group */
    get: operations["getCompetitions"];
  };
  "/events/{eventId}/age-groups/{ageGroupId}/competitions/{competitionId}": {
    /** Info for a specific competition */
    get: operations["getCompetitionById"];
  };
  "/events/{eventId}/age-groups/{ageGroupId}/competitions/{competitionId}/rounds": {
    /** List all rounds of a competition */
    get: operations["getRounds"];
  };
  "/events/{eventId}/age-groups/{ageGroupId}/competitions/{competitionId}/rounds/{roundId}": {
    /** Info for a specific round */
    get: operations["getRoundById"];
  };
  "/events/{eventId}/age-groups/{ageGroupId}/competitions/{competitionId}/rounds/{roundId}/races": {
    /** List all races of a round */
    get: operations["getRaces"];
  };
  "/events/{eventId}/age-groups/{ageGroupId}/competitions/{competitionId}/rounds/{roundId}/races/{raceId}": {
    /** Info for a specific race */
    get: operations["getRaceById"];
  };
  "/events/{eventId}/athletes": {
    /** List all athletes of an event */
    get: operations["getAthletes"];
  };
  "/events/{eventId}/athletes/{athleteId}": {
    /** Info for a specific athlete */
    get: operations["getAgeGroupById"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    readonly Event: {
      readonly id: string;
      readonly public: boolean;
      readonly name: string;
      /** Format: date */
      readonly dateBegin: string;
      /** Format: date */
      readonly dateEnd: string;
    };
    readonly Events: {
      readonly items: readonly components["schemas"]["Event"][];
      readonly total: number;
    };
    readonly AgeGroup: {
      readonly id: string;
      readonly name: string;
      /** @enum {string|null} */
      readonly gender: "male" | "female" | null;
      readonly competitions: readonly components["schemas"]["Competition"][];
      readonly event: string;
    };
    readonly AgeGroups: {
      readonly items: readonly components["schemas"]["AgeGroup"][];
      readonly total: number;
    };
    readonly Athlete: {
      readonly id: string;
      readonly bib?: number;
      /** @description Omitted, if athlete didn't sign the privacy policy */
      readonly lastName?: string;
      /** @description Omitted, if athlete didn't sign the privacy policy */
      readonly firstName?: string;
      readonly club?: string;
      readonly team?: string;
      readonly nation?: string;
      readonly overallResult: {
        readonly rank?: number;
      };
      readonly competitionResults: readonly {
        readonly competition: string;
        readonly rank?: number;
      }[];
      readonly event: string;
      readonly ageGroup?: string;
    };
    readonly Athletes: {
      readonly items: readonly components["schemas"]["Athlete"][];
      readonly total: number;
    };
    readonly Competition: {
      readonly id: string;
      readonly name: string;
      readonly rounds: readonly components["schemas"]["Round"][];
      readonly ageGroup: string;
      readonly event: string;
    };
    readonly Competitions: {
      readonly items: readonly components["schemas"]["Competition"][];
      readonly total: number;
    };
    readonly Round: {
      readonly id: string;
      readonly name: string;
      readonly seeded: boolean;
      readonly races: readonly components["schemas"]["Race"][];
    };
    readonly Rounds: {
      readonly items: readonly components["schemas"]["Round"][];
      readonly total: number;
    };
    readonly Race: {
      readonly id: string;
      readonly done: boolean;
      readonly seeded: boolean;
    };
    readonly Races: {
      readonly items: readonly components["schemas"]["Race"][];
      readonly total: number;
    };
    readonly FullRace: {
      readonly athletes: readonly components["schemas"]["RaceAthlete"][];
    } & components["schemas"]["Race"];
    readonly RaceAthlete: {
      /** @description Start position of the athlete */
      readonly startPos?: number;
      /** @description Final rank of the athlete */
      readonly rank?: number;
      readonly athlete: components["schemas"]["Athlete"];
    };
    readonly Error: {
      readonly statusCode: number;
      readonly message: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export interface operations {
  getEvents: {
    /** List all events */
    responses: {
      /** @description An array of events */
      200: {
        content: {
          readonly "application/json": components["schemas"]["Events"];
        };
      };
    };
  };
  getEventById: {
    /** Info for a specific event */
    parameters: {
      /** @description ID of the event to be fetched */
      readonly path: {
        eventId: string;
      };
    };
    responses: {
      /** @description Event object */
      200: {
        content: {
          readonly "application/json": components["schemas"]["Event"];
        };
      };
      /** @description Event not found */
      404: {
        content: {
          readonly "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  getAgeGroups: {
    /** List all age groups of an event */
    parameters: {
      /** @description ID of the event */
      readonly path: {
        eventId: string;
      };
    };
    responses: {
      /** @description An array of age groups */
      200: {
        content: {
          readonly "application/json": components["schemas"]["AgeGroups"];
        };
      };
      /** @description Event not found */
      404: {
        content: {
          readonly "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  getAgeGroupById: {
    /** Info for a specific athlete */
    parameters: {
      /** @description ID of the event */
      /** @description ID of the athlete to be fetched */
      readonly path: {
        eventId: string;
        athleteId: string;
      };
    };
    responses: {
      /** @description athlete object */
      200: {
        content: {
          readonly "application/json": components["schemas"]["Athlete"];
        };
      };
      /** @description Athlete not found */
      404: {
        content: {
          readonly "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  getCompetitions: {
    /** List all competitions of an age group */
    parameters: {
      /** @description ID of the event */
      /** @description ID of the age group */
      readonly path: {
        eventId: string;
        ageGroupId: string;
      };
    };
    responses: {
      /** @description An array of competitions */
      200: {
        content: {
          readonly "application/json": components["schemas"]["Competitions"];
        };
      };
      /** @description Age group or event not found */
      404: {
        content: {
          readonly "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  getCompetitionById: {
    /** Info for a specific competition */
    parameters: {
      /** @description ID of the event */
      /** @description ID of the age group */
      /** @description ID of the competition */
      readonly path: {
        eventId: string;
        ageGroupId: string;
        competitionId: string;
      };
    };
    responses: {
      /** @description Competition object */
      200: {
        content: {
          readonly "application/json": components["schemas"]["Competition"];
        };
      };
      /** @description Competition, age group, or event not found */
      404: {
        content: {
          readonly "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  getRounds: {
    /** List all rounds of a competition */
    parameters: {
      /** @description ID of the event */
      /** @description ID of the age group */
      /** @description ID of the competition */
      readonly path: {
        eventId: string;
        ageGroupId: string;
        competitionId: string;
      };
    };
    responses: {
      /** @description An array of rounds */
      200: {
        content: {
          readonly "application/json": components["schemas"]["Round"];
        };
      };
      /** @description Competition, age group or event not found */
      404: {
        content: {
          readonly "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  getRoundById: {
    /** Info for a specific round */
    parameters: {
      /** @description ID of the event */
      /** @description ID of the age group */
      /** @description ID of the competition */
      /** @description ID of the round */
      readonly path: {
        eventId: string;
        ageGroupId: string;
        competitionId: string;
        roundId: string;
      };
    };
    responses: {
      /** @description Round object */
      200: {
        content: {
          readonly "application/json": components["schemas"]["Round"];
        };
      };
      /** @description Round, competition, age group, or event not found */
      404: {
        content: {
          readonly "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  getRaces: {
    /** List all races of a round */
    parameters: {
      /** @description ID of the event */
      /** @description ID of the age group */
      /** @description ID of the competition */
      /** @description ID of the round */
      readonly path: {
        eventId: string;
        ageGroupId: string;
        competitionId: string;
        roundId: string;
      };
    };
    responses: {
      /** @description An array of races */
      200: {
        content: {
          readonly "application/json": components["schemas"]["Races"];
        };
      };
      /** @description Round. competition, age group or event not found */
      404: {
        content: {
          readonly "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  getRaceById: {
    /** Info for a specific race */
    parameters: {
      /** @description ID of the event */
      /** @description ID of the age group */
      /** @description ID of the competition */
      /** @description ID of the round */
      /** @description ID of the race */
      readonly path: {
        eventId: string;
        ageGroupId: string;
        competitionId: string;
        roundId: string;
        raceId: string;
      };
    };
    responses: {
      /** @description Race object */
      200: {
        content: {
          readonly "application/json": components["schemas"]["Race"];
        };
      };
      /** @description Race, round, competition, age group, or event not found */
      404: {
        content: {
          readonly "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  getAthletes: {
    /** List all athletes of an event */
    parameters: {
      /** @description ID of the event */
      readonly path: {
        eventId: string;
      };
    };
    responses: {
      /** @description An array of athletes */
      200: {
        content: {
          readonly "application/json": components["schemas"]["Athletes"];
        };
      };
      /** @description Event not found */
      404: {
        content: {
          readonly "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
}
