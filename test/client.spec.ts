import assert from "node:assert/strict";
import test from "node:test";
import { createClient, type Client, FullRace, List, Race } from "../src/index.js";

const host = "https://api.example.test/v1";

type Equal<Actual, Expected> =
  (<Value>() => Value extends Actual ? 1 : 2) extends <Value>() => Value extends Expected ? 1 : 2 ? true : false;
type Expect<Value extends true> = Value;

type _RaceGetReturnsFullRace = Expect<Equal<ReturnType<Client["races"]["get"]>, Promise<FullRace>>>;
type _RaceGetAllReturnsRaceList = Expect<Equal<ReturnType<Client["races"]["getAll"]>, Promise<List<Race>>>>;

async function assertRequest(call: (client: Client) => Promise<unknown>, path: string) {
  const originalFetch = globalThis.fetch;
  let requestedUrl: string | undefined;

  globalThis.fetch = async (input) => {
    requestedUrl = new URL(input instanceof Request ? input.url : input.toString()).href;
    return new Response(JSON.stringify({ items: [], total: 0 }), {
      headers: { "content-type": "application/json" },
    });
  };

  try {
    await call(createClient({ host }));
    assert.equal(requestedUrl, `${host}/${path}`);
  } finally {
    globalThis.fetch = originalFetch;
  }
}

const requests: Array<{ name: string; call: (client: Client) => Promise<unknown>; path: string }> = [
  { name: "event.get", call: (client) => client.event.get("event"), path: "events/event" },
  { name: "event.getAll", call: (client) => client.event.getAll(), path: "events" },
  {
    name: "ageGroup.get",
    call: (client) => client.ageGroup.get("event", "age-group"),
    path: "events/event/age-groups/age-group",
  },
  { name: "ageGroup.getAll", call: (client) => client.ageGroup.getAll("event"), path: "events/event/age-groups" },
  {
    name: "athlete.get",
    call: (client) => client.athlete.get("event", "athlete"),
    path: "events/event/athletes/athlete",
  },
  { name: "athlete.getAll", call: (client) => client.athlete.getAll("event"), path: "events/event/athletes" },
  {
    name: "athlete.getAllForAgeGroup",
    call: (client) => client.athlete.getAllForAgeGroup("event", "age-group"),
    path: "events/event/age-groups/age-group/athletes",
  },
  {
    name: "competition.get",
    call: (client) => client.competition.get("event", "age-group", "competition"),
    path: "events/event/age-groups/age-group/competitions/competition",
  },
  {
    name: "competition.getAll",
    call: (client) => client.competition.getAll("event", "age-group"),
    path: "events/event/age-groups/age-group/competitions",
  },
  {
    name: "round.get",
    call: (client) => client.round.get("event", "age-group", "competition", "round"),
    path: "events/event/age-groups/age-group/competitions/competition/rounds/round",
  },
  {
    name: "round.getAll",
    call: (client) => client.round.getAll("event", "age-group", "competition"),
    path: "events/event/age-groups/age-group/competitions/competition/rounds",
  },
  {
    name: "races.get",
    call: (client) => client.races.get("event", "age-group", "competition", "round", "race"),
    path: "events/event/age-groups/age-group/competitions/competition/rounds/round/races/race",
  },
  {
    name: "races.getAll",
    call: (client) => client.races.getAll("event", "age-group", "competition", "round"),
    path: "events/event/age-groups/age-group/competitions/competition/rounds/round/races",
  },
  { name: "series.get", call: (client) => client.series.get("series"), path: "series/series" },
  { name: "series.getAll", call: (client) => client.series.getAll(), path: "series" },
];

for (const { name, call, path } of requests) {
  test(name, async () => {
    await assertRequest(call, path);
  });
}
