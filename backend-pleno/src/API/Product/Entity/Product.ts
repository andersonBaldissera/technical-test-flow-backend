import { uuid } from "uuidv4";
import { ICreateProductDTO } from "../DTO/createProductDTO";

export class Product {
    private readonly id: string;

    name: string;
    description: string;
    category_id: string;
    price: string;
    amount: number;

    constructor(props: Omit<ICreateProductDTO, "id">, id?: string) {
        Object.assign(this, props);

        if(!id) {
            this.id = uuid();
        }
    }
}