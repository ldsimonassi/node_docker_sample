#!/bin/bash
docker build -t ldsimonassi/node_hello:0.1 .
docker run -t -i -p 8080:8080 ldsimonassi/node_hello:0.1
