import { UserRepository } from "../../../repositories/userRepository.js";
import { GetLoggedUserService } from "./getLoggedUserService.js";

const userRepository = UserRepository.getInstance();
export const getLoggedUserService = new GetLoggedUserService(userRepository);