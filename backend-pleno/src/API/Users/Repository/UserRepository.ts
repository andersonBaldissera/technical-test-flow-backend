import { User } from "../Entity/User";
import { IUserRepository } from "./IUserRepository";

export class UserRepository implements IUserRepository {
    findById(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    
    findList(id: string): Promise<User[]> {
        throw new Error("Method not implemented.");
    }

    create(data: User): Promise<User> {
        throw new Error("Method not implemented.");
    }

    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    update(data: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
}