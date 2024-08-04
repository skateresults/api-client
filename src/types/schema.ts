/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/events": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** List all events */
    get: operations["getEventList"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/events/{eventId}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Info for a specific event */
    get: operations["getEventById"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/events/{eventId}/age-groups": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** List all age groups of an event */
    get: operations["getAgeGroupList"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/events/{eventId}/age-groups/{ageGroupId}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Info for a specific age group */
    get: operations["getAgeGroupById"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/events/{eventId}/age-groups/{ageGroupId}/athletes": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** List all athletes of an age group of an event */
    get: operations["getAthletesByAgeGroup"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/events/{eventId}/age-groups/{ageGroupId}/competitions": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** List all competitions of an age group */
    get: operations["getCompetitionList"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/events/{eventId}/age-groups/{ageGroupId}/competitions/{competitionId}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Info for a specific competition */
    get: operations["getCompetitionById"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/events/{eventId}/age-groups/{ageGroupId}/competitions/{competitionId}/rounds": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** List all rounds of a competition */
    get: operations["getRoundList"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/events/{eventId}/age-groups/{ageGroupId}/competitions/{competitionId}/rounds/{roundId}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Info for a specific round */
    get: operations["getRoundById"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/events/{eventId}/age-groups/{ageGroupId}/competitions/{competitionId}/rounds/{roundId}/races": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** List all races of a round */
    get: operations["getRaceList"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/events/{eventId}/age-groups/{ageGroupId}/competitions/{competitionId}/rounds/{roundId}/races/{raceId}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Info for a specific race */
    get: operations["getRaceById"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/events/{eventId}/athletes": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** List all athletes of an event */
    get: operations["getAthleteList"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/events/{eventId}/athletes/{athleteId}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Info for a specific athlete */
    get: operations["getAthleteById"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/series": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** List all series */
    get: operations["getSeriesList"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/series/{seriesId}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Info for a specific series */
    get: operations["getSeriesById"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
export type webhooks = Record<string, never>;
export interface components {
  schemas: {
    Event: {
      id: string;
      slug: string;
      name: string;
      /** Format: date */
      dateBegin: string;
      /** Format: date */
      dateEnd: string;
    };
    EventList: {
      items: components["schemas"]["Event"][];
      total: number;
    };
    Series: {
      id: string;
      slug: string;
      name: string;
      /** Format: date */
      dateBegin: string;
      /** Format: date */
      dateEnd: string;
    };
    SeriesList: {
      items: components["schemas"]["Series"][];
      total: number;
    };
    AgeGroup: {
      id: string;
      name: string;
      /** @enum {string|null} */
      gender: "male" | "female" | null;
      competitions: components["schemas"]["Competition"][];
      event: string;
    };
    AgeGroupList: {
      items: components["schemas"]["AgeGroup"][];
      total: number;
    };
    Athlete: {
      id: string;
      bib?: number;
      /** @description Omitted, if athlete didn't sign the privacy policy */
      lastName?: string;
      /** @description Omitted, if athlete didn't sign the privacy policy */
      firstName?: string;
      club?: string;
      team?: string;
      nation?: string;
      overallResult: {
        rank?: number;
      };
      competitionResults: {
        competition: string;
        rank?: number;
      }[];
      event: string;
      ageGroup?: string;
    };
    AthleteList: {
      items: components["schemas"]["Athlete"][];
      total: number;
    };
    Competition: {
      id: string;
      name: string;
      rounds: components["schemas"]["Round"][];
      ageGroup: string;
      event: string;
    };
    CompetitionList: {
      items: components["schemas"]["Competition"][];
      total: number;
    };
    Round: {
      id: string;
      name: string;
      seeded: boolean;
      races: components["schemas"]["Race"][];
    };
    RoundList: {
      items: components["schemas"]["Round"][];
      total: number;
    };
    Race: {
      id: string;
      done: boolean;
      seeded: boolean;
    };
    RaceList: {
      items: components["schemas"]["Race"][];
      total: number;
    };
    FullRace: {
      athletes: components["schemas"]["RaceAthlete"][];
    } & components["schemas"]["Race"];
    RaceAthlete: {
      /** @description Start position of the athlete */
      startPos?: number;
      /** @description Final rank of the athlete */
      rank?: number;
      athlete: components["schemas"]["Athlete"];
    };
    Error: {
      statusCode: number;
      message: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
  getEventList: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description An array of events */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["EventList"];
        };
      };
    };
  };
  getEventById: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID of the event to be fetched */
        eventId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Event object */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Event"];
        };
      };
      /** @description Event not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  getAgeGroupList: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID of the event */
        eventId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description An array of age groups */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["AgeGroupList"];
        };
      };
      /** @description Event not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  getAgeGroupById: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID of the event */
        eventId: string;
        /** @description ID of the age group to be fetched */
        ageGroupId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Age group object */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["AgeGroup"];
        };
      };
      /** @description Age group or event not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  getAthletesByAgeGroup: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID of the event */
        eventId: string;
        /** @description ID of the age group */
        ageGroupId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description An array of athletes */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["AthleteList"];
        };
      };
      /** @description Event or age group not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  getCompetitionList: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID of the event */
        eventId: string;
        /** @description ID of the age group */
        ageGroupId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description An array of competitions */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["CompetitionList"];
        };
      };
      /** @description Age group or event not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  getCompetitionById: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID of the event */
        eventId: string;
        /** @description ID of the age group */
        ageGroupId: string;
        /** @description ID of the competition */
        competitionId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Competition object */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Competition"];
        };
      };
      /** @description Competition, age group, or event not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  getRoundList: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID of the event */
        eventId: string;
        /** @description ID of the age group */
        ageGroupId: string;
        /** @description ID of the competition */
        competitionId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description An array of rounds */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Round"];
        };
      };
      /** @description Competition, age group or event not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  getRoundById: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID of the event */
        eventId: string;
        /** @description ID of the age group */
        ageGroupId: string;
        /** @description ID of the competition */
        competitionId: string;
        /** @description ID of the round */
        roundId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Round object */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Round"];
        };
      };
      /** @description Round, competition, age group, or event not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  getRaceList: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID of the event */
        eventId: string;
        /** @description ID of the age group */
        ageGroupId: string;
        /** @description ID of the competition */
        competitionId: string;
        /** @description ID of the round */
        roundId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description An array of races */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["RaceList"];
        };
      };
      /** @description Round. competition, age group or event not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  getRaceById: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID of the event */
        eventId: string;
        /** @description ID of the age group */
        ageGroupId: string;
        /** @description ID of the competition */
        competitionId: string;
        /** @description ID of the round */
        roundId: string;
        /** @description ID of the race */
        raceId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Race object */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Race"];
        };
      };
      /** @description Race, round, competition, age group, or event not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  getAthleteList: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID of the event */
        eventId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description An array of athletes */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["AthleteList"];
        };
      };
      /** @description Event not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  getAthleteById: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID of the event */
        eventId: string;
        /** @description ID of the athlete to be fetched */
        athleteId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description athlete object */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Athlete"];
        };
      };
      /** @description Athlete not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  getSeriesList: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description An array of series */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["SeriesList"];
        };
      };
    };
  };
  getSeriesById: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID of the series to be fetched */
        seriesId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Series object */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Series"];
        };
      };
      /** @description Series not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
}
