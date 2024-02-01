const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();
const UserModel = require("../model/signupmodel");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

router.post('/signup', async (req, res) => {
    const { name, email, password, education, experience } = req.body;
    try {
        const match = await UserModel.findOne({ email });
        if (match) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = new UserModel({
            name,
            email,
            password,
            education,
            experience
        });

        await newUser.save();

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
//login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email })
        if (!user) {
            return res.json({ msg: "Invalid credintials" })
        }
        const isMatch = bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.json({ msg: "Invalid credintials" })
        }
        const payload = {
            user: {
                id: user._id, name: user.name, email: user.email
            }
        }
        jwt.sign(payload, process.env.JWT_KEY, { expiresIn: "1hr" }, (err, token) => {
            if (err) throw err;
            res.json({ token })
        })


    } catch (error) {
        return res.status(400).json({ msg: "Server error" })
    }
})
module.exports = router