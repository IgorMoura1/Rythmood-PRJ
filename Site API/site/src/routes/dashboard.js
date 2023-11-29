var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/infoDashboard", function (req, res) {
    dashboardController.infoDashboard(req, res);
})

module.exports = router;



var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [listaScore[0].pontuacao, listaScore[1].pontuacao],
        datasets: [{
            label: 'Dados de Exemplo',
            data: [listaScore[0].qtdPessoasQueAcertaram, listaScore[1].qtdPessoasQueAcertaram],
            borderWidth: 1
            // ... outras opções de dataset
        }]
    },
    options: {
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 14, // Tamanho da fonte do eixo x
                        weight: 'bold' // Peso da fonte do eixo x
                    },
                    color: 'blue' // Cor do texto do eixo x
                }
            },
            y: {
                ticks: {
                    font: {
                        size: 14, // Tamanho da fonte do eixo y
                        weight: 'bold' // Peso da fonte do eixo y
                    },
                    color: 'green' // Cor do texto do eixo y
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 16, // Tamanho da fonte da legenda
                        weight: 'bold' // Peso da fonte da legenda
                    },
                    color: 'purple' // Cor do texto da legenda
                }
            }
        },
        // ... outras opções
    }
});