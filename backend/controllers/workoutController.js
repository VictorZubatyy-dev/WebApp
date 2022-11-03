const asyncHandler = require('express-async-handler')

const Workout = require('../models/workoutModel')

// @desc Get workouts
// @route GET /api/workouts/
// @access Private
const getWorkouts = asyncHandler(async (req, res) =>{
    const workouts = await Workout.find()
    res.status(200).json(workouts)
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

    const workout = await Workout.create({
        text: req.body.text
    })

    res.status(200).json(workout)
})

// @desc Update workouts
// @route PUT /api/workouts/:id
// @access Private
const updateWorkout = asyncHandler(async (req, res) =>{
    const workout = await Workout.findById(req.params.id)

    if (!workout){
        res.status(400)
        throw new Error("Workout not found")
    }

    const updatedWorkout = await Workout.findByIdAndUpdate(req.params.id, req.body, {
        // returns object in updated form
        new: true,
    })
    res.status(200).json(updatedWorkout)
})

// @desc Delete workouts
// @route DELETE /api/workouts/:id
// @access Private
const deleteWorkout = asyncHandler(async (req, res) =>{
    const workout = await Workout.findById(req.params.id)

    if (!workout){
        res.status(400)
        throw new Error("Workout not found")
    }
    
    await workout.remove()
    // const deletedWorkout = await Workout.findByIdAndRemove(req.params.id)
        // new: true,

    res.status(200).json({ id: req.params.id})
})

module.exports = {
    getWorkouts,
    setWorkout,
    updateWorkout,
    deleteWorkout
}