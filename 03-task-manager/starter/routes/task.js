const express = require('express');
// Inntializing router
const router = express.Router();

import {
    getTasks,
    getTaskById,
    deleteTask,
    updateTask,
    createTask
} from '../controllers/task';

// setting up routes

router.route('/').get(getTasks).post(createTask);
router.route('/:id').get(getTaskById).delete(deleteTask).put(updateTask);