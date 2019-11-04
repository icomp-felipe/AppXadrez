'use strict';
module.exports = (sequelize, DataTypes) => {
    const mensagem = sequelize.define('mensagem', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        partida_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        mensagem: {
            type: DataTypes.STRING,
            allowNull: false
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
    mensagem.associate = function (models) {
        // associations can be defined here
    };
    return mensagem;
};