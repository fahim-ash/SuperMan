# this file will be modified later in proper structure

# Initial micro service architecture for SuperMan

```
/SuperMan
|-- /services
| |-- /user_service
| | |-- /src
| | | |-- /controllers
| | | |-- /models
| | | |-- /services
| | | |-- /routes
| | | |-- /grpc
| | | | |-- user_service.proto
| | | | |-- user_service_grpc_pb.ts
| | | | |-- user_service_pb.ts
| | | |-- index.ts
| | |-- /config
| | | |-- database.ts
| | | |-- grpc-client.ts
| | | |-- redis.ts
| | | |-- kafka.ts
| | |-- /tests
| | | |-- /unit
| | | |-- /integration
| | |-- Dockerfile
| | |-- package.json
| | |-- README.md
| |
| |-- /auth_service
| | |-- /src
| | | |-- /controllers
| | | |-- /models
| | | |-- /services
| | | |-- /routes
| | | |-- /grpc
| | | | |-- auth_service.proto
| | | | |-- auth_service_grpc_pb.ts
| | | | |-- auth_service_pb.ts
| | | |-- index.ts
| | |-- /config
| | | |-- database.ts
| | | |-- grpc-client.ts
| | | |-- redis.ts
| | | |-- kafka.ts
| | |-- /tests
| | | |-- /unit
| | | |-- /integration
| | |-- Dockerfile
| | |-- package.json
| | |-- README.md
| |
| |-- /service-c
| | |-- /src
| | | |-- /controllers
| | | |-- /models
| | | |-- /services
| | | |-- /routes
| | | |-- /grpc
| | | | |-- service-c.proto
| | | | |-- service-c_grpc_pb.ts
| | | | |-- service-c_pb.ts
| | | |-- index.ts
| | |-- /config
| | | |-- database.ts
| | | |-- grpc-client.ts
| | | |-- redis.ts
| | | |-- kafka.ts
| | |-- /tests
| | | |-- /unit
| | | |-- /integration
| | |-- Dockerfile
| | |-- package.json
| | |-- README.md
|
|-- /gateway
| |-- /src
| | |-- /controllers
| | |-- /routes
| | |-- /services
| | |-- index.ts
| |-- /config
| | |-- grpc-clients.ts
| | |-- redis.ts
| | |-- kafka.ts
| |-- /tests
| | |-- /unit
| | |-- /integration
| |-- /proto
| | |-- service.proto
| |-- Dockerfile
| |-- package.json
| |-- README.md
|
|-- /infrastructure
| |-- /kubernetes
| | |-- service-a-deployment.yaml
| | |-- service-b-deployment.yaml
| | |-- service-c-deployment.yaml
| | |-- gateway-deployment.yaml
| | |-- redis-deployment.yaml
| | |-- kafka-deployment.yaml
| | |-- namespace.yaml
| | |-- configmap.yaml
| |-- /terraform
| | |-- main.tf
| | |-- variables.tf
| | |-- outputs.tf
|
|-- /scripts
| |-- build.sh
| |-- deploy.sh
| |-- test.sh
|
|-- .gitignore
|-- docker-compose.yml
|-- README.md

```

# coding convention for js

```
# function name - camel case
# class name - pascal case
```
