import { ItemCartBean } from "../Entity/ItemCart";

export interface IItemCartRepository {
    getItem(id: string): Promise<ItemCartBean>;
    remove(id: string): Promise<void>;
    update(itemCartUpdated: any, itemCartID: string): Promise<ItemCartBean>;
}