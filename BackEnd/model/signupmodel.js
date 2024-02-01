const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const singupModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,

    },
    education: {
        type: String,
        required: true,
    },
    experience: {
        type: Number,
        required: true
    }
})

singupModel.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 12);
    next()
})

module.exports = mongoose.model('auth', singupModel)
