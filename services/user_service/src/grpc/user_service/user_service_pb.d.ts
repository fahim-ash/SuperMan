// package: user
// file: src/grpc/user_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetValidatedUserRequest extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): GetValidatedUserRequest;
    getPassword(): string;
    setPassword(value: string): GetValidatedUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetValidatedUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetValidatedUserRequest): GetValidatedUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetValidatedUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetValidatedUserRequest;
    static deserializeBinaryFromReader(message: GetValidatedUserRequest, reader: jspb.BinaryReader): GetValidatedUserRequest;
}

export namespace GetValidatedUserRequest {
    export type AsObject = {
        email: string,
        password: string,
    }
}

export class GetValidatedUserResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): User | undefined;
    setUser(value?: User): GetValidatedUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetValidatedUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetValidatedUserResponse): GetValidatedUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetValidatedUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetValidatedUserResponse;
    static deserializeBinaryFromReader(message: GetValidatedUserResponse, reader: jspb.BinaryReader): GetValidatedUserResponse;
}

export namespace GetValidatedUserResponse {
    export type AsObject = {
        user?: User.AsObject,
    }
}

export class User extends jspb.Message { 
    getId(): number;
    setId(value: number): User;
    getName(): string;
    setName(value: string): User;
    getEmail(): string;
    setEmail(value: string): User;
    getPassword(): string;
    setPassword(value: string): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        id: number,
        name: string,
        email: string,
        password: string,
    }
}
