
import cursoService from "../service/curso.Service.js"

async function creatcursoController(request, response) {
    const novoCurso = request.body

    try {
        const cursoSalvo = await cursoService.createcursoService(novoCurso);

            response.status (201).send(cursoSalvo)
    } catch (error) {
        response.status (400).send(error.message)
    }
}

async function readALLcursoController(request, response) {
    try {
        const curso = await cursoService.readALLcursoService();
        
        response.status(200).send({curso});
    } catch(error) {
        response.status(400).send(error.message);
    }
}

export default {
    creatcursoController,
    readALLcursoController
}