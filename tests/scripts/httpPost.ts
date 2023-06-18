import http from "k6/http";
import { check } from 'k6';

import { config } from "../config/configPost";

export const options = config.options;
export const payload = config.payload;
export const params = config.params;

export default function () {
  const res = http.post(__ENV.URL, payload, params);
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
};
