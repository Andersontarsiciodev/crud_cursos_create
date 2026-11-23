import CursoController from "../controllers/curso.controller.js";
import { Router } from "express";

const CursoRouter = Router();

CursoRouter.post("/curso", CursoController.creatCursocontroller);

export default CursoRouter;
