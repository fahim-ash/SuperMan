// GENERATED CODE -- DO NOT EDIT!

"use strict";
var grpc = require("@grpc/grpc-js");
var src_grpc_user_service_pb = require("../user_service/user_service_pb.js")

function serialize_user_GetValidatedUserRequest(arg) {
    if (!(arg instanceof src_grpc_user_service_pb.GetValidatedUserRequest)) {
        throw new Error("Expected argument of type user.GetValidatedUserRequest");
    }
    return Buffer.from(arg.serializeBinary());
}

function deserialize_user_GetValidatedUserRequest(buffer_arg) {
    return src_grpc_user_service_pb.GetValidatedUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_GetValidatedUserResponse(arg) {
    if (!(arg instanceof src_grpc_user_service_pb.GetValidatedUserResponse)) {
        throw new Error("Expected argument of type user.GetValidatedUserResponse");
    }
    return Buffer.from(arg.serializeBinary());
}

function deserialize_user_GetValidatedUserResponse(buffer_arg) {
    return src_grpc_user_service_pb.GetValidatedUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

var UserServiceService = (exports.UserServiceService = {
    validateUser: {
        path: "/user.UserService/ValidateUser",
        requestStream: false,
        responseStream: false,
        requestType: src_grpc_user_service_pb.GetValidatedUserRequest,
        responseType: src_grpc_user_service_pb.GetValidatedUserResponse,
        requestSerialize: serialize_user_GetValidatedUserRequest,
        requestDeserialize: deserialize_user_GetValidatedUserRequest,
        responseSerialize: serialize_user_GetValidatedUserResponse,
        responseDeserialize: deserialize_user_GetValidatedUserResponse,
    },
});

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
