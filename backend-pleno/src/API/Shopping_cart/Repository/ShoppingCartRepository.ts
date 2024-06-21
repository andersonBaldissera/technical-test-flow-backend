import { Checkout, ShoppingCart } from "@prisma/client";
import { prismaClient } from "../../../config/prismaClient";
import { ShoppingCartBean } from "../Entity/ShoppingCart";
import { IShoppingCartRepository } from "./IShoppingCartRepository";
import { IItemCartDTO } from "../../Itens_Cart/DTO/IItemCartDTO";
import { ItemCartBean } from "../../Itens_Cart/Entity/ItemCart";
import { CheckoutBean } from "../Entity/Checkout";

export class ShoppingCartRepository implements IShoppingCartRepository {
           
    async getCart(user_id: string): Promise<ShoppingCartBean> {
        const cart: ShoppingCartBean = await prismaClient.shoppingCart.findFirst({
            where: {
                user_id: user_id
            },
            include: {
                item_cart: true
            }
        })

        return cart
    }
    async add(itemCart: IItemCartDTO, user_id: string): Promise<ShoppingCartBean> {
        const item: ShoppingCartBean = await prismaClient.shoppingCart.update({
            where: {
                user_id: user_id
            },
            data: {
                item_cart: {
                    create: {
                        id: itemCart.id,
                        product_id: itemCart.product_id,
                        amount: itemCart.amount,
                        total: itemCart.total
                    }
                }
            },
            include: {
                item_cart: true
            }
        })

        return item
    }
    async checkout(data: Checkout, user_id: string): Promise<CheckoutBean> {
        const checkout = await prismaClient.checkout.create({
            data: {
                ...data,
                user_id: user_id
            }
        })

        return checkout;
    }
    
    async update(data: ShoppingCartBean): Promise<void> {
        await prismaClient.shoppingCart.update({
            where: {
                id: data.id
            },
            data
        })
    }

    async hasItemCart(id: string, user_id: string): Promise<ShoppingCartBean> {
        const hasItemCart = await prismaClient.shoppingCart.findFirst({
            where: {
                user_id: user_id
            },
            include: {
                item_cart: {
                    where: {
                        id: id
                    },
                    include: {
                        product: true
                    }
                },
            }
        })

        return hasItemCart;
    }

    async create(shopping: ShoppingCart): Promise<ShoppingCartBean> {
        const newShoppingCartUser = await prismaClient.shoppingCart.create({
            data: shopping
        });

        return newShoppingCartUser;
    }

    async delete(idShopping: string): Promise<void> {
        await prismaClient.shoppingCart.delete({
            where: {
                id: idShopping
            }
        })
    }
    
}