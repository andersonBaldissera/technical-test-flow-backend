import { Response, Request } from "express";
import { HttpError } from "../../../Utils/ErrorHandler";
import { ShoppingCartService } from "../Service/ShoppingCartService";
import { IItemCartDTO } from "../../Itens_Cart/DTO/IItemCartDTO";

export class ShoppingCartController {
    constructor(
        public shoppingCartService: ShoppingCartService
    ) {}

    async getCart(req: Request, res: Response): Promise<Response> {
        const { user_id } = req.params;

        try {
            const shoppingCart = await this.shoppingCartService.getCart(user_id);

            return res.status(200).json({
                message: 'Carrinho encontrado com sucesso',
                shoppingCart
            });

        } catch (error) {
            if (error instanceof HttpError) {
                return res.status(error.statusCode).json({
                    message: error.message,
                    stattusCode: error.statusCode
                });
            }

            return res.status(500).json({
                message: "Erro inesperado, contate o administrador",
                code: 500
            });
        }
    }

    async add(req: Request, res: Response): Promise<Response> {
        const { itemCart, user_id} = req.body;

        try {
            const newItemCart = await this.shoppingCartService.add(itemCart, user_id);

            return res.status(200).json({
                message: 'Produto adicionado ao carrinho com sucesso',
                newItemCart
            });

        } catch (error) {
            console.log(error);
            if (error instanceof HttpError) {
               
                
                return res.status(error.statusCode).json({
                    message: error.message,
                    stattusCode: error.statusCode
                });
            }

            return res.status(500).json({
                message: "Erro inesperado, contate o administrador",
                code: 500
            });
        }
    }

    async remove(req: Request, res: Response): Promise<Response> {
        const { id, user_id } = req.params

        try {
            await this.shoppingCartService.remove(id, user_id);

            return res.status(200).json({
                code: 200,
                message: "Produto removido com sucesso"
            });

        } catch (error) {
            if (error instanceof HttpError) {
                return res.status(error.statusCode).json({
                    code: error.statusCode,
                    message: error.message
                });
            }

            return res.status(500).json({
                message: "Erro inesperado, contate o administrador",
                code: 500
            });
        }
        
    }

    async checkout(req: Request, res: Response): Promise<Response> {
        const { checkout, user_id } = req.body

        try {
            await this.shoppingCartService.checkout(checkout, user_id);

            return res.status(200).json({
                code: 200,
                message: "Checkout relizado com sucesso"
            });

        } catch (error) {
            if (error instanceof HttpError) {
                return res.status(error.statusCode).json({
                    code: error.statusCode,
                    message: error.message
                });
            }

            return res.status(500).json({
                message: "Erro inesperado, contate o administrador",
                code: 500
            });
        }
    }
}