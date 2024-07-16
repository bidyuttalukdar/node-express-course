import Task from "../models/task";


const createTask = async (req, res) => {
    try {
        const tasks = await Task.create(req.body);
        if (!tasks) {
            return res.status(400).json({ status: "error", message: "Unable to create a new task" })
        }

        return res.status(201).json({ status: "success", data: tasks })
    } catch (error) {
        return res.status(500).json({ status: "error", message: error.message })
    }
}

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        return res.status(200).json({ status: "success", data: tasks })
    } catch (error) {
        return res.status(500).json({ status: "error", message: error.message })
    }
}

const getTaskById = async (req, res) => {
    try {
        const { id: taskId } = req.params;
        const task = await Task.find({ _id: taskId });

        if (!task) {
            return res.status(404).json({ status: "success", message: `No task is represent with id ${taskId}` })
        }

        return res.status(200).json({ status: "success", data: task })
    } catch (error) {
        return res.status(500).json({ status: "error", message: error.message })
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id: taskId } = req.params;
        const task = await Task.findByIdAndDelete({ _id: taskId });

        if (!task) {
            return res.status(404).json({ status: "success", message: `No task is represent with id ${taskId}` })
        }

        return res.status(200).json({ status: "success", data: tasks })
    } catch (error) {
        return res.status(500).json({ status: "error", message: error.message })
    }
}

const updateTask = async (req, res) => {
    try {
        const { id: taskId } = req.params;
        const task = await Task.findByIdAndUpdate({ _id: taskId }, req.body, { new: true, runValidators: true }); // overwrite:true for put method

        if (!task) {
            return res.status(404).json({ status: "success", message: `No task is represent with id ${taskId}` })
        }

        return res.status(200).json({ status: "success", data: tasks })
    } catch (error) {
        return res.status(500).json({ status: "error", message: error.message })
    }
}

module.exports = {
    getTasks,
    getTaskById,
    deleteTask,
    updateTask,
    createTask
}