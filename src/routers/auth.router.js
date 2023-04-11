import { Router } from "express";
import AuthController from "../constollers/auth.controller.js";

const authRouter = Router();

authRouter.post('/sign-up', AuthController.signin)

export default authRouter;