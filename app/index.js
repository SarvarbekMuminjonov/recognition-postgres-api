import express from "express"
const app = express()
import bodypareser from "body-parser"
import router from "./routes/index.js"
import { port } from "./config/index.js"
const PORT = process.env.PORT || port

app.use(express.json())
// app.use(bodypareser.json())
app.use("/", router)

app.listen(PORT, () => console.log(`Application started on Port ${PORT}.`))
