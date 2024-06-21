import { Request, Response } from 'express';
import { UserService } from '../Service/UserService';
import { HttpError } from '../../../Utils/ErrorHandler';
import { Prisma } from '@prisma/client';

export class UserController {
    constructor(
        private userService: UserService,
    ) { }

    async findById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        try {
            const user = await this.userService.findById(id);

            return res.status(200).json(user);
            
        } catch (error) {
            return res.status(400).json({
                code: error.stattusCode,
                message: error.message
            });
        }
    }

    async findList(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        try {
            const user = await this.userService.findList(id);

            return res.status(200).json(user);
            
        } catch (error) {
            return res.status(400).json({
                code: error.stattusCode,
                message: error.message
            });
        }
    }

    async create(req: Request, res: Response): Promise<Response> {
        const user = req.body;

        try {
            await this.userService.create(user);

            return res.status(201).json({
                code: 200,
                message: "Usuário criado com sucesso"
            });
        } catch (error) {
            if(error instanceof Prisma.PrismaClientValidationError) {
                    return res.status(400).json({
                        code: 400,
                        message: "Um dos Dados Fornecidos é Inválido",
                    });
            }
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params

            await this.userService.delete(id);
            return res.status(200).json({
                code: 200,
                message: "Usuário deletado com sucesso"
            });

        } catch (error) {
                return res.status(400).json({
                    code: 400,
                    message: error.message,
                });
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        const user = req.body;

        try {
            await this.userService.update(user);

            return res.status(201).send({
                code: 201,
                message: "Usuário atualizado com sucesso"
            });

        } catch (error) {
            return res.status(400).json({
                code: error.stattusCode,
                message: error.message
            });
        }
    }
}