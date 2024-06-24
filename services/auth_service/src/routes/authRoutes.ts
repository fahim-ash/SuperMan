import { Router } from 'express';
import AuthController from '../controllers/authController';

const router = Router();

router.post('/login', AuthController.loginUser);

export default router;