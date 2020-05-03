const mongoose = require('mongoose');

const TabulacaoSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    nomeCliente: {
        type: String,
        required: true
    },
    protocolo: {
        type:String,
        required: true,
        unique: true,
    },
    dataAtendimento : {
        type: Date,
        required: true,
    },
    numeroBinado : {
        type: String,
        required: true,
    },
    numeroAcesso : {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Tabulacao', TabulacaoSchema);
