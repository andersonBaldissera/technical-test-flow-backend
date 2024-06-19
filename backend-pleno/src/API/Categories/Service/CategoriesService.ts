import { HttpError } from "../../../Utils/ErrorHandler";
import { ICategoriesDTO } from "../DTO/CategoriesDTO";
import { Categories } from "../Entity/Categories";
import { ICategoriesRepository } from "../Repository/ICategoriesRepository";

export class CategoriesService {
    constructor(
        private CategoriesRepository: ICategoriesRepository
    ) { }

    async getById(id: string): Promise<Categories> {
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
    async findList(filterBy: string): Promise<Categories[]> {
        const product = await this.CategoriesRepository.findList(filterBy);

        return product;
    }

    async create(data: ICategoriesDTO): Promise<Categories> {
        const newCategories = new Categories(data)
        const categories = await this.CategoriesRepository.create(newCategories);

        return categories;
    }

    async delete(id: string): Promise<void> {

        await this.CategoriesRepository.getById(id);

        await this.CategoriesRepository.delete(id);
    }

    async update(data: ICategoriesDTO): Promise<Categories> {
        const product = new Categories(data, data.id);
        console.log(product);
        
        const productUpdated = await this.CategoriesRepository.update(product);

        return productUpdated;
    }
}