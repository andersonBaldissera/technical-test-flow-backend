import { HttpError } from "../../../Utils/ErrorHandler";
import { ICreateUserDTO } from "../DTO/CreateUserDTO";
import { User } from "../Entity/User";
import { IUserRepository } from "../Repository/IUserRepository";

export class UserService{
    constructor(
        private userRepository: IUserRepository,
    ) { }

    async findById(id: string): Promise<User> {
        const user = await this.userRepository.findById(id);

        return user;
    }

    async findList(id: string): Promise<User[]> {
        const user = await this.userRepository.findList(id);

        return user;
    }

    async create(data: ICreateUserDTO): Promise<User> {
        const newUser = new User(data);
        const user = await this.userRepository.create(newUser);

        return user;
    }

    async delete(id: string): Promise<void> {
        const hasEmployee = await this.userRepository.findById(id);

        if(!hasEmployee) {
            throw new HttpError({
                message: "Usuário não encontrado ou não existe",
                statusCode: 404
            })
        }

        await this.userRepository.delete(id);
    }

    async update(data: ICreateUserDTO): Promise<User> {
        const user = new User(data, data.id);
        console.log(user);
        
        const userUpdated = await this.userRepository.update(user);

        return userUpdated;
    }
}