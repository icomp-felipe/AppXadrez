'use strict';
module.exports = (sequelize, DataTypes) => {
    const partida = sequelize.define('partida', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        id_user_1: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_user_2: {
            type: DataTypes.INTEGER
        },
        winner: {
            type: DataTypes.INTEGER
        },
        fen: {
            type: DataTypes.STRING
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
    partida.associate = function (models) {
        // associations can be defined here
    };
    return partida;
};