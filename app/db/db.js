import { Sequelize } from "sequelize"
import {
  db_name,
  db_port,
  dialect,
  user_name,
  password,
  host,
  connection_string
} from "../config/index.js"

export default new Sequelize(connection_string, {
  dialect: dialect,
  host: host,
  port: db_port,
  logging: false,
  logQueryParameters:false
})
