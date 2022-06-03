import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

export class PostgresUsersRepository implements IUserRepository {
  private users: User[] = [];

  async getAllUsers(): Promise<Array<User>> {
    
    return this.users;
  }

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find(user => user.email === email)

    return user;
  }

  async save(user: User): Promise<User> {
    this.users.push(user)

    return user;
  }
}