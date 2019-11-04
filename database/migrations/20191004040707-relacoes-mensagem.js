'use strict';

module.exports = {

    up: (queryInterface, Sequelize) => {

        return Promise.all([
            queryInterface.addConstraint('mensagem', ['partida_id'], {
                type: 'foreign key',
                name: 'mensagem_partida_fk',
                references: {
                    table: 'partida',
                    field: 'id'
                },
                onDelete: 'restrict',
                onUpdate: 'restrict'
            }),
            queryInterface.addConstraint('mensagem', ['user_id'], {
                type: 'foreign key',
                name: 'mensagem_user_fk',
                references: {
                    table: 'user',
                    field: 'id'
                },
                onDelete: 'restrict',
                onUpdate: 'restrict'
            })
        ]);

    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.removeConstraint('mensagem','mensagem_partida_fk');
        return queryInterface.removeConstraint('mensagem','mensagem_user_fk');

    }
};
