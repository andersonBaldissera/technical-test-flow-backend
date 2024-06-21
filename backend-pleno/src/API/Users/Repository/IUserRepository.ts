import { UserBean } from "../Entity/User";

export interface IUserRepository {
    getById(id: string): Promise<UserBean | null>;
    findList(id: string): Promise<Array<UserBean> | null>;
    create(data: UserBean): Promise<UserBean>;
    delete(id: string): Promise<void>;
    update(data: UserBean): Promise<UserBean>;
}