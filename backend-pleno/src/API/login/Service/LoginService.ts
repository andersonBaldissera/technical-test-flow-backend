import { HttpError } from "../../../Utils/ErrorHandler";
import { User } from "../../Users/Entity/User";
import * as jwt from "jsonwebtoken"
import { ILoginRepository } from "../Repository/ILoginRepository";

export class LoginService {
    constructor(
        private loginRepository: ILoginRepository
    ) { }

    async login(email: string, password: string): Promise<{user: User, token: string}> {
        try {
            const user: User = await this.loginRepository.login(email);

            if(user !== null && user.password === password) {
                const secret: any = process.env.SECRET
                const token = jwt.sign({ id: user.id }, secret, { expiresIn: "6h" })

                delete user.password
                return { user, token: token }
        } else {
            throw new HttpError({
                message: "E-mail ou senha incorreto, ou usuário não existe! ",
                statusCode: 404
            })
        }
        } catch (error) {
            throw new error
        }
        
    }
}