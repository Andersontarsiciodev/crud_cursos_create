
import db from "../Config/Database.js";

db.run(`
  CREATE TABLE IF NOT EXISTS curso (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL UNIQUE,
    area TEXT NOT NULL,
    nivel TEXT NOT NULL,
    modalidade TEXT NOT NULL
  )
`);

function createcursoRepository(novocurso) {
  return new Promise((resolve, reject) => {
   
    const { nome, area, nivel, modalidade } = novocurso;

    db.run(
      `INSERT INTO curso (nome, area, nivel, modalidade) 
      VALUES (?,?,?,?)`,
      [ nome, 
        area, 
        nivel, 
        modalidade],
      (error) => {
        if (err) {
          reject(error); 

        } else {
          resolve(novocurso); 
        }
      }
    );
  });
}

function readcursoRepository() {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM curso`, [], (error, rows) => {
      if (error) {
        reject(error);
      } else {
        resolve(rows); 
      }
    });
  });
}

export default {
  createcursoRepository,
  readcursoRepository,
};