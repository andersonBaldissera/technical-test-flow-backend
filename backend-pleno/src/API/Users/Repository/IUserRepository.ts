import { User } from "../Entity/User";

export interface IUserRepository {
    findById(id: string): Promise<User | null>;
    findList(id: string): Promise<Array<User> | null>;
    create(data: User): Promise<User>;
    delete(id: string): Promise<void>;
    update(data: User): Promise<User>;
}