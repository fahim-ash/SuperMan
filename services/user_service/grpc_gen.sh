grpc_tools_node_protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
  --ts_out=src/grpc \
  --grpc_out=src/grpc \
  --proto_path=src/grpc \
    src/grpc/user_service.proto