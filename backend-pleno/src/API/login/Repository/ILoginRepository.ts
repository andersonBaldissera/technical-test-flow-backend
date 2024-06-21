import { UserBean } from "../../Users/Entity/User";

export interface ILoginRepository {
    login(id: string): Promise<UserBean>;
}