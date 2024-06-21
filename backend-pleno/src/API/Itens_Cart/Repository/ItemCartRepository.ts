import { ItemCartBean } from "../Entity/ItemCart";
import { IItemCartRepository } from "./IItemCartRepository";
import { prismaClient } from "../../../config/prismaClient";
import { ItemCart } from "@prisma/client";

export class ItemCartRepository implements IItemCartRepository {
    getItem(id: string): Promise<any> {
        const item = prismaClient.itemCart.findFirst({
            where: { id: id },
            include: {
                shopping_cart: true,
                product: true
            }
        })

        return item;
    }
    async remove(id: string): Promise<void> {
        const itemCartRemoved = await prismaClient.itemCart.delete({
            where: { id: id }
        });
    }

    async update(itemCartUpdated: any, itemCartID: string): Promise<ItemCartBean> {
        const updatedItemCart = await prismaClient.itemCart.update({
            where: {
                id: itemCartID
            },
            data: itemCartUpdated
        })

        return updatedItemCart;
    }
    
}