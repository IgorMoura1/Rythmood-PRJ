var database = require ("../database/config");

function buscarDashboard() {
    var instrucao = `select score as pontuacao, count(score) as qtdPessoasQueAcertaram from ranking group by score order by score limit 5;`

    console.log("Executando a instrução SQL \n" + instrucao);
    return database.executar(instrucao);
}



function buscarRanking() {
    var instrucao = `select score as pontuacao, count(score) as qtdPessoasQueAcertaram from ranking group by score order by score limit 5;`

    console.log("Executando a instrução SQL \n" + instrucao);
    return database.executar(instrucao);
}

function buscarFormulario() {
    var instrucao = `select score as pontuacao, count(score) as qtdPessoasQueAcertaram from ranking group by score order by score limit 5;`

    console.log("Executando a instrução SQL \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    buscarDashboard,
    buscarRanking,
    buscarFormulario
}