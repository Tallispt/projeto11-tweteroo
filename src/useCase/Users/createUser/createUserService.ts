import { User } from "../../../models/Users.js";
import { UserRepository } from "../../../repositories/userRepository.js";

export class CreateUserService {
  constructor(private userRepository: UserRepository) {}

  execute({ username, avatar }: User): void {
    if (!username || !avatar) {
      throw new Error("All fields are mandatory!");
    }

    this.userRepository.create({ username, avatar });
  }
}