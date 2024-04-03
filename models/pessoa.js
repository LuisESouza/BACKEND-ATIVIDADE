const { Schema } = require("mongoose");
const mongoose = require('mongoose');

const schemaPessoa = new Schema({
    nome: String,
    cpf: String,
    ra: String,
    idade: String
});

const modeloPessoa = mongoose.model('Pessoa', schemaPessoa);

module.exports = modeloPessoa;