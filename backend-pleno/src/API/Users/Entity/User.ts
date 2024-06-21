import { v4 as uuidv4 } from "uuid";
import { ShoppingCartBean } from "../../Shopping_cart/Entity/ShoppingCart";

export class UserBean {
    readonly id: string;

    name: string;
    email: string;
    password?: string;

    shopping_cart?: ShoppingCartBean

    constructor(props: Omit<UserBean, 'id'>, id?: string) {
         Object.assign(this, props);

         if(!id) {
            this.id = uuidv4();
         }
    }
}