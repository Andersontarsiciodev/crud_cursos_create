
import cursoController from "../controller/curso.Controller.js";

import { Router } from "express";

const cursoRouter = Router();

CursoRouter.post("/curso", cursoController.creatcursoController);

export default cursoRouter;
