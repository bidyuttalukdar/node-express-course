const express = require('express');
const app = express();

require('dotenv').config();

const tasks = require('./routes/task');
const connectDB = require('./db/connect');

//Middleware 
const notFound = require('./middleware/notFound');
const errorHandlerMiddleware = require('./middleware/errorHandler');


// to parse the data
app.use(express.json());
app.use(express.static("./public"));


//Middleware
app.use(notFound)
app.use(errorHandlerMiddleware)
// Routes
app.use('/api/v1/tasks', tasks);

const PORT = process.env.PORT || 9000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    } catch (error) {
        console.log("Error", error)
    }
}

start()