import User from "./../models/model.js"
import sequlize from '../db.js'
const GET_USER =  async (req, res) => {
  try {
    const data = await sequlize.query('select first_name,last_name,picture from users')
    res.json(data)
  } catch (error) {
    console.log(error.message)
  }
}

const CREATE_USER = async (req, res) => {
  try {
    const body = req.body
    let { first_name, last_name, picture } = body
    await User.create({
      first_name,
      last_name,
      picture,
    })
    res.send("ok")
  } catch (error) {
    console.log(error.message)
  }
}
export { GET_USER,CREATE_USER }
