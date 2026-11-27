
import cursoRepository from "../repository/curso-repository.js";

async function createcursoService(novocurso) {
  const cursoSalvo = await cursoRepository.createcursoRepository(novocurso);

  if (!cursoSalvo) {
    throw new Error("Erro ao criar um novo curso");
  }

  return cursoSalvo;
}

async function readcursoService() {
  const cursos = await cursoRepository.readcursoRepository();
  return cursos;
}

export default {
  createcursoService,
  readcursoService,
};