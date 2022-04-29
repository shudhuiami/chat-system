import express from 'express'
const UsersRoutes = express.Router();
import UsersControllers from "../controllers/UsersControllers.js";
import {body, header} from 'express-validator';

//All User
UsersRoutes.get('/all', [header('token').notEmpty().withMessage('Invalid token')], async (request, response) => UsersControllers.GetAllUsers(request, response))

//All Request List
UsersRoutes.get('/connections/all', [header('token').notEmpty().withMessage('Invalid token')], async (request, response) => UsersControllers.GetConnectionRequest(request, response))

//Send Request
UsersRoutes.post('/request/sent', [header('token').notEmpty().withMessage('Invalid token'), body('receiver_id').notEmpty().withMessage('Receiver id required')], async (request, response) => UsersControllers.SendUserRequest(request, response))


//Get received request list
UsersRoutes.get('/request/received/all', [header('token').notEmpty().withMessage('Invalid token')], async (request, response) => UsersControllers.GetReceivedRequest(request, response))

//Get sent request list
UsersRoutes.get('/request/sent/all', [header('token').notEmpty().withMessage('Invalid token')], async (request, response) => UsersControllers.GetSentRequest(request, response))

//Connection request status
UsersRoutes.post('/request/status', [header('token').notEmpty().withMessage('Invalid token'), body('connection_id').notEmpty().withMessage('Connection id required'), body('status').notEmpty().withMessage('status required')], async (request, response) => UsersControllers.UpdateConnectionStatus(request, response))





export default UsersRoutes;
