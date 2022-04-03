import express from 'express'
const UsersRoutes = express.Router();
import UsersControllers from "../controllers/UsersControllers.js";

//All User
UsersRoutes.get('/all', async (request, response) => UsersControllers.GetAllUsers(request, response))

export default UsersRoutes;