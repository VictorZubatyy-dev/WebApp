const express = require('express')
var colors = require('colors');
const cors = require('cors')

require('dotenv').config({ path: '.env' });

//server port 
const port = process.env.PORT || 3000

const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/database')

connectDB()


// if need to process using a specific port use -  kill -9 {PID}
const app = express()

//logs objects®
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3004'
}))
app.use(express.urlencoded({extended: false}))
app.use('/api/workouts', require('./routes/workoutRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
//express errorhandler is overwritten
app.use(errorHandler)

app.listen(port, () => console.log('Server started on port ' + port))