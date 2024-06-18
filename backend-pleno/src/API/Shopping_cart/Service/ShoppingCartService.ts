import { HttpError } from "../../../Utils/ErrorHandler";
import { IShoppingCartDTO } from "../DTO/ShoppingCartDTO";
import { ShoppingCart } from "../Entity/ShoppingCart";
import { IShoppingCartRepository } from "../Repository/IShoppingCartRepository";

export class ShoppingCartService {
    constructor(
        private shoppingCartRepository: IShoppingCartRepository
    ) { }

    async getById(id: string): Promise<ShoppingCart> {
        const product = await this.shoppingCartRepository.getById(id);

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
    async findList(filterBy: string): Promise<ShoppingCart[]> {
        const product = await this.shoppingCartRepository.findList(filterBy);

        return product;
    }

    async create(data: IShoppingCartDTO): Promise<ShoppingCart> {
        const newCategories = new ShoppingCart(data)
        const categories = await this.shoppingCartRepository.create(newCategories);

        return categories;
    }

    async delete(id: string): Promise<void> {

        await this.shoppingCartRepository.getById(id);

        await this.shoppingCartRepository.delete(id);
    }

    async update(data: IShoppingCartDTO): Promise<ShoppingCart> {
        const product = new ShoppingCart(data, data.id);
        console.log(product);
        
        const productUpdated = await this.shoppingCartRepository.update(product);

        return productUpdated;
    }
}