const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv').config()

const app = express()
const PORT = 5000
const MONGO_URI =
  'mongodb+srv://smart:admin@cluster0.uu2q5fd.mongodb.net/pinvent?retryWrites=true&w=majority&appName=Cluster0'

// Connect to db and start server
mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  })
  .catch((err) => console.log(err))
