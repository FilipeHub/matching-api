const mongoose = require('mongoose');


const GravacaoSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    ramal: {
        type:String,
        required: true,
    },
    dataGravacao : {
        type: Date,
        required: true,
    }
});

module.exports = mongoose.model('Gravacao', GravacaoSchema);

