
const db = require('../database/models');


module.exports = {
    all : async (req,res) =>{

        let houses = await db.Houses.findAll();

        return res.status(200).json(houses);
    }
}