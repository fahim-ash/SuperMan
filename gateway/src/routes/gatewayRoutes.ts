import { Router, Request, Response } from "express";
import authenticateToken from "../../middlewares/authMiddleware";
import axios from "axios";

const router = Router();
router.use(authenticateToken);

const userServiceUrl = process.env.USER_SERVICE_URL as string;

// have to think of a better way to list all the services url
// cz as the number of services incerase, this will get messy

router.get("/users", async (req: Request, res: Response) => {
    try {
        const response = await axios.get(userServiceUrl, {
            headers: {
                Authorization: req.headers["authorization"],
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response ? error.response.status : 500).json({
            error: error.message,
        });
    }
});

export default router;
