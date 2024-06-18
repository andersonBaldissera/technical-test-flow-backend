import { Product } from "../Entity/Product";

export interface IProductRepository {
    getById(id: string): Promise<Product | null>;
    findList(filterBy: string): Promise<Array<Product> | null>;
    create(data: Product): Promise<Product>;
    delete(id: string): Promise<void>;
    update(data: Product): Promise<Product>;
}