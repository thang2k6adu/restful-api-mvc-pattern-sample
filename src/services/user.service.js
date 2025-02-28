import { getDB } from "../config/db.js"

const getUsers = async () => {
  const db = getDB()
  return db.collection('users').find().toArray()
}

const createUser = async (user) => {
  const db = getDB()
  return db.collection('users').insertOne(user) //không cần await nếu return trực tiếp 1 promise
}

// Đây là dịch vụ truy cập dữ liệu (Data Access Service)
const userServices = {
  getUsers, createUser
}

export default userServices