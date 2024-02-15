import type ky from "ky";
import { Options } from "../types/Options.js";

export type KyInstance = typeof ky;

type RequiredKey = "host";
export type OptionsWithDefaults = Required<Pick<Options, RequiredKey>> & Omit<Options, RequiredKey>;
