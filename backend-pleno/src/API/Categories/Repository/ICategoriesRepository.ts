import { Category } from "@prisma/client";
import { CategoriesBean } from "../Entity/Categories";

export interface ICategoriesRepository {
    getById(id: string): Promise<CategoriesBean | null>;
    getList(): Promise<Array<CategoriesBean> | null>;
    create(data: Category): Promise<CategoriesBean>;
    delete(id: string): Promise<void>;
    update(data: Category): Promise<CategoriesBean>;
}