const express = require('express');
// Inntializing router
const router = express.Router();

const {
    getTasks,
    getTaskById,
    deleteTask,
    updateTask,
    createTask
} = require('../controllers/task');

// setting up routes

router.route('/').get(getTasks).post(createTask);
router.route('/:id').get(getTaskById).delete(deleteTask).put(updateTask);

module.exports = router