import User from "./../models/model.js"

const getUser =()=> User.findAll()

const saveUser = (first_name, last_name, picture) =>
  User.create({
    first_name,
    last_name,
    picture,
  })
export { getUser, saveUser }
