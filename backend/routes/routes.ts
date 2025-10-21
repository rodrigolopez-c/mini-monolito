import { Router } from "express";
import {
    createCategory,
    getCategories,
    updateCategory,
    deleteCategory
} from "../controllers/categoriaController.js";
import {
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct
} from "../controllers/productoController.js";

const router = Router();

// Rutas de Categorías
router.post("/categories", createCategory);
router.get("/categories", getCategories);
router.put("/categories/:id", updateCategory);
router.delete("/categories/:id", deleteCategory);

// Rutas de Productos
router.post("/products", createProduct);
router.get("/products", getProducts);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;