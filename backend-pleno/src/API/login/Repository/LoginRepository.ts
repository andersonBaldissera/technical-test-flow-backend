import { User } from "../../Users/Entity/User";
import { ILoginRepository } from "./ILoginRepository";


export class LoginRepository implements ILoginRepository {
    login(id: string): Promise<any> {
    /*    const user: User = await prismaClient.user.findUnique({
            where: { email: email }
        })
 
        if (user) {
            return Promise.resolve(user);
        } else {
            return null
        }
            */
           return Promise.resolve(null)
    }

    
}