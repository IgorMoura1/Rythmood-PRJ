var express = require("express");
var router = express.Router();

var gameController = require("../controllers/gameController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/showScore", function (req, res) {
    gameController.showScore(req, res);
});

module.exports = router;