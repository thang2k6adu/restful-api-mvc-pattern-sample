import userServices from "../services/user.service.js"

export const getUsers = async (req, res) => {
  try {
    const users = await userServices.getUsers()
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const createUser = async (req, res) => {
  try {
    const { name, email } = req.body
    const user = {name, email, createdAt: new Date()}
    const result = await userServices.createUser(user)
    res.status(201).json(result)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}