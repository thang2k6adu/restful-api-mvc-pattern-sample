import { getDB } from "../config/db.js"
import { ObjectId } from "mongodb"

const getUsers = async () => {
  const db = getDB()
  return db.collection('users').find().toArray()
}

const createUser = async (user) => {
  const db = getDB()
  return db.collection('users').insertOne(user) //không cần await nếu return trực tiếp 1 promise
}

const deleteUser = async (id) => {
  const db = getDB()
  return db.collection('users').deleteOne({_id: new ObjectId(id)})
}
// Đây là dịch vụ truy cập dữ liệu (Data Access Service)
const userServices = {
  getUsers, createUser, deleteUser
}

export default userServices