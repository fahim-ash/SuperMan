import { sendUnaryData, ServerUnaryCall, status, UntypedServiceImplementation } from '@grpc/grpc-js';
import { IUserServiceServer, UserServiceService } from './user_service_grpc_pb';
import { GetValidatedUserRequest, GetValidatedUserResponse, User as GrpcUser } from './user_service_pb';
import User from '../models/user';

class UserServiceImpl implements IUserServiceServer, UntypedServiceImplementation {
    [key: string]: any;
    public async validateUser(
        call: ServerUnaryCall<GetValidatedUserRequest, GetValidatedUserResponse>,
        callback: sendUnaryData<GetValidatedUserResponse>,
    ): Promise<void> {
        const email = call.request.getEmail();
        try {
            const user = await User.findOne({ where: { email } });
            if (!user) {
                return callback(
                    {
                        code: status.NOT_FOUND,
                        message: 'User not found',
                    },
                    null,
                );
            }

            const grpcUser = new GrpcUser();
            grpcUser.setId(user.id);
            grpcUser.setName(user.name);
            grpcUser.setEmail(user.email);
            grpcUser.setPassword(user.password);

            const response = new GetValidatedUserResponse();
            response.setUser(grpcUser);

            return callback(null, response);
        } catch (error) {
            return callback(
                {
                    code: status.INTERNAL,
                    message: 'Internal server error',
                },
                null,
            );
        }
    }
}

export { UserServiceImpl, UserServiceService };
