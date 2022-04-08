import { Router } from "express"
import { CREATE_USER, GET_USER} from "./../db/controllers/UserController.js"
const router = Router()
import multer from "multer"
const upload = multer()
router.post("/saveUser", upload.any(),CREATE_USER )
router.get("/getFaces",GET_USER)

export default router
