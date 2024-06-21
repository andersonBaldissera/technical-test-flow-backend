import { UserBean } from "../Entity/User";
import { IUserRepository } from "./IUserRepository";
import { prismaClient } from "../../../config/prismaClient";
import { HttpError } from "../../../Utils/ErrorHandler";
import { User } from "@prisma/client";

export class UserRepository implements IUserRepository {
    async getById(id: string): Promise<UserBean> {
        const user = await prismaClient.user.findUnique({
            where: { id },
            include: {
                shopping_cart: true
            }
        });
        
        return user;
    }
    
    async findList(id: string): Promise<UserBean[]> {
        throw new Error("Method not implemented.");
    }

    async create(data: User): Promise<UserBean> {
        const user: UserBean = await prismaClient.user.create({
            data
          });

        return user;
    }

    async delete(id: string): Promise<void> {
        const user = await prismaClient.user.delete({
            where: { id: id }
        })
    }

    async update(data: User): Promise<UserBean> {
        const userUpdated = await prismaClient.user.update({
            where: { id: data.id },
            data
        });

        return userUpdated
    }
}