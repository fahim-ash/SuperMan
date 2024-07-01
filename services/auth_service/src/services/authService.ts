import bcrypt from 'bcrypt';
import { promisify } from 'util';
import userServiceClient from '../config/grpc-client';
import { GetValidatedUserRequest, GetValidatedUserResponse } from '../grpc/user_service_pb';

class AuthService {
    private checkUser = promisify<GetValidatedUserRequest, GetValidatedUserResponse>(
        userServiceClient.validateUser,
    ).bind(userServiceClient);

    public async validateUser(email: string, password: string) {
        const request = new GetValidatedUserRequest();
        request.setEmail(email);

        try {
            const response: any = await this.checkUser(request);
            const user = response.getUser();

            if (!user) {
                throw new Error('User not found');
            }

            const isPasswordValid = await bcrypt.compare(password, user.getPassword());
            if (!isPasswordValid) {
                throw new Error('Invalid password');
            }

            return {
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
            };
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export default new AuthService();
