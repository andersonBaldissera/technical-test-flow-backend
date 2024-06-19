import { Router } from "express";
import { shoppingCartController } from "../API/Shopping_cart";
import Authentication from "../middleware/auth";

const shoppingCartRoutes = Router();
const auth = new Authentication();

shoppingCartRoutes.get('/', auth.Auth, (req, res)=> {
    return shoppingCartController.findList(req, res);
});

shoppingCartRoutes.get('/:id', auth.Auth, (req, res)=> {
    return shoppingCartController.getById(req, res);
});

shoppingCartRoutes.post('/create', auth.Auth, (req, res)=> {
    return shoppingCartController.create(req, res);
});

shoppingCartRoutes.delete('/delete/:id', auth.Auth, (req, res)=> {
    return shoppingCartController.delete(req, res);
});

shoppingCartRoutes.patch('/update', auth.Auth, (req, res)=> {
    return shoppingCartController.update(req, res);
});

export { shoppingCartRoutes };