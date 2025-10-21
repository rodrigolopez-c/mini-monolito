import mongoose, { Document, Schema } from "mongoose";

export interface ICategoria extends Document {
    name: string;
    description?: string;
}

const categoriaSchema = new Schema<ICategoria>({
    name: { type: String, required: true, unique: true },
    description: { type: String, default: "" }
}, { timestamps: true });

export default mongoose.model<ICategoria>("Categoria", categoriaSchema);