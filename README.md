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



