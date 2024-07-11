import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

import userRoute from './routes/userRoute.js'
import { errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Home routes
app.get('/', (req, res) => {
	res.send('Home Page')
})

// Error middleware
app.use(errorHandler)

// Routes Middleware
app.use('/api/users', userRoute)

// Connect to DB and start server
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server Running on port ${PORT}`)
		})
	})
	.catch((err) => console.log(err))
