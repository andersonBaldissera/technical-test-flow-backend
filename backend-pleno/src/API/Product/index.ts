import { ProductController } from "./Controller/ProductController";
import { ProductRepository } from "./Repository/ProductRepository";
import { ProductService } from "./Service/ProductService";

const productRepository = new ProductRepository();

const productService = new ProductService(productRepository);

const productController = new ProductController(productService);

export { productController }