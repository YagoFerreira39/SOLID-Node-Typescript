import { IUserRepository } from "../../repositories/IUserRepository"

export class GetUsersUseCase {  
  constructor(
    private usersRepository: IUserRepository,
  ) {};

  async getAllUsers() {
    const allUsers = await this.usersRepository.getAllUsers()

    if(!allUsers) {
      throw new Error('Something went wrong!')
    }

    return allUsers;
  }
}