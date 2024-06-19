import { Response, Request } from "express";
import { Categories } from "../Entity/Categories";
import { ICategoriesDTO } from "../DTO/CategoriesDTO";
import { HttpError } from "../../../Utils/ErrorHandler";
import { CategoriesService } from "../Service/CategoriesService";

export class CategoriesController {
    constructor(
        public CategoriesService: CategoriesService
    ) {}

    async getById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        try {
            const product = await this.CategoriesService.getById(id);

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
        const product: ICategoriesDTO = req.body;

        try {
            const newProduct = await this.CategoriesService.create(product);

            return res.status(200).json({
                message: 'Categoria cadastrada com sucesso',
                newProduct
            });

        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params

        try {
            await this.CategoriesService.delete(id);

            return res.status(200).json({
                code: 200,
                message: "Categoria deletado com sucesso",
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