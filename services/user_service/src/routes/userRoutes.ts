import { Router } from "express";
import userController from "../controllers/userController";

let router = Router();

router.post("/", userController.createUser);
router.get("/", userController.getUsers);

export default router;
