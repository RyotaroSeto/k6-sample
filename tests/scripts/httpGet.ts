import http from "k6/http";
import { check } from 'k6';

import { config } from "../config/config";

export const options = config.options;

export default function () {
  const res = http.get(__ENV.URL);
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
};
