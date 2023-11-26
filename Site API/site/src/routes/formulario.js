var express = require("express");
var router = express.Router();

var formularioController = require("../controllers/formularioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/enviarFormulario", function (req, res) {
    formularioController.enviarFormulario(req, res);
});

module.exports = router;