import { uuid } from "uuidv4";
import { IShoppingCartDTO } from "../DTO/ShoppingCartDTO";


export class ShoppingCart {
    private readonly id: string;

    user_id: string;
    item_cart_id: String;
    total: number;

    constructor(props: Omit<IShoppingCartDTO, "id">, id?: string) {
        Object.assign(this, props);

        if(!id) {
            this.id = uuid();
        }
    }
}