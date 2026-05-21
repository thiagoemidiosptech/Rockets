var database = require("../database/config")

function inserir(acertos, erradas, nome) {
    
    var instrucaoSql = `
        INSERT INTO quiz (acertos, erradas, nome) VALUES ('${acertos}', '${erradas}', '${nome}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    inserir,
};