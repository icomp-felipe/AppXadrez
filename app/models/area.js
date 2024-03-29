'use strict';
module.exports = (sequelize, DataTypes) => {
    const area = sequelize.define('area', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        }
    }, {
        underscored: true,
        freezeTableName: true
    });
    area.associate = function (models) {
        area.belongsTo(models.curso, { foreignKey: 'id' });
    };
    return area;
};