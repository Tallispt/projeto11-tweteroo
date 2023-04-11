import { Router } from "express";
import { createUserController } from "../useCase/Users/createUser/index.js";

const authRouter = Router();

authRouter.post("/sign-up", (req, res) =>
  createUserController.handle(req, res)
);

export default authRouter;