
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

            if(clients[i].demands[0].propertyType == properties[j].characteristics[0].propertyType){
                matches++;
            }

            if(clients[i].demands[0].roomsQuantity == properties[j].characteristics[0].roomsQuantity){
                matches++;
            }

            if(clients[i].demands[0].bathroomsQuantity == properties[j].characteristics[0].bathroomsQuantity){
                matches++;
            }

            if(clients[i].demands[0].cocherasQuantity == properties[j].characteristics[0].cocherasQuantity){
                matches++;
            }

            if(clients[i].demands[0].floorsQuantity == properties[j].characteristics[0].floorsQuantity){
                matches++;
            }

            if(clients[i].demands[0].sqmc == properties[j].characteristics[0].sqmc){
                matches++;
            }

            if(clients[i].demands[0].sqmt == properties[j].characteristics[0].sqmt){
                matches++;
            }

            if(clients[i].demands[0].antiquity == properties[j].characteristics[0].antiquity){
                matches++;
            }
            if(matches >= 4){

                partialMatches.push({client:clients[i],property:properties[j]});
            }

            if(matches === 8){

                perfectMatches.push({client:clients[i],property:properties[j]});
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