import { ShoppingCart } from "../Entity/ShoppingCart";

export interface IShoppingCartRepository {
    getById(id: string): Promise<ShoppingCart | null>;
    findList(filterBy: string): Promise<Array<ShoppingCart> | null>;
    create(data: ShoppingCart): Promise<ShoppingCart>;
    delete(id: string): Promise<void>;
    update(data: ShoppingCart): Promise<ShoppingCart>;
}