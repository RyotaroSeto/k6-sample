import { Options } from "k6/options"

interface Config {
  urlbase: string
  options: Options
}

const options: Options = {
  stages: [
    // 合計で3秒間、秒間66リクエストの負荷試験
    { duration: '1s', target: 66 }, //1秒間に66のユーザーがリクエストを送信し続け
    { duration: '1s', target: 66 }, //1秒間に66のユーザーがリクエストを送信し続け
    { duration: '1s', target: 66 }, //1秒間に66のユーザーがリクエストを送信し続け
  ],
  // vus: 10,
  // duration: "5s",
  thresholds: {
    http_req_failed: ['rate<0.01'], // httpエラーは1%未満であるべき
    http_req_duration: ['p(95)<200'], // リクエストの95%は200ms以下であること
  },
};


export const config: Config = {
  urlbase: "https://example.com",
  options
};
