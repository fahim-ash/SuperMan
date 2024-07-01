#### this file will be modified later in proper structure

## Initial micro service architecture for SuperMan

see project structure live here:

https://fahim-ash.github.io/SuperMan_Project_Structure/

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
3. plan changed: api gaetway will check for the authenticated user.
4. for the time being other servies won't talk to auth_service.

```

### list of port for services

```
1. user_service = 3000
2. auth_service = 3001
3. gateway = 3002

```

### grpc setup

```
1. currently all the proto & generated files will be in same folder
2. each service will also have a grpc folder
3. individual service will import only necessary grpc files
4. may be a git repo will be later used for this purpose
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
* have to think of a better way to use shared gprc(maybe a git repo) - inc
```
