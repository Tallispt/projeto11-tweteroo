import { UserRepository } from "../../../repositories/userRepository.js";
import CreateUserController from "./createUserController.js";
import { CreateUserService } from "./createUserService.js";

const userRepository = UserRepository.getInstance();
const createUserService = new CreateUserService(userRepository);
export const createUserController = new CreateUserController(createUserService);