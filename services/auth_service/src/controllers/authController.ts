import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { jwtConfig } from "../../config/jwtConfig";
import AuthService from "../services/authService";

class AuthController {
    public async login(req: Request, res: Response): Promise<Response> {
        try {
            const { email, password } = req.body;
            const user = await AuthService.validateUser(email, password);

            const token = jwt.sign(
                { userId: user.id, email: user.email }, // payload
                jwtConfig.secret, // secretkey
                {
                    expiresIn: jwtConfig.expiresIn,
                    algorithm: jwtConfig.algorithm,
                } // options
            );
            return res.status(200).json({ token });
        } catch (error) {
            return res.status(401).json({ error: error.message });
        }
    }
}
