#!/bin/sh
REPORTS_DIR=lighthouse
LAST_COMMIT="$(git rev-parse HEAD 2>/dev/null)"

mkdir -p $REPORTS_DIR/$LAST_COMMIT &&
cd $REPORTS_DIR/$LAST_COMMIT &&
lighthouse http://localhost:8080 --perf --output=json --output-path=root.json &&
lighthouse http://localhost:8080/#/browse --perf --output=json --output-path=browse.json &&
lighthouse http://localhost:8080/#/offline-games --perf --output=json --output-path=offline.json
