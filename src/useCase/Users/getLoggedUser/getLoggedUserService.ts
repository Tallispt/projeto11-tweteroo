import { User } from "../../../models/Users.js";
import { UserRepository } from "../../../repositories/userRepository.js";

export class GetLoggedUserService {
  constructor(private userRepository: UserRepository) {}

  execute(username: string): User {
    return this.userRepository.getLoggedUser(username);
  }
}