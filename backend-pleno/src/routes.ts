import { Router } from "express";
import { userRoutes } from "./routes/user.routes";
import { productRoutes } from "./routes/product.routes";
import { shoppingCartRoutes } from "./routes/shopping_cart.routes";
import { categoriesRoutes } from "./routes/categories.routes";
import { loginRoutes } from "./routes/login.routes";

const router = Router();

router.use('/v1/user', userRoutes)
router.use('/v1/product', productRoutes)
router.use('/v1/shoppingCart', shoppingCartRoutes)
router.use('/v1/categories', categoriesRoutes)

router.use('/v1/login', loginRoutes);

export { router }