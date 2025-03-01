import express from 'express'
import { getUsers, createUser, deleteUser } from '../../controllers/user.controller.js'
import { userSchema } from '../../validation/user.validation.js'
import { validate } from '../../middleware/validate.middleware.js'

const Router = express.Router()

Router.route('/')
  .get(getUsers)
  .post(validate(userSchema), createUser)

Router.delete('/:userId', deleteUser)

export const userRoutes = Router