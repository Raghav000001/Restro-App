import express from "express";
import {signIn, signUp} from "../controllers/auth.controller.js";

const router = express.Router();
const AuthRoute=router

AuthRoute.post('/signup',signUp);
AuthRoute.post('/login',signIn);



export default AuthRoute;
