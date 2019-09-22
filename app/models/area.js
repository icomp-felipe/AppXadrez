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
            allowNull: false
        }
    }, {
        underscored: true,
        freezeTableName: true
    });
    area.associate = function (models) {
        // associations can be defined here
    };
    return area;
};