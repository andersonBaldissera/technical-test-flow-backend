import { uuid } from "uuidv4";
import { ICreateProductDTO } from "../DTO/createProductDTO";

export class Product {
    private readonly id: string;

    nome: string;
    descricao: string;
    categoria_id: string;
    preco: string;
    quantidade: number;

    constructor(props: Omit<ICreateProductDTO, "id">, id?: string) {
        Object.assign(this, props);

        if(!id) {
            this.id = uuid();
        }
    }
}