import express from 'express'

import { protect } from '../middleware/authMiddleware.js'
import {
	loginUser,
	registerUser,
	logoutUser,
	getUser,
	loginStatus,
	updateUser,
	changePassword,
	forgotPassword,
	resetPassword,
} from '../controllers/userController.js'

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/logout', logoutUser)
router.get('/getuser', protect, getUser)
router.get('/loggedin', loginStatus)
router.patch('/updateuser', protect, updateUser)
router.patch('/changepassword', protect, changePassword)
router.post('/forgotpassword', forgotPassword)
router.put('/resetpassword/:resetToken', resetPassword)

export default router
