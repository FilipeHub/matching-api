const Gravacao = require( '../models/Gravacao');

module.exports = {
    
    /**
    * @api {post} /gravacao Create a new Gravacao
    * @apiName CreateGravacao
    * @apiGroup Gravacoes
    * 
    * @apiParam {id} Number Gravacao id
    * @apiParam {String} telefone Gravacao telefone
    * @apiParam {String} ramal Gravacao ramal
    * @apiParam {Date} dataGravacao Gravacao dataGravacao
    * 
    * @apiError CreateGravacaoFailed an unexpected error occurs in the storage of the Gravacao in the data base
    * 
    * @apiErrorExample Error-response
    * HTTP/1.1 400 Error creating a new Gravacao
    * 
    * {
    *    error: "Save Gravacao failed"
    * }
    * 
    * 
    * @apiVersion 1.0.0
    * 
    */
   async store(req, res){
       try {
           const {id, telefone, ramal, dataGravacao} = req.body;
           
           const gravacao = await Gravacao.create({id, telefone, ramal, dataGravacao});
            
           res.json(gravacao);
       } catch (error) {
           return res.status(400).send({ error : "Save Gravacao failed"});
       }
   }

}