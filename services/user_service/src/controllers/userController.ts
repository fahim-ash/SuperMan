import { Request, Response } from "express";
import userService from "../services/userService";

class UserController {
    public async createUser(req: Request, res: Response): Promise<Response> {
        try {
            console.log(req.body); // check the request data
            const user = await userService.createUser(req.body);
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
