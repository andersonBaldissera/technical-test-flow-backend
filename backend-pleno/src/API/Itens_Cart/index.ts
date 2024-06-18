import { ItemCartController } from "./Controller/ItemCartController";
import { ItemCartRepository } from "./Repository/ItemCartRepository";
import { ItemCartService } from "./Service/ItemCartService";

const itemCartRepository = new ItemCartRepository();

const itemCartService = new ItemCartService(itemCartRepository);

const productController = new ItemCartController(itemCartService);

export { productController }