import { Category } from "@prisma/client";
import { HttpError } from "../../../Utils/ErrorHandler";
import { ICategoriesDTO } from "../DTO/CategoriesDTO";
import { CategoriesBean } from "../Entity/Categories";
import { ICategoriesRepository } from "../Repository/ICategoriesRepository";

export class CategoriesService {
    constructor(
        private CategoriesRepository: ICategoriesRepository
    ) { }

    async getById(id: string): Promise<CategoriesBean> {
        const product = await this.CategoriesRepository.getById(id);

        if(!product) {
            throw new HttpError({
                message: "Produto não encontrado ou não existe",
                statusCode: 404
            })
        }

        return product;
    }

    //? Implementar busca com filtro de categoria e faixa preço
    async getList(): Promise<CategoriesBean[]> {
        const product = await this.CategoriesRepository.getList();

        return product;
    }

    async create(data: ICategoriesDTO): Promise<CategoriesBean> {
        const newCategories = new CategoriesBean(data) as Category
        const categories = await this.CategoriesRepository.create(newCategories);

        return categories;
    }

    async delete(id: string): Promise<void> {

        await this.CategoriesRepository.getById(id);

        await this.CategoriesRepository.delete(id);
    }

    async update(data: ICategoriesDTO): Promise<CategoriesBean> {
        const product: CategoriesBean = new CategoriesBean(data, data.id);     
        
        const productUpdated = await this.CategoriesRepository.update(product);

        return productUpdated;
    }
}