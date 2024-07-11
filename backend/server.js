import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Connect to DB and start server
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server Running on port ${PORT}`)
		})
	})
	.catch((err) => console.log(err))
