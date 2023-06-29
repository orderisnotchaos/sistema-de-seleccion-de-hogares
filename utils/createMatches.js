
const db = require('../database/models');

module.exports = async(properties, clients) => {

    let perfectMatches = [];
    let partialMatches = [];

    for(let i = 0; i < clients.length; i++){
        let matches = 0;
        for(let j = 0; j < properties.length; j++){

            if(clients[i].searchingFor !== properties[j].type){
                
            }else{
                for(let k = 0; k < clients[i].demands.length; k++){
                    for(let l = 0; l<properties[j].characteristics.length;l++){
                        
                        if(clients[i].demands[k].demandName === properties[j].characteristics[l].characteristicName){
                            if(clients[i].demands[k].demand === properties[j].characteristics[l].characteristic){
                                matches ++;
                            }
                        }
                    }
                }
                console.log(matches,clients[i].demands.length,properties[j].characteristics.length);
                if(matches === clients[i].demands.length && matches === properties[j].characteristics.length){

                   perfectMatches.push({client:clients[i],property:properties[j]});

                }else if(matches/clients[i].demands.length >= 0.4){
                    partialMatches.push({client:clients[i],property:properties[j]});
                }

                
            }

            matches = 0;
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

    return [...perfectMatches, ...partialMatches];
};