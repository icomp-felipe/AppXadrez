'use strict';

module.exports = {

    up: (queryInterface, Sequelize) => {

        return queryInterface.addConstraint('curso', ['area_id'], {
            type: 'foreign key',
            name: 'curso_area_id_fk',
            references: {
                table: 'area',
                field: 'id'
            },
                onDelete: 'restrict',
                onUpdate: 'restrict'
            })

    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.removeConstraint('curso','curso_area_id_fk');

    }
};
