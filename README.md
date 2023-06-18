# K6-sample

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

