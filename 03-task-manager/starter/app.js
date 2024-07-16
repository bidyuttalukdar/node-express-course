const express = require('express');
const app = express();

require('dotenv').config();

const tasks = require('./routes/task');
const connectDB = require('./config/db');



//Middleware

// to get the data into JSON
app.use(express.json({ extended: false }));
app.use(express.static("./public"));


// Routes
app.use('/api/v1/tasks', tasks);

const PORT  = process.env.PORT || 9000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, ()=>{
            console.log(`Server is running on port ${PORT}`)
        })
    } catch (error) {
        console.log("Error", error)
    }
}

start()