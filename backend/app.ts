import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routes from "./routes/routes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("frontend")); // para servir tus pantallas
app.use("/api", routes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Conectado a MongoDB"))
    .catch(err => console.log(err));

app.listen(3000, () => console.log("Servidor en http://localhost:3000"));
