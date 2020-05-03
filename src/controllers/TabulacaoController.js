const Tabulacao = require( '../models/Tabulacao');

module.exports = {
    
    /**
    * @api {post} /tabulacao Create a new Tabulacao
    * @apiName CreateTabulacao
    * @apiGroup Tabulacoes
    * 
    * @apiParam {id} Number Tabulacao id
    * @apiParam {String} nomeCliente Tabulacao nomeCliente
    * @apiParam {String} protocolo Tabulacao protocolo
    * @apiParam {Date} dataAtendimento Tabulacao dataAtendimento
    * @apiParam {String} numeroBinado Tabulacao numeroBinado
    * @apiParam {String} numeroAcesso Tabulacao numeroAcesso
    * 
    * @apiError CreateTabulacaoFailed an unexpected error occurs in the storage of the Tabulacao in the data base
    * 
    * @apiErrorExample Error-response
    * HTTP/1.1 400 Error creating a new Tabulacao
    * 
    * {
    *    error: "Save Tabulacao failed"
    * }
    * 
    * 
    * @apiVersion 1.0.0
    * 
    */
   async store(req, res){
       try {
           const {id, nomeCliente, protocolo, dataAtendimento, numeroBinado, numeroAcesso } = req.body;
           
           const tabulacao = await Tabulacao.create({id, nomeCliente, protocolo, dataAtendimento, numeroBinado, numeroAcesso});
            
           res.json(tabulacao);
       } catch (error) {
           return res.status(400).send({ error : "Save tabulacao failed"});
       }
   }

}