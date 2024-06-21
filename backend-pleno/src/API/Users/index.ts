import { ShoppingCartRepository } from "../Shopping_cart/Repository/ShoppingCartRepository";
import { UserController } from "./Controller/UserController";
import { UserRepository } from "./Repository/UserRepository";
import { UserService } from "./Service/UserService";

const userRepository = new UserRepository();
const shoppingCartRepository = new ShoppingCartRepository();

const userService = new UserService(userRepository, shoppingCartRepository);

const userController = new UserController(userService);

export { userController }