import http from "k6/http";

import { config } from "../config/configExample";

export const options = config.options;

export default function () {
  http.get("https://test-api.k6.io/");
};
