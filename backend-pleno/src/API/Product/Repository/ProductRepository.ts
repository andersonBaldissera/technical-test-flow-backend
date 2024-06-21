import { Prisma, Product } from "@prisma/client";
import { ProductBean } from "../Entity/Product";
import { IProductRepository } from "./IProductRepository";
import { prismaClient } from "../../../config/prismaClient";
import { CategoriesBean } from "../../Categories/Entity/Categories";
import { IFilterByDTO } from "../DTO/IFilterByDTO";

export class ProductRepository implements IProductRepository {
    async getById(id: string): Promise<ProductBean> {
        const product: any = await prismaClient.product.findUnique({
            where: { id: id },
            include: {
                categories: true,
                item_cart: true
            }
          });

          return product;
    }

    //? Implementar com filtro por categoria e faixa de preço
    async getList(where: Prisma.ProductWhereInput): Promise<ProductBean[]> {
        const productsList: Array<ProductBean> = await prismaClient.product.findMany({
            where,
            include: {
                categories: true
            }
  
        });
        
        return productsList; 
    }

    async create(data: Product, category_id: string): Promise<ProductBean> {
        const newProduct: ProductBean = await prismaClient.product.create({
            data: {
                ...data,
                categories: {
                    connect: {
                        id: category_id
                    }
                }
            },
            include: {
                categories: true
            }
          });

        return newProduct; 
    }

    async delete(id: string): Promise<void> {
        const product: ProductBean = await prismaClient.product.delete({
            where: { id: id }
          });
    }

    async update(data: Product): Promise<ProductBean> {
        const productUpdated: ProductBean = await prismaClient.product.update({
            where: { id: data.id },
            data,
            include: {
                categories: true
            }
          });

          return productUpdated;
    }
    
}