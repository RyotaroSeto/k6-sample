import { Options } from "k6/options"

interface Config {
  urlbase: string
  options: Options
}

const options: Options = {
  vus: 10,
  duration: "5s",
};

export const config: Config = {
  urlbase: "https://example.com",
  options
};
