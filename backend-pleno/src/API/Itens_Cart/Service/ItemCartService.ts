import { HttpError } from "../../../Utils/ErrorHandler";
import { IItemCartDTO } from "../DTO/IItemCartDTO";
import { ItemCart } from "../Entity/ItemCart";
import { IItemCartRepository } from "../Repository/IItemCartRepository";

export class ItemCartService {
    constructor(
        private itemCartRepository: IItemCartRepository
    ) { }

    async getById(id: string): Promise<ItemCart> {
        const product = await this.itemCartRepository.getById(id);

        if(!product) {
            throw new HttpError({
                message: "Produto não encontrado ou não existe",
                statusCode: 404,
            })
        }

        return product;
    }

    //? Implementar busca com filtro de categoria e faixa preço
    async findList(filterBy: string): Promise<ItemCart[]> {
        const product = await this.itemCartRepository.findList(filterBy);

        return product;
    }

    async create(data: IItemCartDTO): Promise<ItemCart> {
        const newProduct = new ItemCart(data);
        const product = await this.itemCartRepository.create(newProduct);

        return product;
    }

    async delete(id: string): Promise<any> {

        await this.itemCartRepository.getById(id);

        await this.itemCartRepository.delete(id);
    }

    async update(data: IItemCartDTO): Promise<ItemCart> {
        const product = new ItemCart(data, data.id);
        console.log(product);
        
        const productUpdated = await this.itemCartRepository.update(product);

        return productUpdated;
    }
}