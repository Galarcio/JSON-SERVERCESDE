import express from "express";
import dotenv from "dotenv";
import cursosRoutes from "./routes/cursos.js";
import docentesRoutes from "./routes/docentes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static("public"));

// Rutas
app.use("/cursos", cursosRoutes);
app.use("/docentes", docentesRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});