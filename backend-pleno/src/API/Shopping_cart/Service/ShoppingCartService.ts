import { Checkout, ItemCart } from "@prisma/client";
import { HttpError } from "../../../Utils/ErrorHandler";
import { IShoppingCartRepository } from "../Repository/IShoppingCartRepository";
import { IItemCartRepository } from "../../Itens_Cart/Repository/IItemCartRepository";
import { IItemCartDTO } from "../../Itens_Cart/DTO/IItemCartDTO";
import { ItemCartBean } from "../../Itens_Cart/Entity/ItemCart";
import { ShoppingCartBean } from "../Entity/ShoppingCart";
import { IProductRepository } from "../../Product/Repository/IProductRepository";
import { ICheckoutDTO } from "../DTO/ICheckoutDTO";
import { CheckoutBean } from "../Entity/Checkout";

export class ShoppingCartService {
    constructor(
        private shoppingCartRepository: IShoppingCartRepository,
        private itemCartRepository: IItemCartRepository,
        private productRepository: IProductRepository
    ) { }

    async getCart(user_id: string): Promise<ShoppingCartBean> {
        const shoppingCarts = await this.shoppingCartRepository.getCart(user_id);

        return shoppingCarts;
    }

    async add(itemCart: IItemCartDTO, user_id: string): Promise<ShoppingCartBean> {
        let newItemCart = new ItemCartBean(itemCart) as ItemCart;

        const product = await this.productRepository.getById(itemCart.product_id);

        newItemCart.total = product.price * newItemCart.amount;

        const item: any = await this.shoppingCartRepository.add(newItemCart, user_id);

        item.total = item.item_cart.reduce((accumulator: number, currentItem: any) => {
            return accumulator + currentItem.total;
        }, 0);
        
        delete item.item_cart;

        await this.shoppingCartRepository.update(item)

        return item;
    }

    async remove(id: string, user_id: string): Promise<void> {
        const itemToRemove: any = await this.itemCartRepository.getItem(id);

        if(!itemToRemove) {
            throw new HttpError({
                statusCode: 404, 
                message: "Item não encontrado"
            });
        }

        await this.itemCartRepository.remove(id);


        const shoppingCart: any = await this.shoppingCartRepository.getCart(user_id);
        shoppingCart.total = shoppingCart.item_cart.reduce((accumulator: number, currentItem: any) => {
            return accumulator + currentItem.total;
        }, 0);
        
        delete shoppingCart.item_cart;

        await this.shoppingCartRepository.update(shoppingCart)
    }

    async checkout(data: ICheckoutDTO, user_id: string): Promise<CheckoutBean> {
        const shoppingCart = new CheckoutBean(data, data.id) as Checkout;
        
        const shoppingCartUpdated: CheckoutBean = await this.shoppingCartRepository.checkout(shoppingCart, user_id);

        return shoppingCartUpdated;
    }
    
}