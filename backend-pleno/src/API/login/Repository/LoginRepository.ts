import { prismaClient } from "../../../config/prismaClient";
import { UserBean } from "../../Users/Entity/User";
import { ILoginRepository } from "./ILoginRepository";


export class LoginRepository implements ILoginRepository {
    async login(email: string): Promise<UserBean> {
        const user: UserBean = await prismaClient.user.findUnique({
            where: { email: email }
        })
 
        return Promise.resolve(user); 
        
    }

    
}