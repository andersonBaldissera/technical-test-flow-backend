import { v4 as uuidv4 } from "uuid";
import { ICategoriesDTO } from "../DTO/CategoriesDTO";


export class CategoriesBean {
    readonly id: string;

    name: string;
    description: string;

    constructor(props: Omit<ICategoriesDTO, "id">, id?: string) {
        Object.assign(this, props);

        if(!id) {
            this.id = uuidv4();
        }
    }
}