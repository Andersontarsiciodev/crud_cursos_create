
import db from "../config/Database.js"

db.run (`
    CREATE TABLE IF NOT EXISTS Curso(
        id  INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL UNIQUE, 
        area TEXT NOT NULL,
        nivel TEXT NOT NULL,
        modalidade TEXT NOT NULL
    )
    
`)

function creatcursoRepository (novocurso){
    return new Promise ((response, reject) => {

        const {nome, area, nivel, modalidade} = novocurso

        db.run (
            `INSERT INTOR Curso (nome, area, nivel, modalidade)
            VALUES (?,?,?,?)`, [nome, area, nivel, modalidade],
            (erro) => {
                if (erro){
                    rej (erro)
                } else {
                    res (novocurso)
                }
            }
        )
    })
}

function readALLcursoRepository() {
    return new Promise((resolve, reject) => {
        db.all(
            'SELECT * FROM curso', [],
            (error, rows) => {
                if (error) {
                    reject(error);
                } else{
                    resolve(rows);
                }
            }
        )
    })
}

export default {
    creatcursoRepository,
    readALLcursoRepository     
}