
import cursoService from "../../service/curso-service.js";

async function createcursoController(req, res) {
  const novocurso = req.body;
  try {
    const cursoSalvo = await cursoService.createcursoService(novocurso);
    res.status(201).send(cursoSalvo); 
  } catch (error) {
    res.status(400).send(error.message); 
  }
}

async function readcursoController(req, res) {
  try {
    const cursos = await cursoService.readcursoService();
    res.status(200).send(cursos); 
    
  } catch (error) {
    res.status(500).send(error.message); 
  }
}

export default {
  createcursoController,
  readcursoController,
};