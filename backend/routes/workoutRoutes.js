//ROUTES
const express = require('express')
const router = express.Router()
const { getWorkouts,
        updateWorkout,
        setWorkout,
        deleteWorkout } = require('../controllers/workoutController')

// endpoints
router.route('/').get(getWorkouts).post(setWorkout)
router.route('/:id').delete(deleteWorkout).put(updateWorkout)

module.exports = router