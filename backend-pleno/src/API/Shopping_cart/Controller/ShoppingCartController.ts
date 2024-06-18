import { Response, Request } from "express";
import { ShoppingCart } from "../Entity/ShoppingCart";
import { IShoppingCartDTO } from "../DTO/ShoppingCartDTO";
import { HttpError } from "../../../Utils/ErrorHandler";
import { ShoppingCartService } from "../Service/ShoppingCartService";

export class ShoppingCartController {
    constructor(
        public shoppingCartService: ShoppingCartService
    ) {}

    async getById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        try {
            const product = await this.shoppingCartService.getById(id);

            return res.status(200).json(product);

        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async findList(req: Request, res: Response): Promise<Response> {
        const { filterBy } = req.body

        return res.status(200);
    }

    async create(req: Request, res: Response): Promise<Response> {
        const product: IShoppingCartDTO = req.body;

        try {
            const newProduct = await this.shoppingCartService.create(product);

            return res.status(200).json({
                message: 'Produto adicionado com sucesso',
                newProduct
            });

        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params

        try {
            await this.shoppingCartService.delete(id);

            return res.status(200).json({
                code: 200,
                message: "Produto removido com sucesso",
                location: "/shoppingCart/delete"
            });

        } catch (error) {
            if (error instanceof HttpError) {
                return res.status(error.statusCode).json({
                    message: error.message,
                    stattusCode: error.statusCode
                });
            }
        }
        
    }

    async update(req: Request, res: Response): Promise<Response> {
        return res.status(200);
    }
}