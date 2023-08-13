/*
   Nessa classe, tudo que for comando de banco de dados eu jogo nessa classe.
*/

const db = require('../db');

module.exports = {
      buscarTodos: () =>{
         return new Promise((aceito, rejeitado) => {

            //função que traz a pesquisa no banco de dados ou se der erro mesma apresanta o erro.
            db.query('SELECT * FROM carros', (error, results)=>{
               if(error) { rejeitado(error); return; }
               aceito(results);
            });
         });
      },

      buscarUm: (codigo) => {
         return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM carros WHERE codigo = ?', [codigo], (error, results) => {
               if(error) { rejeitado(error); return; }
               if(results.length > 0){
                  aceito(results[0]);
               } else{
                  aceito(false);
               }
            });
         });
      },

      inserir: (modelo, placa) => {
         return new Promise((aceito, rejeitado) => {

            db.query('INSERT INTO carros(modelo, placa) VALUES (?, ?)',
               [modelo, placa],                
               (error, results) => {
                   if(error) { rejeitado(error); return; }
                   aceito(results.insertCodigo);               
            });
         });
      },

      alterar: (codigo, modelo, placa) => {
         return new Promise((aceito, rejeitado) => {

            db.query('UPDATE carros SET modelo = ?, placa = ?, WHERE codigo = ? ',
               [modelo, placa, codigo],                
               (error, results) => {
                   if(error) { rejeitado(error); return; }
                   aceito(results);               
            });
         });
      },

      excluir: (codigo) =>{
         return new Promise((aceito, rejeitado) => {

            //função que traz a pesquisa no banco de dados ou se der erro mesma apresanta o erro.
            db.query('DELETE * FROM carros WHERE codigo = ?',[codigo], (error, results)=>{
               if(error) { rejeitado(error); return; }
               aceito(results);
            });
         });
      }
};