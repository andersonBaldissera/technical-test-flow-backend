import { Categories } from "../Entity/Categories";

export interface ICategoriesRepository {
    getById(id: string): Promise<Categories | null>;
    findList(filterBy: string): Promise<Array<Categories> | null>;
    create(data: Categories): Promise<Categories>;
    delete(id: string): Promise<void>;
    update(data: Categories): Promise<Categories>;
}