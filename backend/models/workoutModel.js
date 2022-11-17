const mongoose = require('mongoose')

const workoutSchema = mongoose.Schema({
    //  user associated with the workout
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

    text: {
        type: String,
        require: [true, 'Please add a text value']
    }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Workout', workoutSchema)