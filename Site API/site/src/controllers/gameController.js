var usuarioModel = require("../models/gameModel");
// var aquarioModel = require("../models/aquarioModel");

function showScore(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idUsuario = req.body.idServer;
    var score = req.body.scoreServer;

    // Faça as validações dos valores
    if (idUsuario == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (score == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.showScore(score,idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = { 
    showScore
};