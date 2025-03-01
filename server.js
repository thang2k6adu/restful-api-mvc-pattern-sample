import express from 'express'
import cors from 'cors'
import exithook from 'async-exit-hook'
import { connectDB, closeDB } from './src/config/db.js'
import { env } from './src/config/env.js'
import { APIs_V1 } from './src/routes/v1/index.js'


const START_SERVER = () => {
  const app = express()
  const PORT = env.PORT

  // Middleware
  app.use(cors())
  app.use(express.json())

  // Routes
  app.use('/v1', APIs_V1)

  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
  })

  //Thực hiện tác vụ cleanup trước khi dừng server, tránh rò rỉ tài nguyên
  exithook(() => {
    console.log('Server is shutting down')
    closeDB()
    console.log('Disconnected from Cloud Atlas')
  })
}

  ; (async () => {
    try {
      console.log('Connecting to MongoDB Cloud Atlas')
      await connectDB()
      console.log('Connected')

      // Kết nối xong với DB rồi mới start server
      START_SERVER()
    } catch (error) {
      console.error(error)
      process.exit(0)
    }
  })()