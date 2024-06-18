import { CategoriesController } from "./Controller/CategoriesController";
import { CategoriesRepository } from "./Repository/CategoriesRepository";
import { CategoriesService } from "./Service/CategoriesService";


const categoriesRepository = new CategoriesRepository();

const categoriesService = new CategoriesService(categoriesRepository);

const categoriesController = new CategoriesController(categoriesService);

export { categoriesController }