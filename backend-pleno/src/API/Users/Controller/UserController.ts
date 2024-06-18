import { Request, Response } from 'express';
import { UserService } from '../Service/UserService';
import { HttpError } from '../../../Utils/ErrorHandler';

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
                message: error.message
            });
        }
    }

    async create(req: Request, res: Response): Promise<Response> {
        const { user } = req.body;

        try {
            await this.userService.create(user);

            return res.status(201).send();
        } catch (error) {
            return res.status(400).json({
                message: error.message
            });
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params

            await this.userService.delete(id);
            return res.status(200).json({
                code: 200,
                message: "Usuário deletado com sucesso",
                location: "/user/delete"
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
        const { user } = req.body;

        try {
            await this.userService.update(user);

            return res.status(201).send();
        } catch (error) {
            return res.status(400).json({
                message: error.message
            });
        }
    }
}