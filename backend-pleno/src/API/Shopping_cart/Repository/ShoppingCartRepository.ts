import { ShoppingCart } from "../Entity/ShoppingCart";
import { IShoppingCartRepository } from "./IShoppingCartRepository";

export class ShoppingCartRepository implements IShoppingCartRepository {
    getById(id: string): Promise<ShoppingCart> {
        throw new Error("Method not implemented.");
    }

    //? Implementar com filtro por categoria e faixa de preço
    findList(filter: string): Promise<ShoppingCart[]> {
        throw new Error("Method not implemented.");
    }

    create(data: ShoppingCart): Promise<ShoppingCart> {
        throw new Error("Method not implemented.");
    }

    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    update(data: ShoppingCart): Promise<ShoppingCart> {
        throw new Error("Method not implemented.");
    }
    
}