const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv').config()

const userRoute = require('./routes/userRoute')

const app = express()
const PORT = 5000

// Connect to db and start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  })
  .catch((err) => console.log(err))

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Middleware for routes
app.use('/api/users', userRoute)

// Routes
app.get('/', (req, res) => {
  res.send('Home Page')
})
