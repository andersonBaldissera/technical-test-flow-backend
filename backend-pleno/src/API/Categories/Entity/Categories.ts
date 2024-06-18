import { uuid } from "uuidv4";
import { ICategoriesDTO } from "../DTO/CategoriesDTO";


export class Categories {
    private readonly id: string;

    nome: string;
    descricao: string;

    constructor(props: Omit<ICategoriesDTO, "id">, id?: string) {
        Object.assign(this, props);

        if(!id) {
            this.id = uuid();
        }
    }
}