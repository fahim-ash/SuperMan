import { Request, Response } from "express";
import { userService } from "../services/index";
import bcrypt from "bcrypt";

class UserController {
    public async createUser(req: Request, res: Response): Promise<Response> {
        try {
            console.log(req.body); // check the request data
            const { password } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await userService.createUser({
                ...req.body,
                hashedPassword,
            });
            return res.status(201).json(user);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    public async getUsers(req: Request, res: Response): Promise<Response> {
        try {
            // todo: get filters from forntend
            const users = await userService.getUser();
            return res.status(201).json(users);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export default new UserController();
