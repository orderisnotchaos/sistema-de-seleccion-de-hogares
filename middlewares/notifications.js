
const db = require('../database/models');

module.exports = async (req,res,next) =>{

    const properties = await db.Property.findAll({include:[{association:"characteristics"}]});

    if(!properties) return res.render("<h1>server error</h1>");

    const clients = await db.Client.findAll({include:[{association:"demands"}]});

    if(!clients) return res.render("<h1>server error</h1>");

    
    let perfectMatches = [];
    let partialMatches = [];
    
    for(let i = 0; i < clients.length; i++){
        let matches = 0;
        for(let j = 0; j < properties.length; j++){

            if(clients[i].propertyType !== properties[j].type){
                
            }else{
                for(let k = 0; k< clients[i].demands.length; i++){
                    for(let l = 0; l<properties[j].characteristics.length;l++){
                        if(clients[i].demands[k] === properties[j].characteristics[l]){
                            matches ++;
                        }
                    }
                }
                if(matches === clients[i].demands.length && matches === properties[j].characteristics.length){

                    perfectMatches.push({client:clients[i],property:properties[j]});

                }else if(matches/clients[i].demands.length >= 0.4){
                    partialMatches.push({client:clients[i],property:properties[j]});
                }

                matches = 0;
            }
        }
    }

    for(let i = 0; i < perfectMatches.length; i++){
        try{

            await db.PerfectMatch.create({clientId:perfectMatches[i].client.id,propertyId:perfectMatches[i].property.id});

        }catch(err){

            if(err.code == 'ER_DUP_ENTRY'){
                perfectMatches.splice(i,1);
            }
            perfectMatches.splice(i,1);
        }
    }

    for(let i = 0; i < partialMatches.length; i++){
        try{

            await db.PartialMatch.create({clientId:partialMatches[i].client.id,propertyId:partialMatches[i].property.id});

        }catch(err){

            if(err.code == 'ER_DUP_ENTRY'){
                partialMatches.splice(i,1);
            }
            partialMatches.splice(i,1);
        }
    }

    req.matches = {perfectMatches,partialMatches}
        next();

}