var express = require("express");
var router = express.Router();

var gameController = require("../controllers/gameController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/scriptGame", function (req, res) {
    gameController.score(req, res);
})

module.exports = router;