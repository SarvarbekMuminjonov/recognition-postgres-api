import { Sequelize } from "sequelize"
import {
  db_name,
  db_port,
  dialect,
  user_name,
  password,
  host,
} from "../config/index.js"

export default new Sequelize(db_name, user_name, password, {
  dialect: dialect,
  host: host,
  port: db_port,
  logging: false,
  logQueryParameters:false
})
