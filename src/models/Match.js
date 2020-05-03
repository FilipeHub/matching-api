var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection(process.env.DB_CONNECTION,
    {useNewUrlParser:true,
    useUnifiedTopology: true});

autoIncrement.initialize(connection);
 
const MatchSchema = new Schema({
    id: {
        type: Number,
        autoIncrement: true
    },
    gravacaoId: {
        type: Number,
        required: true
    },
    tabulacaoId: {
        type: Number,
        required: true
    },
});

MatchSchema.plugin(autoIncrement.plugin, 'Match');

module.exports = connection.model('Match', MatchSchema);