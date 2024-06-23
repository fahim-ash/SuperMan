import bcrypt from "bcrypt";
import User from "../../../user_service/src/models/user"; // this will be imported from grpc
import { jwtConfig } from "../../config/jwtConfig";

class AuthService {
    public async validateUser(email: string, password: string) {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            throw new Error("User not found");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid password");
        }
        return user;
    }
}

export default new AuthService();
