const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authcontroller = require('./controller/signup')
const requirementcontroller = require('./controller/requirement')
const capsotnesubmit = require('./controller/capstonesub')
const leave = require('./controller/leavecontroller')
const query = require('./controller/querycontroller')
const leaderboard = require('./controller/leadercontroller')
const portfolio = require('./controller/portfoliocont')
const PORT = process.env.PORT || 5000;
dotenv.config()

app.use(cors())
app.use(bodyParser.json())
app.use('/auth', authcontroller)
app.use('/req', requirementcontroller)
app.use('/capstone', capsotnesubmit)
app.use('/leave', leave)
app.use('/queries', query)
app.use('/leader', leaderboard)
app.use('/port', portfolio)

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => console.log('Connected to Mongodb'))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
