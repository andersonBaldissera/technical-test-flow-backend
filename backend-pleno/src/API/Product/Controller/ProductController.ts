import { Response, Request } from "express";
import { ProductService } from "../Service/ProductService";
import { HttpError } from "../../../Utils/ErrorHandler";
import { Prisma } from "@prisma/client";

export class ProductController {
    constructor(
        public productService: ProductService
    ) {}

    async getById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        try {
            const product = await this.productService.getById(id);

            return res.status(200).json({
                code: 200,
                message: 'Produto encontrado com sucesso',
                product
            });

        } catch (error) {
            return res.status(400).json(
                {
                    code: error.code,
                    message: error.message
                });
        }
    }

    async getList(req: Request, res: Response): Promise<Response> {
        const { filterBy } = req.body

        try {
            const productsList = await this.productService.getList(filterBy);

            return res.status(200).json({
                code: 200,
                message: 'Produtos encontrados com sucesso',
                productsList
            });
        } catch (error) {
            return res.status(400).json(
                {
                    code: 400,
                    message: 'Erro inesperado, contate o administrador'
                });
        }

        return res.status(200);
    }

    async create(req: Request, res: Response): Promise<Response> {
        const { user_id, product, category_id } = req.body;

        try {
            const newProduct = await this.productService.create(product, category_id);

            return res.status(200).json({
                code: 200,
                message: "Produto adicionado com sucesso!",
                newProduct
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
            await this.productService.delete(id);

            return res.status(200).json({
                code: 200,
                message: "Produto deletado com sucesso"
            });

        } catch (error) {
            return res.status(500).json({
                code: 500,
                message: 'Erro inesperado, contate administrador'
            });
        }
        
    }

    async update(req: Request, res: Response): Promise<Response> {
        const { user_id, product } = req.body;

        try {
           const productUpdated = await this.productService.update(product)

            return res.status(200).json({
                code: 200,
                message: 'Categoria atualizada com sucesso',
                productUpdated
            });
            
        } catch (error) {
            if (error instanceof Prisma.PrismaClientValidationError) {
                return res.status(400).json({
                    code: 400,
                    message: "Um dos Dados Fornecidos é Inválido",
                });
            }

            console.log(error);
            

            return res.status(500).json({
                code: 500,
                message: "Erro inesperado, contate administrador",
            });
        }
    }
}