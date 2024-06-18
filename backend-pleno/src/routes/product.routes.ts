import { Router } from "express";
import { productController } from "../API/Product";

const productRoutes = Router();

productRoutes.get('/',(req, res)=> {
    return productController.findList(req, res);
});

export { productRoutes };