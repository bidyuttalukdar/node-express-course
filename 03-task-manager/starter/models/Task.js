const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Name is required'],
        trim: true,
        maxLength: 20,
    },
    completed: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Task', TaskSchema);