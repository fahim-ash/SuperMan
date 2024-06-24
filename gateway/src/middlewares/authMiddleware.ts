import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { jwtConfig } from "../../config/jwtConfig";

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    jwt.verify(token, jwtConfig.secret, (err: any, decoded: any) => {
        if (err) {
            return res.status(403).json({ error: "Invalid Token" });
        }
        if ("user" in req) {
            req["user"] = decoded;
        }
        next();
    });
};

export default authenticateToken;
