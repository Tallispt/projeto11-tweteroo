import { Request, Response } from "express";
import { CreateUserService } from "./createUserService.js";

export default class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  handle(req: Request, res: Response): Response {
    const { username, avatar } = req.body;

    this.createUserService.execute({ username, avatar });

    return res.sendStatus(201);
  }
}