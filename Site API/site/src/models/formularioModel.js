var database = require("../database/config")


// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function enviarFormulario (feeling, genero, descoberta, nacionalidade, mscImportante, idVar) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", feeling, genero, descoberta, nacionalidade, mscImportante, idVar);
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO formulario (humor, genero, descoberta, nacionalidade, mscImportante, fkUsuario) VALUES ('${feeling}', '${genero}', '${descoberta}', '${nacionalidade}', '${mscImportante}', ${idVar});`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



module.exports = {
    enviarFormulario
};