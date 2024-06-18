import { Categories } from "../Entity/Categories";
import { ICategoriesRepository } from "./ICategoriesRepository";

export class CategoriesRepository implements ICategoriesRepository {
    getById(id: string): Promise<Categories> {
        throw new Error("Method not implemented.");
    }

    //? Implementar com filtro por categoria e faixa de preço
    findList(filter: string): Promise<Categories[]> {
        throw new Error("Method not implemented.");
    }

    create(data: Categories): Promise<Categories> {
        throw new Error("Method not implemented.");
    }

    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    update(data: Categories): Promise<Categories> {
        throw new Error("Method not implemented.");
    }
    
}