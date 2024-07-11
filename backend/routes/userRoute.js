import express from 'express'

import { registerUser } from '../controllers/userController.js'

const router = express.Router()

export default router.post('/register', registerUser)
