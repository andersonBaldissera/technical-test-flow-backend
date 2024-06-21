import { v4 as uuidv4 } from "uuid";
import { ICheckoutDTO } from "../DTO/ICheckoutDTO";

export class CheckoutBean {
    readonly id: string;

    user_id: string
    paidout: boolean
    products?: any

    constructor(props: Omit<ICheckoutDTO, "id">, id?: string) {
        Object.assign(this, props);

        if(!id) {
            this.id = uuidv4();
        } else {
            this.id = id;
        }
    }
}