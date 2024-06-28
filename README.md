#### this file will be modified later in proper structure

## Initial micro service architecture for SuperMan

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

#### coding convention for js

```
# function name - camel case
# class name - pascal case
```

### jwt implementation

```
1. auth_service will generate the token first time
2. the common gateway will import the jwt from auth_service,
    and if the token is legit then pass the req to other services .
3. each service will have the secret key that was used to encrypt.
4. authentication and authorization will be handled from each service.

```

### list of port for services

```
1. user_service = 3000
2. auth_service = 3001
3. gateway = 3002

```

### chaotic sprint goals (c-complete, inc: idk when it will be done)

```
* create user_service - c
* connect postgres with user_service - c
* create auth_service - c
* create gateway - c
* jwt structure implement - c
* connect services through grpc - inc
* implement intial frontend for testing jwt - inc
* create serice registry and service discovery - inc
```
