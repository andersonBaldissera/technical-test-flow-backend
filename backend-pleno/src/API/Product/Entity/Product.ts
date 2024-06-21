import { v4 as uuidv4 } from "uuid";
import { ICreateProductDTO } from "../DTO/createProductDTO";
import { IItemCartDTO } from "../../Itens_Cart/DTO/IItemCartDTO";

export class ProductBean {
    readonly id: string;

    name: string;
    description: string;
    price: number;
    amount: number;

    item_cart?: IItemCartDTO;


    constructor(props: Omit<ICreateProductDTO, "id">, id?: string) {
        Object.assign(this, props);

        if(!id) {
            this.id = uuidv4();
        }
    }
}