import { HttpError } from "../../../Utils/ErrorHandler";
import { ICreateProductDTO } from "../DTO/createProductDTO";
import { Product } from "../Entity/Product";
import { IProductRepository } from "../Repository/IProductRepository";

export class ProductService {
    constructor(
        private productRepository: IProductRepository
    ) { }

    async getById(id: string): Promise<Product> {
        const product = await this.productRepository.getById(id);

        if(!product) {
            throw new HttpError({
                message: "Produto não encontrado ou não existe",
                statusCode: 404,
                location: "/product/findById"
            })
        }

        return product;
    }

    //? Implementar busca com filtro de categoria e faixa preço
    async findList(filterBy: string): Promise<Product[]> {
        const product = await this.productRepository.findList(filterBy);

        return product;
    }

    async create(data: ICreateProductDTO): Promise<Product> {
        const newProduct = new Product(data);
        const product = await this.productRepository.create(newProduct);

        return product;
    }

    async delete(id: string): Promise<void> {

        await this.productRepository.getById(id);

        await this.productRepository.delete(id);
    }

    async update(data: ICreateProductDTO): Promise<Product> {
        const product = new Product(data, data.id);
        console.log(product);
        
        const productUpdated = await this.productRepository.update(product);

        return productUpdated;
    }
}