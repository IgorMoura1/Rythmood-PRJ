var dashboardModel = require("../models/dashboardModel");

function infoDashboard(req, res) {
    dashboardModel.buscarDashboard()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(error => {
        console.error("Erro ao processar a solicitação:", error);
        res.status(500).json({ error: "Erro interno do servidor"});
    });
}

function infoRanking(req, res) {
    dashboardModel.buscarRanking()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(error => {
        console.error("Erro ao processar a solicitação:", error);
        res.status(500).json({ error: "Erro interno do servidor"});
    });
}

function infoFormulario(req, res) {
    dashboardModel.buscarFormulario()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(error => {
        console.error("Erro ao processar a solicitação:", error);
        res.status(500).json({ error: "Erro interno do servidor"});
    });
}


module.exports = {
    infoDashboard,
    infoRanking,
    infoFormulario
}