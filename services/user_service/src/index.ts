import * as grpc from "@grpc/grpc-js";
// import { UserServiceService } from "./grpc/user_service_grpc_pb";
import { userServiceImpl, UserServiceService } from "./grpc/user_service_impl";

const server = new grpc.Server();
server.addService(UserServiceService, userServiceImpl);

const port = "0.0.0.0:50051";
server.bindAsync(port, grpc.ServerCredentials.createInsecure(), (error, boundPort) => {
    if (error) {
        console.error(`Server binding error: ${error.message}`);
        return;
    }
    console.log(`Server running at ${boundPort}`);
});
