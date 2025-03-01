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
    const result = await userServices.createUser(req.body)
    res.status(201).json(result)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

export const deleteUser = async(req, res) => {
  try {
    const result = await userServices.deleteUser(req.params.userId)
    res.status(200).json(result.deleteCount)
  } catch (error) {
    
  }
}