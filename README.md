# Initial micro service architecture for SuperMan

```
/SuperMan
|-- /services
| |-- /service-a
| | |-- /src
| | | |-- /controllers
| | | |-- /models
| | | |-- /services
| | | |-- /routes
| | | |-- /grpc
| | | | |-- service-a.proto
| | | | |-- service-a_grpc_pb.ts
| | | | |-- service-a_pb.ts
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
| |-- /service-b
| | |-- /src
| | | |-- /controllers
| | | |-- /models
| | | |-- /services
| | | |-- /routes
| | | |-- /grpc
| | | | |-- service-b.proto
| | | | |-- service-b_grpc_pb.ts
| | | | |-- service-b_pb.ts
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
