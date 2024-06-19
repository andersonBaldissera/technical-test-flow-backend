import { Router } from "express";
import { categoriesController } from "../API/Categories";
import Authentication from "../middleware/auth";

const categoriesRoutes = Router();
const auth = new Authentication();

categoriesRoutes.get('/', auth.Auth, (req, res)=> {
    return categoriesController.findList(req, res);
});

categoriesRoutes.get('/:id', auth.Auth, (req, res)=> {
    return categoriesController.getById(req, res);
});

categoriesRoutes.post('/create', auth.Auth, (req, res)=> {
    return categoriesController.create(req, res);
});

categoriesRoutes.delete('/delete/:id', auth.Auth, (req, res)=> {
    return categoriesController.delete(req, res);
});

categoriesRoutes.patch('/update', auth.Auth, (req, res)=> {
    return categoriesController.update(req, res);
});

export { categoriesRoutes };