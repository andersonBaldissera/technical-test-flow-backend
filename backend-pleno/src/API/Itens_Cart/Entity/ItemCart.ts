import { uuid } from "uuidv4";
import { IItemCartDTO } from "../DTO/IItemCartDTO";
import { Product } from "../../Product/Entity/Product";

export class ItemCart {
    private readonly id: string;

    shopping_id: string;
    product_id: string;
    amount: number;

    constructor(props: Omit<IItemCartDTO, "id">, id?: string) {
        Object.assign(this, props);

        if(!id) {
            this.id = uuid();
        }
    }
}