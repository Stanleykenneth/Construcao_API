const express = require('express');
const router = express.Router();

const CarroController = require('./controllers/CarroController'); // Para routes enchergar  o arquivo controller

router.get('/carros', CarroController.buscarTodos); // Rota criada para fazer a busca de todos os carros
router.get('/carro/:codigo', CarroController.buscarUm); // Essa rota traz apenas o resultado d o carro escolhido.
router.post('/carro', CarroController.inserir); //Rota para Inserindo dados na tabela via api
router.put('/carro/:codigo', CarroController.alterar); //Rota para alterar dados na tela para 
router.delete('/carro/:codigo', CarroController.excluir); // Deletando

module.exports = router;