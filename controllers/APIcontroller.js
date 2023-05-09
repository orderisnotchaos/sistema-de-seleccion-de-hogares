
const db = require('../database/models.js');


module.exports = {
    all : async (req,res) =>{

        let houses = await db.Houses.findAll();

        return res.status(200).json({houses});
    }
}