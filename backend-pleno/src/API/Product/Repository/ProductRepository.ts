import { Product } from "../Entity/Product";
import { IProductRepository } from "./IProductRepository";

export class ProductRepository implements IProductRepository {
    getById(id: string): Promise<Product> {
        throw new Error("Method not implemented.");
    }

    //? Implementar com filtro por categoria e faixa de preço
    findList(filter: string): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }

    create(data: Product): Promise<Product> {
        throw new Error("Method not implemented.");
    }

    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    update(data: Product): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    
}