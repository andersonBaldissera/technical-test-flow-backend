import { ShoppingCart, User } from "@prisma/client";
import { HttpError } from "../../../Utils/ErrorHandler";
import { ICreateUserDTO } from "../DTO/CreateUserDTO";
import { UserBean } from "../Entity/User";
import { IUserRepository } from "../Repository/IUserRepository";
import { IShoppingCartRepository } from "../../Shopping_cart/Repository/IShoppingCartRepository";
import { ShoppingCartBean } from "../../Shopping_cart/Entity/ShoppingCart";

export class UserService{
    constructor(
        private userRepository: IUserRepository,
        private shoppingCartRepository: IShoppingCartRepository
    ) { }

    async findById(id: string): Promise<UserBean> {
        const user = await this.userRepository.getById(id);

        return user;
    }

    async findList(id: string): Promise<UserBean[]> {
        const user = await this.userRepository.findList(id);

        return user;
    }

    async create(data: ICreateUserDTO): Promise<UserBean> {
        let newUser = new UserBean(data) as User;

        const user = await this.userRepository.create(newUser);

        const newShoppingCartUser = new ShoppingCartBean({
            total: 0,
            user_id: newUser.id,
        }) as ShoppingCart

        const shoppingCartUser = await this.shoppingCartRepository.create(newShoppingCartUser);

        return user;
    }

    async delete(id: string): Promise<void> {
        const hasEmployee = await this.findById(id);

        if(!hasEmployee) {
            throw new HttpError({
                message: "Usuário não encontrado ou não existe",
                statusCode: 404
            })
        }

        await this.shoppingCartRepository.delete(hasEmployee.shopping_cart.id);

        await this.userRepository.delete(id);
    }

    async update(data: ICreateUserDTO): Promise<UserBean> {
        const user = new UserBean(data, data.id);
        console.log(user);
        
        const userUpdated = await this.userRepository.update(user);

        return userUpdated;
    }
}