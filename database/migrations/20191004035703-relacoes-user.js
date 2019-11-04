'use strict';

module.exports = {

    up: (queryInterface, Sequelize) => {

        return queryInterface.addConstraint('user', ['curso_id'], {
            type: 'foreign key',
            name: 'user_curso_id_fk',
            references: {
                table: 'curso',
                field: 'id'
            },
            onDelete: 'restrict',
            onUpdate: 'restrict'
        })
    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.removeConstraint('user','user_curso_id_fk');

    }
};
