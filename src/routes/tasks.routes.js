import Router from "express-promise-router";
import { createTask, getAllTasks, getTask, updateTask, deleteTask } from "../controllers/tasks.controller.js";
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { validateSchema } from '../middlewares/validate.middleware.js';
import { createTaskSchema, updateTaskSchema } from '../schemas/task.schema.js';

const router = Router();

router.get('/tasks', authMiddleware, getAllTasks);

router.get('/tasks/:id', authMiddleware, getTask);

router.post('/tasks', authMiddleware, validateSchema(createTaskSchema), createTask);

router.put('/tasks/:id', authMiddleware, validateSchema(updateTaskSchema), updateTask);

router.delete('/tasks/:id', authMiddleware, deleteTask);

export default router;