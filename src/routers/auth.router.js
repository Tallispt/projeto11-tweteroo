import { Router } from "express";
import authController from "../constollers/auth.controller";

const authRouter = Router();

authRouter.post('/sign-up', authController.signin)

export default authRouter;