
module.exports = (sequelize, DataTypes) => {

    let alias = 'Demand';

    let cols = {
        clientId:{
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false
        },
        demand:{

            type:DataTypes.STRING,
            allowNull:false
        },
        demandName:{
            type:DataTypes.STRING,
            primaryKey:true,
            allowNull:false
        }

    };

    let config = {
        tableName: 'demand',
        timestamps: true,
    };

    let Demand = sequelize.define(alias, cols, config);

    Demand.associate = (models) =>{

        Demand.belongsTo(models.Client, {

            as: 'client',
            foreignKey: 'clientId'
            
        });

    }

    return Demand;
};