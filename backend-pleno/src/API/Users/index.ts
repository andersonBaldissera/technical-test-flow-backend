import { UserController } from "./Controller/UserController";
import { UserRepository } from "./Repository/UserRepository";
import { UserService } from "./Service/UserService";

const userRepository = new UserRepository();

const userService = new UserService(userRepository);

const userController = new UserController(userService);

export { userController }