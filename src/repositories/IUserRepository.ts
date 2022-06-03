import { User } from "../entities/User";

export interface IUserRepository {
  getAllUsers(): Promise<Array<User>>;
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<User>;
}