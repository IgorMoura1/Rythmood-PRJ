var database = require ("../database/config");

function buscarDashboard() {
    var instrucao = `select score as pontuacao, count(score) as qtdPessoasQueAcertaram from ranking group by score order by score limit 5;`

    console.log("Executando a instrução SQL \n" + instrucao);
    return database.executar(instrucao);
}



function buscarRanking() {
    var instrucao = `select score as Pontuação, nome as Nome from ranking join usuario on fkUsuario = id order by score desc limit 5;`

    console.log("Executando a instrução SQL \n" + instrucao);
    return database.executar(instrucao);
}



function buscarFormulario() {
    var instrucao = `select humor, count(humor) from formulario group by humor limit 1;
    select genero, count(genero) from formulario group by genero limit 1;
    select descoberta, count(descoberta) from formulario group by descoberta limit 1;
    select nacionalidade, count(nacionalidade) from formulario group by nacionalidade limit 1;
    select mscImportante, count(mscImportante) from formulario group by mscImportante limit 1;`

    console.log("Executando a instrução SQL \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    buscarDashboard,
    buscarRanking,
    buscarFormulario
}