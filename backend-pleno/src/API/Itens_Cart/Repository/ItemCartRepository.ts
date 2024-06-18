import { ItemCart } from "../Entity/ItemCart";
import { IItemCartRepository } from "./IItemCartRepository";

export class ItemCartRepository implements IItemCartRepository {
    getById(id: string): Promise<ItemCart> {
        throw new Error("Method not implemented.");
    }

    //? Implementar com filtro por categoria e faixa de preço
    findList(filter: string): Promise<ItemCart[]> {
        throw new Error("Method not implemented.");
    }

    create(data: ItemCart): Promise<ItemCart> {
        throw new Error("Method not implemented.");
    }

    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    update(data: ItemCart): Promise<ItemCart> {
        throw new Error("Method not implemented.");
    }
    
}