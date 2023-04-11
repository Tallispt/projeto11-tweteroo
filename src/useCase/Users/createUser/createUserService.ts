import { User } from "../../../models/Users";
import { UserRepository } from "../../../repositories/userRepository";

export class CreateUserService {
  constructor(private userRepository: UserRepository) {}

  execute({ username, avatar }: User): void {
    if (!username || !avatar) {
      throw new Error("All fields are mandatory!");
    }

    this.userRepository.create({ username, avatar });
  }
}