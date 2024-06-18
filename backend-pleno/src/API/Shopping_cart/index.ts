import { ShoppingCartController } from "./Controller/ShoppingCartController";
import { ShoppingCartRepository } from "./Repository/ShoppingCartRepository";
import { ShoppingCartService } from "./Service/ShoppingCartService";

const shoppingCartRepository = new ShoppingCartRepository();

const shoppingCartService = new ShoppingCartService(shoppingCartRepository);

const shoppingCartController = new ShoppingCartController(shoppingCartService);

export { shoppingCartController }