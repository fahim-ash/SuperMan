// package: user
// file: user_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as user_service_pb from "./user_service_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    validateUser: IUserServiceService_IValidateUser;
}

interface IUserServiceService_IValidateUser extends grpc.MethodDefinition<user_service_pb.GetValidatedUserRequest, user_service_pb.GetValidatedUserResponse> {
    path: "/user.UserService/ValidateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_service_pb.GetValidatedUserRequest>;
    requestDeserialize: grpc.deserialize<user_service_pb.GetValidatedUserRequest>;
    responseSerialize: grpc.serialize<user_service_pb.GetValidatedUserResponse>;
    responseDeserialize: grpc.deserialize<user_service_pb.GetValidatedUserResponse>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer {
    validateUser: grpc.handleUnaryCall<user_service_pb.GetValidatedUserRequest, user_service_pb.GetValidatedUserResponse>;
}

export interface IUserServiceClient {
    validateUser(request: user_service_pb.GetValidatedUserRequest, callback: (error: grpc.ServiceError | null, response: user_service_pb.GetValidatedUserResponse) => void): grpc.ClientUnaryCall;
    validateUser(request: user_service_pb.GetValidatedUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_service_pb.GetValidatedUserResponse) => void): grpc.ClientUnaryCall;
    validateUser(request: user_service_pb.GetValidatedUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_service_pb.GetValidatedUserResponse) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public validateUser(request: user_service_pb.GetValidatedUserRequest, callback: (error: grpc.ServiceError | null, response: user_service_pb.GetValidatedUserResponse) => void): grpc.ClientUnaryCall;
    public validateUser(request: user_service_pb.GetValidatedUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_service_pb.GetValidatedUserResponse) => void): grpc.ClientUnaryCall;
    public validateUser(request: user_service_pb.GetValidatedUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_service_pb.GetValidatedUserResponse) => void): grpc.ClientUnaryCall;
}
