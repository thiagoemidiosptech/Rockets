var quizModel = require("../models/quizModel");

function inserir(req, res) {
    var acertos = req.body.acertos;
    var erradas = req.body.erradas;
    var nome = req.body.nome;

    quizModel.inserir(acertos, erradas, nome)
        .then(
            function (resultado) {
                res.json(true);
            }            
        ).catch(
            function (erro) {
                res.status(500).json(erro.sqlMessage);
            }
        )

}

module.exports = {
    inserir
}