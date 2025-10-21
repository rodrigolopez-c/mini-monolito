import { Request, Response } from "express";
import Producto from "../models/Producto.js";
import Categoria from "../models/Categoria.js";

export const createProduct = async (req: Request, res: Response) => {
    try {
        const { name, price, stock, categoryId } = req.body;
        
        const categoria = await Categoria.findById(categoryId);
        if (!categoria) {
        return res.status(404).json({ error: "Categoría no encontrada" });
        }
        
        const producto = new Producto({ name, price, stock, categoryId });
        await producto.save();
        res.status(201).json(producto);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const getProducts = async (req: Request, res: Response) => {
    try {
        const productos = await Producto.find().populate("categoryId", "name");
        res.status(200).json(productos);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        
        if (req.body.categoryId) {
        const categoria = await Categoria.findById(req.body.categoryId);
        if (!categoria) {
            return res.status(404).json({ error: "Categoría no encontrada" });
        }
        }
        
        const producto = await Producto.findByIdAndUpdate(id, req.body, { new: true });
        if (!producto) return res.status(404).json({ error: "Producto no encontrado" });
        res.status(200).json(producto);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const producto = await Producto.findByIdAndDelete(id);
        if (!producto) return res.status(404).json({ error: "Producto no encontrado" });
        res.status(200).json({ message: "Producto eliminado" });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};