import { User } from "../../Users/Entity/User";

export interface ILoginRepository {
    login(id: string): Promise<User>;
}