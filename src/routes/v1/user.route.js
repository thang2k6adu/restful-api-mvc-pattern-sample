import express from 'express'
import { getUsers, createUser } from '../../controllers/user.controller.js'

const Router = express.Router()

Router.route('/')
  .get(getUsers)
  .post(createUser)

export const userRoutes = Router