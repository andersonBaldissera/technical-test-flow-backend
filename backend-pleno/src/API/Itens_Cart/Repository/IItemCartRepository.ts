import { ItemCart } from "../Entity/ItemCart";

export interface IItemCartRepository {
    getById(id: string): Promise<ItemCart | null>;
    findList(filterBy: string): Promise<Array<ItemCart>>;
    create(data: ItemCart): Promise<ItemCart>;
    delete(id: string): Promise<void>;
    update(data: ItemCart): Promise<ItemCart>;
}