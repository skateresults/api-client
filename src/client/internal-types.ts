import { Options } from "../types/Options.js";

type RequiredKey = "host";
export type OptionsWithDefaults = Required<Pick<Options, RequiredKey>> & Omit<Options, RequiredKey>;
