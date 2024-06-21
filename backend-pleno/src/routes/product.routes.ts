import { Router } from "express";
import { productController } from "../API/Product";
import Authentication from "../middleware/auth"

const productRoutes = Router();
const auth = new Authentication();

productRoutes.get('/', auth.Auth, (req, res)=> {
    return productController.getList(req, res);
});

productRoutes.get('/:id', auth.Auth, (req, res)=> {
    return productController.getById(req, res);
});

productRoutes.post('/create', auth.Auth, (req, res)=> {
    return productController.create(req, res);
});

productRoutes.delete('/delete/:id', auth.Auth, (req, res)=> {
    return productController.delete(req, res);
});

productRoutes.patch('/update', auth.Auth, (req, res)=> {
    return productController.update(req, res);
});

export { productRoutes };