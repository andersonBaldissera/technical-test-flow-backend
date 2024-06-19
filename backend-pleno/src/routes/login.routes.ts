import { Router } from "express";
import { loginController } from "../API/login";

const loginRoutes = Router();

loginRoutes.get('/',(req, res) => {
    return loginController.login(req, res);
});

export { loginRoutes };