var formularioModel = require("../models/formularioModel");

function enviarFormulario(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idVar = req.body.idServer;
    var feeling = req.body.feelingFormulario;
    var genero = req.body.generoFormulario;
    var descoberta = req.body.descobertaFormulario;
    var nacionalidade = req.body.nacionalidadeFormulario;
    var mscImportante = req.body.mscImportanteFormulario;

    // Faça as validações dos valores
    if (idVar == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (feeling == undefined) {
        res.status(400).send("Seu humor está undefined!");
    } else if (genero == undefined) {
        res.status(400).send("Seu genero musical está undefined!");
    } else if (descoberta == undefined) {
        res.status(400).send("Seu modo de descoberta está undefined!");
    } else if (nacionalidade == undefined) {
        res.status(400).send("A preferência sobre nacional/internacional está undefined!");
    } else if (mscImportante == undefined) {
        res.status(400).send("A preferência de importancia está undefined!");
    } else {
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        formularioModel.enviarFormulario(feeling, genero, descoberta, nacionalidade, mscImportante, idVar)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro!!! Erro: ",
                        erro.sqlMessage
                    );
                    if (erro.sqlMessage == `Duplicate entry '${idVar}' for key 'formulario.unico'`) {
                        res.status(501).json(erro.sqlMessage);
                    } else {
                        res.status(500).json(erro.sqlMessage)
                    }
                }
            );
    }
}

module.exports = { 
    enviarFormulario
};