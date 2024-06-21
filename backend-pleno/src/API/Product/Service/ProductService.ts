import { Product } from "@prisma/client";
import { ProductFilterBuilder } from "../../../Utils/ProductFilterBuilder";
import { ICreateProductDTO } from "../DTO/createProductDTO";
import { ProductBean } from "../Entity/Product";
import { IProductRepository } from "../Repository/IProductRepository";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { IFilterByDTO } from "../DTO/IFilterByDTO";

export class ProductService {
    constructor(
        private productRepository: IProductRepository
    ) { }

    async getById(id: string): Promise<ProductBean> {
        const product = await this.productRepository.getById(id);

        if(!product) {
            throw new PrismaClientKnownRequestError('Produto não encontrado ou não existe', {code:'404', clientVersion: '5.15.1'});
        }

        return product;
    }

    //? Implementar busca com filtro de categoria e faixa preço
    async getList(filterBy: IFilterByDTO): Promise<ProductBean[]> {
        const productFilter = new ProductFilterBuilder(filterBy);
        const where = productFilter.build();

        const product = await this.productRepository.getList(where);

        return product;
    }

    async create(data: ICreateProductDTO, category_id: string): Promise<ProductBean> {
        const newProduct = new ProductBean(data) as Product;
        const product = await this.productRepository.create(newProduct, category_id);

        return product;
    }

    async delete(id: string): Promise<void> {

        await this.getById(id);

        await this.productRepository.delete(id);
    }

    async update(data: ICreateProductDTO): Promise<ProductBean> {
        const product = new ProductBean(data, data.id) as Product;
        
        const productUpdated = await this.productRepository.update(product);

        return productUpdated;
    }
}