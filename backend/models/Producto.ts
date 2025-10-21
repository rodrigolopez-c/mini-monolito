import mongoose, { Document, Schema } from "mongoose";

export interface IProducto extends Document {
    name: string;
    price: number;
    stock: number;
    categoryId: mongoose.Types.ObjectId;
}

const productoSchema = new Schema<IProducto>({
    name: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, required: true, min: 0 },
    categoryId: { type: Schema.Types.ObjectId, ref: "Categoria", required: true }
}, { timestamps: true });

export default mongoose.model<IProducto>("Producto", productoSchema);