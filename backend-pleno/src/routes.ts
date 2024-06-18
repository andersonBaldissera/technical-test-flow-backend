import { Router } from "express";
import { userRoutes } from "./routes/user.routes";
import { productRoutes } from "./routes/product.routes";
import { shoppingCartRoutes } from "./routes/shopping_cart.routes";

const router = Router();

router.use('/v1/user', userRoutes)
router.use('/v1/product', productRoutes)
router.use('/v1/shoppingCart', shoppingCartRoutes)

export { router }