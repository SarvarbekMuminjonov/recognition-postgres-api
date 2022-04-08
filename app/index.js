import express from "express"
const app = express()
import bodypareser from "body-parser"
import router from "./routes/index.js"
import { port } from "./config/index.js"


app.use(bodypareser.json())
app.use("/", router)

app.listen(process.env.PORT || port, () => console.log(`Application started on Port ${port}.`))
