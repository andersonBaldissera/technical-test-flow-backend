import { v4 as uuidv4 } from "uuid";
import { IItemCartDTO } from "../DTO/IItemCartDTO";

export class ItemCartBean {
    readonly id: string;

    shopping_cart_id: string;
    product_id: string;
    amount: number;
    total: number;

    constructor(props: Omit<IItemCartDTO, "id">, id?: string) {
        Object.assign(this, props);

        if(!id) {
            this.id = uuidv4();
        }
    }
}