import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { GetUsersController } from "./GetUsersController";
import { GetUsersUseCase } from "./GetUsersUseCase";

const postgresUsersRepository = new PostgresUsersRepository()

const getUsersUseCase = new GetUsersUseCase(
  postgresUsersRepository
)

const getUsersController = new GetUsersController(
  getUsersUseCase
)

export { getUsersUseCase, getUsersController}