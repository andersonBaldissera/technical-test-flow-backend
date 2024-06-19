import { Response, Request } from "express";
import { ItemCartService } from "../Service/ItemCartService";
import { ItemCart } from "../Entity/ItemCart";
import { IItemCartDTO } from "../DTO/IItemCartDTO";
import { HttpError } from "../../../Utils/ErrorHandler";

export class ItemCartController {
    constructor(
        public itemCartService: ItemCartService
    ) {}

    async getById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        try {
            const product = await this.itemCartService.getById(id);

            return res.status(200).json({
                code: 200,
                message: "Produto deletado com sucesso",
                product
            });

        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async findList(req: Request, res: Response): Promise<Response> {
        const { filterBy } = req.body

        return res.status(200);
    }

    async create(req: Request, res: Response): Promise<Response> {
        const product: IItemCartDTO = req.body;

        try {
            const newProduct = await this.itemCartService.create(product);

            return res.status(200).json({
                code: 200,
                message: "Produto deletado com sucesso",
                newProduct
            });

        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params

        try {
            await this.itemCartService.delete(id);

            return res.status(200).json({
                code: 200,
                message: "Produto deletado com sucesso"
            });

        } catch (error) {
            if (error instanceof HttpError) {
                return res.status(error.statusCode).json({
                    message: error.message,
                    statusCode: error.statusCode
                });
            }

            return res.status(500).send();
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        return res.status(200);
    }
}