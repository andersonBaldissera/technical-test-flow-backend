import { NextFunction, Request, Response } from "express"
import * as jwt from "jsonwebtoken"
import { HttpError } from "../Utils/ErrorHandler"


export interface Token {
    id: string
    iat: number
    exp: number
}

export interface IAuth {
    Auth(request: Request, response: Response, next: NextFunction): Response<any, Record<string, any>>
}

export default class Authentication implements IAuth {
    Auth(req: Request, res: Response, next: NextFunction): any {
        try {
            const { authorization } = req.headers
            const secret = process.env.SECRET
            if (!secret) {
                throw new Error("Secreto não definido para validar token");
            }

            if (!authorization) {
                throw new HttpError({
                    message: "Token precisa ser fornecido",
                    statusCode: 401
                })
            }

            const token = authorization.replace("Bearer", "").trim()
            const verToken = jwt.decode(token)

            if (!verToken)
                throw new HttpError({
                    message: "Token inválido",
                    statusCode: 401
                })

            const data = jwt.verify(token, secret)

            const { id } = data as Token

            req.body.user_id = id
            next()
        } catch (error) {
            if (error instanceof HttpError) {
                return res.status(error.statusCode).json({
                    message: error.message,
                    statusCode: error.statusCode
                })
            }
            if (error instanceof jwt.TokenExpiredError) {
                return res.status(401).json({
                    message: "Sessão expirada. Por favor faça login novamente.",
                    statusCode: 401
                })
            }

            return res
                .status(500)
                .json({ message: "Internal Server Error", statusCode: 500 })
        }
    }
}
