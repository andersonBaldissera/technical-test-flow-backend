import { Response, Request } from "express";
import { ProductService } from "../Service/ProductService";
import { Product } from "../Entity/Product";
import { ICreateProductDTO } from "../DTO/createProductDTO";
import { HttpError } from "../../../Utils/ErrorHandler";

export class ProductController {
    constructor(
        public productService: ProductService
    ) {}

    async getById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        try {
            const product = await this.productService.getById(id);

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
        const product: ICreateProductDTO = req.body;

        try {
            const newProduct = await this.productService.create(product);

            return res.status(200).json(newProduct);

        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params

        try {
            await this.productService.delete(id);

            return res.status(200).json({
                code: 200,
                message: "Produto deletado com sucesso"
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