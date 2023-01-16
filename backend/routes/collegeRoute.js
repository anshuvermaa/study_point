import express from 'express'
import cors from 'cors'
const router = express.Router()
import {collegeRoute} from '../controllers/cutOffController.js'



router.use(cors())
router.get('/college', collegeRoute)

export default router
