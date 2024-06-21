import { ItemCartBean } from "../../Itens_Cart/Entity/ItemCart";
import { IItemCartDTO } from "../../Itens_Cart/DTO/IItemCartDTO";
import { ShoppingCartBean } from "../Entity/ShoppingCart";
import { Checkout, ShoppingCart } from "@prisma/client";
import { CheckoutBean } from "../Entity/Checkout";

export interface IShoppingCartRepository {
    getCart(user_id: string): Promise<ShoppingCartBean>;
    add(itemCart: IItemCartDTO, user_id: string): Promise<ShoppingCartBean>;
    create(itemCart: ShoppingCart): Promise<ShoppingCartBean>;
    //remove(id: string, user_id: string): Promise<void>;
    delete(idShopping: string): Promise<void>;
    checkout(data: Checkout, user_id: string): Promise<CheckoutBean>;
    update(data: ShoppingCartBean): Promise<void>;
    hasItemCart(id: string, user_id: string): Promise<ShoppingCartBean>;
}