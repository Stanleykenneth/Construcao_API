const CarroService = require('../Services/CarroService'); // Carro Controlle está enchergando a Pasta CarroService.

module.exports = {
    buscarTodos: async (req, res) => {
        let json = { error: '', result: [] }; // Retorna um array

        let carros = await CarroService.buscarTodos(); // é uma função de array vindo da classe Service.

        for (let i in carros) {
            json.result.push({
                codigo: carros[i].codigo,
                descricao: carros[i].modelo
            });
        }
        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = { error: '', result: {} }; // Retorna um objeto.

        let codigo = req.params.codigo; // Por onde se recebe o código passad como parametro  
        let carro = await CarroService.buscarUm(codigo);

        if (carro) {
            json.result = carro;
        }

        res.json(json);
    },

    inserir: async (req, res) => {
        let json = { error: '', result: {} }; // Retorna um objeto.


        let modelo = req.body.modelo; // Por onde se recebe o modelo passado como parametro  
        let placa = req.body.placa; // Por onde se recebe o placa passad como parametro          

        if (modelo && placa) {
            let CarroCodigo = await CarroService.inserir(modelo, placa);
            json.result = {
                codigo: CarroCodigo,
                modelo,
                placa
            };
        } else {
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    alterar: async (req, res) => {
        let json = { error: '', result: {} }; // Retorna um objeto.

        let codigo = req.params.codigo;
        let modelo = req.body.modelo; // Por onde se recebe o modelo passado como parametro  
        let placa = req.body.placa; // Por onde se recebe o placa passad como parametro          

        if (codigo && modelo && placa) {
            await CarroService.inserir(modelo, placa);
            json.result = {
                codigo,
                modelo,
                placa
            };
        } else {
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    excluir: async(req, res) => {
        let json = {error:'', result:{}};

        await CarroService.excluir(req.params.codigo);

        res.json(json);
    }

}