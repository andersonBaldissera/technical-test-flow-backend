import { Router } from "express";
import { userController } from "../API/Users"

const userRoutes = Router();

userRoutes.get('/',(req, res)=> {
    return userController.findList(req, res);
});

userRoutes.get('/:id',(req, res)=> {
    return userController.findById(req, res);
});

userRoutes.post('/create',(req, res)=> {
    return userController.create(req, res);
});

userRoutes.delete('/delete/:id',(req, res)=> {
    return userController.delete(req, res);
});

userRoutes.patch('/update',(req, res)=> {
    return userController.update(req, res);
});

export { userRoutes }