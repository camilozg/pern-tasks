import axios from './axios';

export const getAllTasksRequest = () => axios.get('/tasks'); 

export const createTaskRequest = (task) => axios.post('/tasks', task); 
