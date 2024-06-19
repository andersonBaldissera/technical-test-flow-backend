import { Response, Request } from "express";
import { LoginService } from "../Service/LoginService";
import { HttpError } from "../../../Utils/ErrorHandler";

export class LoginController {
    constructor(
        public loginService: LoginService
    ) {}

    async login(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body

        try {
            const { user, token } = await this.loginService.login(email, password)

            return res.status(200).json({
                message: `Bem-Vindo a FlowLabs, ${ user.name }`,
                user,
                token
            })

        } catch (error) {
            return res.status(400).json(error);
        }
    }
}