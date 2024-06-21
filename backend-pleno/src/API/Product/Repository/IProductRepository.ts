import { Product } from "@prisma/client";
import { ProductBean } from "../Entity/Product";
import { IFilterByDTO } from "../DTO/IFilterByDTO";

export interface IProductRepository {
    getById(id: string): Promise<ProductBean | null>;
    getList(where: any): Promise<Array<ProductBean> | null>;
    create(data: Product, category_id: string): Promise<ProductBean>;
    delete(id: string): Promise<void>;
    update(data: Product): Promise<ProductBean>;
}