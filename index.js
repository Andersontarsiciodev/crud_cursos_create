
import express from "express";

import cursoRoutes from "./src/routes/curso-routes.js";

const app = express();

app.use(express.json());

app.use(cursoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
