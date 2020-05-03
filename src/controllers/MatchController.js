const Gravacao = require( '../models/Gravacao');
const Tabulacao = require( '../models/Tabulacao');
const Match = require('../models/Match');

async function saveMatch(grav, tab){
    if((grav.telefone == tab.numeroBinado) || (grav.telefone == tab.numeroAcesso)){
        const match = await Match.findOne({gravacaoId: grav.id, tabulacaoId : tab.id});
        if(!match){
            console.log(match);
            await Match.create({gravacaoId : grav.id , tabulacaoId : tab.id});
        }
    }
}

module.exports = {
    
    /**
    * This service is running by default with certain period of time
    * 
    */
   async store(){
       try {
           const gravacoes = await Gravacao.find();
           const tabulacoes = await Tabulacao.find();
           
           tabulacoes.map(tab => {
               gravacoes.map(grav => saveMatch(grav, tab)) 
           })
        } catch (error) {
            
           return res.status(400).send({ error : "Save Matching failed"});
       }
   },

   /**
    * @api {get} /matches Return all the matches of the database
    * @apiName ReadAllMatches
    * @apiGroup Matches 
    * 
    * @apiSuccess {Number} _id Match id.
    * @apiSuccess {Number} gravacaoId User name.
    * @apiSuccess {Number} tabulacaoId User email.
    * 
    * @apiError ReadAllMatchesFailed an unexpected error occurs in the read of all Matches in the database
    * 
    * @apiErrorExample Error-response
    * HTTP/1.1 400 Error reading all matches
    * 
    * {
    *    error: "Read all matches failed"
    * }
    * 
    * 
    * @apiVersion 1.0.0
    * 
    */
   async readAll(req, res){
    try {
        const matchings = await Match.find();
        return res.json(matchings);
    } catch (error) {
        return res.status(400).send({ error : "Reading Matchings failed"});
    }
   }

}