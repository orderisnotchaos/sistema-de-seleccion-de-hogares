const db = require('../database/models');

module.exports=  mainController = {


    index: async (req, res) => {
 
        return res.render('index', {title: 'Home',matches:req.matches}); 

    },

        clients: async (req, res) => {

            const clients = await db.Client.findAll({include:[{model:db.Demand, as:'demands'}]});

            if(!clients) return res.render("<h1>server error</h1>");

            return res.render('clients', {title: 'Clients', clients:clients});

        },

        addClient: async (req, res) => {

            if(!req.body) return res.status(400).render("error: no data sent");

            const client = await db.Client.create({name:req.body.name,
                                                   email:req.body.email,
                                                   phone:req.body.phone,
                                                   direction:req.body.direction,
                                                   city:req.body.city,});
    
            const addDemandsResult = await db.Demand.create({clientId:client.id,
                                                              propertyType:req.body.propertyType,
                                                              roomsQuantity:Number(req.body.roomsQuantity),
                                                              bathroomsQuantity:Number(req.body.bathroomsQuantity),
                                                              cocherasQuantity:Number(req.body.cocherasQuantity),
                                                              floorsQuantity:Number(req.body.floorsQuantity),
                                                              sqmc:req.body.sqmc,
                                                              sqmt:req.body.sqmt,
                                                              antiquity:req.body.antiquity,
                                                              state:req.body.state});

            if(!addDemandsResult) return res.status(500);

            if(!client) return res.render("<h1>server error</h1>");
    
            return res.redirect('/clients');
    
        },
        properties: async (req, res) => {
                
            const properties = await db.Property.findAll({include:[{model:db.Characteristic,as:'characteristics'}]});

            if(!properties) return res.render("<h1>server error</h1>");

            return res.render('properties', {title: 'Properties', properties:properties});

        },

        addProperty: async (req,res) =>{

            if(!req.body) return res.status(400).send("error: no data sent");

            const propertyPivot = await db.Property.findOne({where:{direction:req.body.direction}});

            let property;

            if(!propertyPivot) property = await db.Property.create({ direction:req.body.direction,
                                                        valueRent:req.body.valueRent,
                                                        valueSell:req.body.valueSale,
                                                        lat:Math.random()*100,
                                                        lng:Math.random()*100,});

            if(propertyPivot) return res.status(400).send("error: property already exists");

            if(!property) return res.status(500).send("<h1>server error</h1>");

            const addCharacteristicsRes = await db.Characteristic.create({propertyId:property.id,
                                                                          propertyType:req.body.propertyType,
                                                                          roomsQuantity:Number(req.body.bedroomsQuantity),
                                                                          bathroomsQuantity:Number(req.body.bathroomsQuantity),
                                                                          cocherasQuantity:Number(req.body.cocherasQuantity),
                                                                          floorsQuantity:Number(req.body.floorsQuantity),
                                                                          sqmc:req.body.sqmc,
                                                                          sqmt:req.body.sqmt,
                                                                          antiquity:req.body.antiquity,
                                                                          description:req.body.description,
                                                                          address:req.body.address,
                                                                          city:req.body.city,
                                                                          neighborhood:req.body.neighborhood,
                                                                          province:req.body.province,
                                                                          currency:req.body.currency,
                                                                          operationType:req.body.operationType});

            if(!addCharacteristicsRes) return res.status(500).send("<h1>server error</h1>");

            
            return res.redirect('/properties');
        },

        matches: async (req,res) =>{

            const perfectMatches = await db.PerfectMatch.findAll({});

            const partialMatches = await db.PartialMatch.findAll({});

            if(!perfectMatches || !partialMatches) return res.render("<h1>server error</h1>");

            const matches = {perfectMatches:[],partialMatches:[]};

            for(let i = 0; i<perfectMatches.length; i++){

                const property = await db.Property.findOne({where:{id:perfectMatches[i].propertyId},
                                                            include:{model:db.Characteristic, as:"characteristics"}});
                const client = await db.Client.findOne({where:{id:perfectMatches[i].clientId}});
                matches.perfectMatches.push({property:property,client:client});

            }

            for(let i = 0; i<partialMatches.length;i++){

                const property = await db.Property.findOne({where:{id:partialMatches[i].propertyId},
                                                                   include:{model:db.Characteristic, as:"characteristics"}});

                const client = await db.Client.findOne({where:{id:partialMatches[i].clientId},
                                                               include:[{model:db.Demand, as:'demands'}]});

                
                matches.partialMatches.push({property:property,client:client});

            }
            console.log(matches);
            return res.render('matches', {title: 'Matches', matches:matches});

        },

        editClient: async (req,res) =>{

            if(!req.body) return res.status(400).send("error: no data sent");

            const client = await db.Client.findOne({where:{id:req.params.id}});

            if(!client) return res.status(400).send("error: client not found");

            const demands =[];

            if(Number(req.body.demandsQuantity) > 0){

                for(let i = 0; i< Number(req.body.demandsQuantity); i++){

                    let demand ;

                    try{

                        demand = await db.Demand.create({clientId:client.id,demand:req.body[`demand${i}`]});

                    }catch(error){

                        console.log(error);

                    }

                    demands.push(demand);

                }

            }

            const demandsResult = await Promise.all(demands);

            if(demandsResult.length !== Number(req.body.demandsQuantity)) return res.render("<h1>server error</h1>");

            let updatedClient = await client.update({email:req.body.email,
                           phone:req.body.phone,
                           direction:req.body.direction,
                           city:req.body.city,});

            if(!updatedClient) return res.render("<h1>server error</h1>");

            return res.redirect('/clients');
        },

        deleteDemand : async (req,res) =>{


            if(!req.params.id) return res.status(400).json('need client id');

            if(!req.body.characteristic) return res.status(400).json('need demand');

            const demand = await db.Demand.findOne({where:{clientId:req.params.id,demand:req.body.demand}});
            
            demand.destroy();

            return res.status(201).json({ok:true});
        },

        deleteCharacteristic : async (req,res) =>{

            if(!req.params.id) return res.status(400).json('need property id');

            if(!req.body.characteristic) return res.status(400).json('need characteristic');

            const characteristic = await db.Characteristic.findOne({where:{propertyId:req.params.id,characteristic:req.body.characteristic}});

            if(!characteristic) return res.status(400).json('characteristic not found');

            characteristic.destroy();

            return res.status(201).json({ok:true});
        },

        deleteProperty: async (req,res) =>{
                
            if(!req.params.id) return res.status(400).json('need property id');

            const property = await db.Property.findOne({where:{id:req.params.id}});

            if(!property) return res.status(400).json('property not found');

            await db.Characteristic.destroy({where:{propertyId:req.params.id}});

            await db.PartialMatch.destroy({where:{propertyId:req.params.id}});

            await db.PerfectMatch.destroy({where:{propertyId:req.params.id}});
            
            property.destroy();
    
            return res.status(201).json({ok:true});
        },
        deleteClient: async (req,res) =>{
                    
                    if(!req.params.id) return res.status(400).json('need client id');
        
                    const client = await db.Client.findOne({where:{id:req.params.id}});
        
                    if(!client) return res.status(400).json('client not found');
        
                    await db.Demand.destroy({where:{clientId:req.params.id}});

                    await db.PartialMatch.destroy({where:{clientId:req.params.id}});

                    await db.PerfectMatch.destroy({where:{clientId:req.params.id}});

                    client.destroy();
        
                    return res.status(201).json({ok:true});
            }

};