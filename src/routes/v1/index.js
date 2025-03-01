import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { userRoutes } from './user.route.js'

const Router = express.Router()

Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({message: 'API V1 is ready in use'})
})

// User routes
Router.use('/users', userRoutes)

export const APIs_V1 = Router