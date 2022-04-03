import express from 'express'
const AuthRoutes = express.Router();
import AuthController from "../controllers/AuthController.js";

//User Registration
AuthRoutes.post('/registration', async (request, response) => AuthController.Registration(request, response))

//user Login
AuthRoutes.post('/login', async (request, response) => AuthController.Login(request, response))


export default AuthRoutes;