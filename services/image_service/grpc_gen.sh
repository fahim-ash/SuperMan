#!/bin/bash
PROTO_DIR="./src/grpc"  # Directory where your .proto file is located
OUT_DIR="./src/grpc"  # Directory where you want to output generated files

# Generate gRPC code
grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:${OUT_DIR} \
  --grpc_out=${OUT_DIR} \
  --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
  ${PROTO_DIR}/user_service.proto

# Generate TypeScript definitions
grpc_tools_node_protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  --ts_out=${OUT_DIR} \
  ${PROTO_DIR}/user_service.proto

echo "gRPC and TypeScript files generated successfully!"
