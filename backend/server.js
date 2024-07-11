import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

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

// Connect to DB and start server
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server Running on port ${PORT}`)
		})
	})
	.catch((err) => console.log(err))
