
import db from "./config/Database.js";
import cursoRepository from "../repository/curso.Repository.js";

async function createcursoService (novocurso){

    const cursoSalvo =
    await cursoRepository.creatcursoRepository(novocurso)

    if (!cursoSalvo) {
        throw new Error("Erro ao Criar novo Curso: ");
        
    }

    return cursoSalvo
}

async function readALLcursoService() {
    const curso = await cursoRepository.readALLcursoRepository();

    return curso;
}

export default {
    createcursoService,
    readALLcursoService
    
};