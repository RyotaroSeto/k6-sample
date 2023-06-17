#!/bin/sh

TEST_DIR_FILE=/scripts/"$1".js

docker compose run --rm k6 run --compatibility-mode=base "${TEST_DIR_FILE}"
