import bcrypt from "bcrypt";
import { promisify } from "util";
import * as grpc from "@grpc/grpc-js";
import { UserServiceClient } from "../grpc/user_service/user_service_grpc_pb";
import { GetValidatedUserRequest, GetValidatedUserResponse } from "../grpc/user_service/user_service_pb";

class AuthService {
    private client = new UserServiceClient("localhost:50051", grpc.credentials.createInsecure());
    private checkUser = promisify<GetValidatedUserRequest, GetValidatedUserResponse>(
        this.client.validateUser.bind(this.client),
    );

    async validateUser(email: string, password: string) {
        const request = new GetValidatedUserRequest();
        request.setEmail(email);

        try {
            const response: GetValidatedUserResponse = await this.checkUser(request);
            const user = response.getUser();

            if (!user) {
                throw new Error("User not found");
            }

            const isPasswordValid = await bcrypt.compare(password, user.getPassword());
            if (!isPasswordValid) {
                throw new Error("Invalid password");
            }

            return {
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
            };
        } catch (error) {
            console.error("Error validating user:", error);
            throw new Error("Authentication failed");
        }
    }
}

export default new AuthService();
