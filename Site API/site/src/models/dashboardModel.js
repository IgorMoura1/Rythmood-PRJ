var database = require ("../database/config");

function buscarDashboard() {
    var instrucao = `select score as pontuacao, count(score) as qtdPessoasQueAcertaram from ranking group by score order by score;`

    console.log("Executando a instrução SQL \n" + instrucao);
    return database.executar(instrucao);
}



function buscarRanking() {
    var instrucao = `select score as pontuacao, nome from ranking join usuario on fkUsuario = id order by score desc limit 5;`

    console.log("Executando a instrução SQL \n" + instrucao);
    return database.executar(instrucao);
}




function buscarFormulario() {
    var instrucao = 
    `SELECT
    (SELECT humor FROM formulario GROUP BY humor ORDER BY COUNT(humor) DESC LIMIT 1) AS humor,
    (SELECT genero FROM formulario GROUP BY genero ORDER BY COUNT(genero) DESC LIMIT 1) AS genero,
    (SELECT descoberta FROM formulario GROUP BY descoberta ORDER BY COUNT(descoberta) DESC LIMIT 1) AS descoberta,
    (SELECT nacionalidade FROM formulario GROUP BY nacionalidade ORDER BY COUNT(nacionalidade) DESC LIMIT 1) AS nacionalidade,
    (SELECT mscImportante FROM formulario GROUP BY mscImportante ORDER BY COUNT(mscImportante) DESC LIMIT 1) AS mscImportante;`

    console.log("Executando a instrução SQL \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    buscarDashboard,
    buscarRanking,
    buscarFormulario
}