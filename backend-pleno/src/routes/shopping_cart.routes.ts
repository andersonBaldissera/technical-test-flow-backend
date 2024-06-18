import { Router } from "express";
import { shoppingCartController } from "../API/Shopping_cart";

const shoppingCartRoutes = Router();

shoppingCartRoutes.get('/',(req, res)=> {
    return shoppingCartController.findList(req, res);
});

shoppingCartRoutes.get('/:id',(req, res)=> {
    return shoppingCartController.getById(req, res);
});

shoppingCartRoutes.post('/create',(req, res)=> {
    return shoppingCartController.create(req, res);
});

shoppingCartRoutes.delete('/delete/:id',(req, res)=> {
    return shoppingCartController.delete(req, res);
});

shoppingCartRoutes.patch('/update',(req, res)=> {
    return shoppingCartController.update(req, res);
});

export { shoppingCartRoutes };