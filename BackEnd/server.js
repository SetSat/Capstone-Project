const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authcontroller = require('./controller/signup')
const PORT = process.env.PORT || 5000;
dotenv.config()

app.use(cors())
app.use(bodyParser.json())
app.use('/auth', authcontroller)








mongoose.connect(process.env.CONNECTION_URL)
    .then(() => console.log('Connected to Mongodb'))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
