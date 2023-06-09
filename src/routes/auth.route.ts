import { Router } from "express";
import postLogin from "../controllers/auth.controller";
import { addUser } from "../controllers/user.controller";
import { validateScheme } from "~/middlewares";
import { UserSchema } from "~/schemas";

const routeAuth = Router();

routeAuth.post("/login", postLogin).post("/signup", addUser);

export default routeAuth;
