import { Request, Response } from "express";
import Categoria from "../models/Categoria.js";

export const createCategory = async (req: Request, res: Response) => {
    try {
        const { name, description } = req.body;
        const categoria = new Categoria({ name, description });
        await categoria.save();
        res.status(201).json(categoria);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const getCategories = async (req: Request, res: Response) => {
    try {
        const categorias = await Categoria.find();
        res.status(200).json(categorias);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const updateCategory = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const categoria = await Categoria.findByIdAndUpdate(id, req.body, { new: true });
        if (!categoria) return res.status(404).json({ error: "Categoría no encontrada" });
        res.status(200).json(categoria);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteCategory = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const categoria = await Categoria.findByIdAndDelete(id);
        if (!categoria) return res.status(404).json({ error: "Categoría no encontrada" });
        res.status(200).json({ message: "Categoría eliminada" });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};