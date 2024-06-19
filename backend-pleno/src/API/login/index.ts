import { LoginController } from "./Controller/LoginController";
import { LoginRepository } from "./Repository/LoginRepository";
import { LoginService } from "./Service/LoginService";

const loginRepository = new LoginRepository();

const loginService = new LoginService(loginRepository);

const loginController = new LoginController(loginService);

export { loginController }