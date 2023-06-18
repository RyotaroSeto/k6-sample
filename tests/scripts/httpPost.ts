import http from "k6/http";

import { config } from "../config/configPost";

export const options = config.options;
export const payload = config.payload;
export const params = config.params;

export default function () {
  http.post(__ENV.URL, payload, params);
};
