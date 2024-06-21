interface IPriceFilter {
    minPrice: number;
    maxPrice: number;
}

export interface IFilterByDTO {
    category: string[];
    price: IPriceFilter
}