import { Prisma } from "@prisma/client";
import { IFilterByDTO } from "../API/Product/DTO/IFilterByDTO";
import { HttpError } from "./ErrorHandler"

export class ProductFilterBuilder {
    private where: Prisma.ProductWhereInput = {};

    constructor(private filterBy: IFilterByDTO) {}

    public build(): Prisma.ProductWhereInput {
        this.applyPriceFilter();
        this.applyCategoryFilter();
        return this.where;
    }

    private applyPriceFilter(): void {
        const { minPrice, maxPrice } = this.filterBy.price;
        if (minPrice !== null && maxPrice !== null) {
            if (minPrice > maxPrice) {
                throw new HttpError({
                    message: "Preço mínimo não pode ser maior que o preço máximo",
                    statusCode: 400
                });
            }

            this.where.price = {
                gt: minPrice,
                lt: maxPrice
            }
        }
    }

    private applyCategoryFilter(): void {
        if (this.filterBy.category.length > 0) {
            this.where.categories = { some: { id: { in: this.filterBy.category } } };
        }
    }
}
