import express from 'express'
import cors from 'cors'
const router = express.Router()
import {cutOffRoute} from '../controllers/cutOffController.js'


// router.use(cors())
// router.route('/').post(registerUser).get(protect, admin, getUsers)
router.use(cors())
router.post('/colleges', cutOffRoute)

export default router
