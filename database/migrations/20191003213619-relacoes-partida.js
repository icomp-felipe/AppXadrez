'use strict';

module.exports = {

    up: (queryInterface, Sequelize) => {

        return Promise.all([
            queryInterface.addConstraint('partida', ['user_id_1'], {
                type: 'foreign key',
                name: 'partida_user_id_1_fk',
                references: {
                    table: 'user',
                    field: 'id'
                },
                onDelete: 'restrict',
                onUpdate: 'restrict'
            }),
            queryInterface.addConstraint('partida', ['user_id_2'], {
                type: 'foreign key',
                name: 'partida_user_id_2_fk',
                references: {
                    table: 'user',
                    field: 'id'
                },
                onDelete: 'restrict',
                onUpdate: 'restrict'
            }),
            queryInterface.addConstraint('partida', ['winner'], {
                type: 'foreign key',
                name: 'partida_winner_fk',
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

        return queryInterface.removeConstraint('partida','partida_user_id_1_fk');
        return queryInterface.removeConstraint('partida','partida_user_id_2_fk');
        return queryInterface.removeConstraint('partida','partida_winner_fk');

    }

};
