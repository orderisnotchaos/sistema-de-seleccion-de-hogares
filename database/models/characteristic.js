module.exports = (sequelize, DataTypes) => {

    let alias = 'Characteristic';
    let cols = {
        
        propertyId:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        characteristicName:{
            type: DataTypes.STRING,
            primaryKey:true,
            allowNull:false
        },
        characteristic:{
            type:DataTypes.STRING,
            allowNull:false
        },


    }
    let config = {
        tableName: 'characteristics',
        timestamps: true,
    };

    let Characteristics = sequelize.define(alias, cols, config);

    Characteristics.associate = (models) =>{

        Characteristics.belongsTo(models.Property, {
            as: 'property',
            foreignKey: 'propertyId',
        });
    }
    return Characteristics;
    };