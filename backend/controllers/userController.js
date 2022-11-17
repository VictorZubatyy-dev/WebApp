const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
// @desc Register user
// @route POST /api/users/
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error('Ensure all fields have been completed')
    }

    // Check if the user exists
    const userExists = await User.findOne({email})

    if (userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    // Hashing the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Creating the user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email, 
            token: generateToken(user._id)
        })
    }
    else{
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc Authenticate a user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async(req, res) => {
    const { email, password } = req.body
    // Check user email exists
    const userExists = await User.findOne({email})

    if (userExists && (await bcrypt.compare(password, userExists.password))){
        res.status(201).json({
            _id: userExists.id,
            name: userExists.name,
            email: userExists.email,
            token: generateToken(userExists._id)
        })
    }
    else{
        res.status(400)
        throw new Error('Invalid credentials')
    }
    res.json({message: 'Login User'})

})

// @desc Get users data
// @route GET /api/users/me
// @access Private
const getMe = asyncHandler(async(req, res) => {
    const {_id, name, email} = await User.findById(req.user.id)

    res.status(200).json({
            _id,
            name,
            email,
        })
})

// Generate JsonWebToken
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {expiresIn: '30d',})
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}