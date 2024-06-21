import { Router } from "express";
import { shoppingCartController } from "../API/Shopping_cart";
import Authentication from "../middleware/auth";

const shoppingCartRoutes = Router();
const auth = new Authentication();

shoppingCartRoutes.get('/getCart', auth.Auth, (req, res)=> {
    return shoppingCartController.getCart(req, res);
});

shoppingCartRoutes.post('/add', auth.Auth, (req, res)=> {
    return shoppingCartController.add(req, res);
});

shoppingCartRoutes.delete('/remove/:id', auth.Auth, (req, res)=> {
    return shoppingCartController.remove(req, res);
});

shoppingCartRoutes.post('/checkout', auth.Auth, (req, res)=> {
    return shoppingCartController.checkout(req, res);
});

export { shoppingCartRoutes };