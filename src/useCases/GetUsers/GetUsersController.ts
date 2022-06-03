import { Request, Response } from "express";
import { GetUsersUseCase } from "./GetUsersUseCase";


export class GetUsersController {
  constructor(
    private getUsersUseCase: GetUsersUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const users = await this.getUsersUseCase.getAllUsers();     

      return response.status(201).json({ users, message: 'Users fetched with success', exec: true });
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }
}