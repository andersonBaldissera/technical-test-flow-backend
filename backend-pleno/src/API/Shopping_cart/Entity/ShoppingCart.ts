import { v4 as uuidv4 } from "uuid";
import { IShoppingCartDTO } from "../DTO/ShoppingCartDTO";

export class ShoppingCartBean {
    readonly id: string;

    user_id: string;
    item_cart_id?: string;
    total: number;

    constructor(props: Omit<IShoppingCartDTO, "id">, id?: string) {
        Object.assign(this, props);

        if(!id) {
            this.id = uuidv4();
        } else {
            this.id = id;
        }
    }
}