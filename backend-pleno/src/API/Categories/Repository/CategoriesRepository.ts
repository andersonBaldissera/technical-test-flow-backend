import { Category } from "@prisma/client";
import { prismaClient } from "../../../config/prismaClient";
import { CategoriesBean } from "../Entity/Categories";
import { ICategoriesRepository } from "./ICategoriesRepository";

export class CategoriesRepository implements ICategoriesRepository {
    async getById(id: string): Promise<CategoriesBean> {
        const category: CategoriesBean = await prismaClient.category.findUnique({
            where: { id: id },
            include: {
                products: true
            }
          });

          return category;
    }

    async getList(): Promise<CategoriesBean[]> {
        const categories: Array<CategoriesBean> = await prismaClient.category.findMany(
            {
                include: { products: true }
            }
        );

        return categories;
    }

    async create(data: Category): Promise<CategoriesBean> {
        const newCategory: CategoriesBean = await prismaClient.category.create({
            data
          });

          return newCategory;
    }

    async delete(id: string): Promise<void> {
        const category: CategoriesBean = await prismaClient.category.delete({
            where: { id: id }
          });
    }

    async update(data: Category): Promise<CategoriesBean> {
        const categoryUpdated: CategoriesBean = await prismaClient.category.update({
            where: { id: data.id },
            data
          });

          return categoryUpdated;
    }
    
}