import Router from "express-promise-router";
import { createTask, getAllTasks, getTask, updateTask, deleteTask } from "../controllers/tasks.controller.js";
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = Router();

router.get('/tasks', authMiddleware, getAllTasks);

router.get('/tasks/:id', authMiddleware, getTask);

router.post('/tasks', authMiddleware, createTask);

router.put('/tasks/:id', authMiddleware, updateTask);

router.delete('/tasks/:id', authMiddleware, deleteTask);

export default router;