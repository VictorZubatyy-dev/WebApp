const asyncHandler = require('express-async-handler')


// @desc Get workouts
// @route GET /api/workouts/
// @access Private
const getWorkouts = asyncHandler(async (req, res) =>{
    res.status(200).json({message: 'Get workout'})
})

// @desc Set workouts
// @route POST /api/workouts/
// @access Private
const setWorkout = asyncHandler(async (req, res) =>{
    if(!req.body.text){
        //Client error
        res.status(400)
        throw new Error("Please add some text")
    }
    res.status(200).json({message: `Create workout`})
})

// @desc Update workouts
// @route PUT /api/workouts/:id
// @access Private
const updateWorkout = asyncHandler(async (req, res) =>{
    res.status(200).json({message: `Update workout ${req.params.id}`})
})

// @desc Delete workouts
// @route DELETE /api/workouts/:id
// @access Private
const deleteWorkout = asyncHandler(async (req, res) =>{
    res.status(200).json({message: `Delete workout ${req.params.id}`})
})

module.exports = {
    getWorkouts,
    setWorkout,
    updateWorkout,
    deleteWorkout
}