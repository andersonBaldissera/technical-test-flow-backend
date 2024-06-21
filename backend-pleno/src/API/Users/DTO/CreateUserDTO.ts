export interface ICreateUserDTO {
    id: string;
    name: string;
    email: string;
    password: string;
    shopping_cart_id?: string;
}