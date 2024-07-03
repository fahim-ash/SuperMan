// package: user
// file: src/grpc/user_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as src_grpc_user_service_pb from "../../src/grpc/user_service_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    validateUser: IUserServiceService_IValidateUser;
}

interface IUserServiceService_IValidateUser
    extends grpc.MethodDefinition<
        src_grpc_user_service_pb.GetValidatedUserRequest,
        src_grpc_user_service_pb.GetValidatedUserResponse
    > {
    path: "/user.UserService/ValidateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_grpc_user_service_pb.GetValidatedUserRequest>;
    requestDeserialize: grpc.deserialize<src_grpc_user_service_pb.GetValidatedUserRequest>;
    responseSerialize: grpc.serialize<src_grpc_user_service_pb.GetValidatedUserResponse>;
    responseDeserialize: grpc.deserialize<src_grpc_user_service_pb.GetValidatedUserResponse>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer {
    validateUser: grpc.handleUnaryCall<src_grpc_user_service_pb.GetValidatedUserRequest, src_grpc_user_service_pb.GetValidatedUserResponse>;
}

export interface IUserServiceClient {
    validateUser(request: src_grpc_user_service_pb.GetValidatedUserRequest, callback: (error: grpc.ServiceError | null, response: src_grpc_user_service_pb.GetValidatedUserResponse) => void): grpc.ClientUnaryCall;
    validateUser(request: src_grpc_user_service_pb.GetValidatedUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_grpc_user_service_pb.GetValidatedUserResponse) => void): grpc.ClientUnaryCall;
    validateUser(request: src_grpc_user_service_pb.GetValidatedUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_grpc_user_service_pb.GetValidatedUserResponse) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public validateUser(request: src_grpc_user_service_pb.GetValidatedUserRequest, callback: (error: grpc.ServiceError | null, response: src_grpc_user_service_pb.GetValidatedUserResponse) => void): grpc.ClientUnaryCall;
    public validateUser(request: src_grpc_user_service_pb.GetValidatedUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_grpc_user_service_pb.GetValidatedUserResponse) => void): grpc.ClientUnaryCall;
    public validateUser(request: src_grpc_user_service_pb.GetValidatedUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_grpc_user_service_pb.GetValidatedUserResponse) => void): grpc.ClientUnaryCall;
}
