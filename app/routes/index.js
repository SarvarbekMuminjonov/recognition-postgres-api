import { Router } from "express";
import {getUser,saveUser} from './../db/controllers/UserController.js';
const router= Router()
import multer from 'multer'
const upload=multer()
router.post('/saveUser',upload.any(),async(req,res)=>{
    try {
        const body = req.body
        console.log(body,req.files)
        await saveUser(body.first_name,body.last_name,req.files[0].buffer)
        res.send('ok')
    } catch (error) {
        console.log(error.message)
    }
})
router.get('/getFaces',async (req,res)=>{
    const data = await getUser()
    res.send({data})
})

export default router