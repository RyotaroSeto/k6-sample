<p align="center"><a href="https://k6.io/"><img src="assets/k6-logo-with-grafana.svg" alt="k6" width="258" height="210" /></a></p>

### .env
``` bash
tocuh .env
```

```
URL = https://test-api.k6.io/
```

``` bash
docker network create k6Net
docker network create grafanaNet
yarn install
docker compose up -d
yarn start httpGet
```


### grafana
``` bash
localhost:3000
```
以下で負荷試験の結果をDashboardで可視化できる
Home > Dashboards > k6

### 指標
- checks：実行されたチェックの数を表します。✓は成功したチェックの数を示し、✗は失敗したチェックの数を示します。
- data_received：受信したデータの合計サイズを表します。単位はバイトです。
- data_sent：送信されたデータの合計サイズを表します。単位はバイトです。
- http_req_blocked：リクエストがブロックされた時間の統計情報を示します。平均（avg）、最小（min）、中央値（med）、最大（max）の他に、パーセンタイル（p）ごとの値も表示されます。
- http_req_connecting：リクエストの接続にかかった時間の統計情報を示します。
- http_req_duration：リクエストの処理時間の統計情報を示します。成功したリクエストの平均（avg）、最小（min）、中央値（med）、最大（max）の他に、パーセンタイル（p）ごとの値も表示されます。
  - { expected_response: true }：期待されるレスポンスの統計情報を示します。同様に、平均（avg）、最小（min）、中央値（med）、最大（max）、パーセンタイル（p）の値が表示されます。
- http_req_failed：失敗したリクエストの数を示します。
- http_req_receiving：レスポンスの受信にかかった時間の統計情報を示します。
- http_req_sending：リクエストの送信にかかった時間の統計情報を示します。
- http_req_tls_handshaking：TLSハンドシェイクにかかった時間の統計情報を示します。
- http_req_waiting：リクエストの待機時間の統計情報を示します。
- http_reqs：実行されたリクエストの数を示します。
- iteration_duration：イテレーション（各ユーザーが負荷をかける単位）の処理時間の統計情報を示します。
- iterations：実行されたイテレーションの数を示します。
- vus：仮想ユーザースレッド（Virtual User）の数を示します。minは最小のユーザースレッド数、maxは最大のユーザースレッド数を表します。
- vus_max：設定された仮想ユーザースレッドの最大数を示します。
```
checks.........................: 100.00% ✓ 775       ✗ 0
data_received..................: 13 MB   4.0 MB/s
data_sent......................: 102 kB  32 kB/s
http_req_blocked...............: avg=32.61ms  min=1.27µs   med=3.71µs   max=859.86ms p(90)=13.27µs  p(95)=370.62ms
http_req_connecting............: avg=15.9ms   min=0s       med=0s       max=225.32ms p(90)=0s       p(95)=181.82ms
http_req_duration..............: avg=187.97ms min=178.54ms med=186.05ms max=242.75ms p(90)=196.07ms p(95)=204.69ms
  { expected_response:true }...: avg=187.97ms min=178.54ms med=186.05ms max=242.75ms p(90)=196.07ms p(95)=204.69ms
http_req_failed................: 0.00%   ✓ 0         ✗ 775
http_req_receiving.............: avg=310.45µs min=26.76µs  med=128.44µs max=10.02ms  p(90)=485.14µs p(95)=991.29µs
http_req_sending...............: avg=52.35µs  min=6.06µs   med=16.72µs  max=6.86ms   p(90)=85.28µs  p(95)=133.22µs
http_req_tls_handshaking.......: avg=16.64ms  min=0s       med=0s       max=680.43ms p(90)=0s       p(95)=185.62ms
http_req_waiting...............: avg=187.61ms min=178.36ms med=185.69ms max=242.66ms p(90)=195.48ms p(95)=204.33ms
http_reqs......................: 775     243.47504/s
iteration_duration.............: avg=220.88ms min=178.66ms med=186.52ms max=1.06s    p(90)=219.43ms p(95)=563.23ms
iterations.....................: 775     243.47504/s
vus............................: 66      min=56      max=66
vus_max........................: 66      min=66      max=66
```
### [thresholds](https://k6.io/docs/using-k6/thresholds/)
### [options](https://k6.io/docs/using-k6/k6-options/how-to/)
