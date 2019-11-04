'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('curso', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            sigla: {
                type: Sequelize.STRING(4),
                allowNull: false
            },
            nome: {
                type: Sequelize.STRING,
                allowNull: false
            },
            descricao: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            area_id: {
                type: Sequelize.INTEGER,
                allowNull: false
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
        return queryInterface.dropTable('curso');
    }
};