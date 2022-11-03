const express = require('express')
var colors = require('colors');
require('dotenv').config({ path: '.env' });

//server port 
const port = process.env.PORT || 3000

const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/database')

connectDB()

const app = express()

//logs objects
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/workouts', require('./routes/workoutRoutes'))
//express errorhandler is overwritten
app.use(errorHandler)

app.listen(port, () => console.log('Server started on port ' + port))