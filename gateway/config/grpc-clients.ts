import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";

const GRPC_PORT = process.env.GRPC_PORT || 50051;
const GRPC_URL = process.env.GRPC_URL;
const PROTO_PATH = __dirname + "/SuperMan/gateway/proto/service.proto";
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});

const serviceProto = grpc.loadPackageDefinition(packageDefinition) as any;

const grpcClient = new serviceProto.service.GlobalService(
    `${GRPC_URL}: ${GRPC_PORT}`,
    grpc.credentials.createInsecure()
);

export { grpcClient };
