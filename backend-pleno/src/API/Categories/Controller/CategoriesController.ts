import { Response, Request } from "express";
import { ICategoriesDTO } from "../DTO/CategoriesDTO";
import { HttpError } from "../../../Utils/ErrorHandler";
import { CategoriesService } from "../Service/CategoriesService";
import { Prisma } from "@prisma/client";
import { CategoriesBean } from "../Entity/Categories";

export class CategoriesController {
    constructor(
        public CategoriesService: CategoriesService
    ) {}

    async getById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        try {
            const category = await this.CategoriesService.getById(id);

            return res.status(200).json({
                code: 200,
                message: 'Categoria encontrada com sucesso!',
                category
            });

        } catch (error) {
            return res.status(500).json({
                code: 500,
                message: "Erro inesperado, contate administrador",
            });
        }
    }

    async findList(req: Request, res: Response): Promise<Response> {
        try {
            const categoryList: Array<CategoriesBean> = await this.CategoriesService.getList();

            return res.status(200).json({
                code: 200,
                message: categoryList.length < 1 ? 'Lista de categorias vazia' : 'Categorias encontradas com sucesso!',
                categoryList
            });

        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async create(req: Request, res: Response): Promise<Response> {
        const { name, description }: ICategoriesDTO = req.body;

        try {
            const newCategory = await this.CategoriesService.create({id: '', name: name, description: description});

            return res.status(200).json({
                message: 'Categoria cadastrada com sucesso',
                newCategory
            });

        } catch (error) {
            if (error instanceof Prisma.PrismaClientValidationError) {
                return res.status(400).json({
                    code: 400,
                    message: "Um dos Dados Fornecidos é Inválido",
                });
            }

            return res.status(500).json({
                code: 500,
                message: "Erro inesperado, contate administrador",
            });
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
            if (error instanceof Prisma.PrismaClientValidationError) {
                return res.status(400).json({
                    code: 400,
                    message: "Um dos Dados Fornecidos é Inválido",
                });
            }

            return res.status(500).json({
                code: 500,
                message: "Erro inesperado, contate administrador",
            });
        }
        
    }

    async update(req: Request, res: Response): Promise<Response> {
        const { user_id, category } = req.body;

        try {
            const categoryUpdated = await this.CategoriesService.update(category);

            return res.status(200).json({
                code: 200,
                message: 'Categoria atualizada com sucesso',
                categoryUpdated
            });

        } catch (error) {
            if (error instanceof Prisma.PrismaClientValidationError) {
                return res.status(400).json({
                    code: 400,
                    message: "Um dos Dados Fornecidos é Inválido",
                });
            }

            return res.status(500).json({
                code: 500,
                message: "Erro inesperado, contate administrador",
            });
        }
    }
}