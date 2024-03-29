'use strict';
module.exports = (sequelize, DataTypes) => {
    const partida = sequelize.define('partida', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        user_id_1: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id_2: {
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
        partida.belongsTo(models.user, { foreignKey: "user_id_1", as: "ownerPlayer"   });
        partida.belongsTo(models.user, { foreignKey: "user_id_2", as: "invitedPlayer" });
        partida.belongsTo(models.user, { foreignKey: "winner"   , as: "winnerPlayer"  });
    };
    return partida;
};