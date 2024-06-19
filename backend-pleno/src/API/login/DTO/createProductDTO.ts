export interface ICreateProductDTO {
    id: string;
    nome: string;
    descricao: string;
    categoria_id: string;
    preco: string;
    quantidade: number;
}