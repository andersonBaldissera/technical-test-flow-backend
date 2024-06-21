import { ShoppingCartController } from "./Controller/ShoppingCartController";
import { ShoppingCartRepository } from "./Repository/ShoppingCartRepository";
import { ShoppingCartService } from "./Service/ShoppingCartService";

import { ProductRepository } from "../Product/Repository/ProductRepository";
import { ItemCartRepository } from "../Itens_Cart/Repository/ItemCartRepository";

const shoppingCartRepository = new ShoppingCartRepository();
const itemCartRepository= new ItemCartRepository();
const productRepository= new ProductRepository();

const shoppingCartService = new ShoppingCartService(shoppingCartRepository, itemCartRepository, productRepository);

const shoppingCartController = new ShoppingCartController(shoppingCartService);

export { shoppingCartController }