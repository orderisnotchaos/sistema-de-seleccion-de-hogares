module.exports = (sequelize, DataTypes) => {

    let alias = 'Client';

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type:DataTypes.STRING,

        },
        email:{
            type:DataTypes.STRING,
        },
        phone:{
            type:DataTypes.STRING,
        },
        direction:{
            type:DataTypes.STRING,
        },
        city:{
            type:DataTypes.STRING,
        },
        searchingFor:{
            type:DataTypes.STRING,
            allowNull: false
        }
    };

    let config = {
        tableName: 'client',
        timestamps: true,
    };

    let client = sequelize.define(alias, cols, config);

    client.associate = (models) =>{
        client.hasMany(models.Demand, {
            as: 'demands',
            foreignKey: 'clientId'
        });
    }

    return client;
    };