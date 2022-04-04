import dotenv from "dotenv"
dotenv.config()
const db_name = process.env.db_name,
  user_name = process.env.user_name,
  password = process.env.password,
  dialect = process.env.dialect,
  host = process.env.host,
  db_port = process.env.db_port,
  port =process.env.port

export  {
  db_name,
  user_name,
  password,
  dialect,
  host,
  db_port,
  port
}
