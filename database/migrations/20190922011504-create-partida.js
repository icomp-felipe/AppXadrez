'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('partida', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            user_id_1: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            user_id_2: {
                type: Sequelize.INTEGER
            },
            winner: {
                type: Sequelize.INTEGER
            },
            fen: {
                type: Sequelize.STRING
            },
            created_at: {
                type: Sequelize.DATE
            },
            updated_at: {
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('partida');
    }
};