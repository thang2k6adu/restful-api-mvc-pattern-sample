import { MongoClient } from 'mongodb'
import { env } from './env.js'

const client = new MongoClient(env.DB_URI)
let db

export const connectDB = async() => {
  try {
    await client.connect()
    db = client.db(env.DB_NAME)
    console.log('Connecting to MongoDB')
  } catch (error) {
    console.error('MongoDB connection error:', error)
    process.exit(0)
  }
}

export const getDB = () => {
  if (!db) {
    throw new Error('Must connect to Database first')
  }
  return db
}

export const closeDB = async () => {
  await client.close()
}