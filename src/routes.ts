import { Router } from "express"
import { createUserController } from "./useCases/CreateUser"
import { getUsersController } from "./useCases/GetUsers"

const router = Router()

router.post('/users', (req, res) => {
  return createUserController.handle(req, res)
})

router.get('/users', (req, res) => {
  return getUsersController.handle(req, res)
})

export { router }