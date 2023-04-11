import { User } from "../../../models/Users";
import { UserRepository } from "../../../repositories/userRepository";

export class GetLoggedUserService {
  constructor(private userRepository: UserRepository) {}

  execute(username: string): User {
    return this.userRepository.getLoggedUser(username);
  }
}