import { Options } from "k6/options"

interface Config {
  urlbase: string
  options: Options
  payload: string
  params: Params
}

type Params = {
  headers: {
    'Content-Type': string,
    'Authorization': string
  };
};

const options: Options = {
  vus: 10,
  duration: "5s",
};

const payload = JSON.stringify({
  email: 'aaa',
  password: 'bbb',
});

const params:Params = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+ __ENV.TOKEN,
  },
};

export const config: Config = {
  urlbase: "https://example.com",
  options,
  payload,
  params
};
