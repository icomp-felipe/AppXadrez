'use strict';

module.exports = {

    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('area', [
            {
                id: 1,
                nome: "Agrárias"
            },
            {
                id: 2,
                nome: "Biológicas"
            },
            {
                id: 3,
                nome: "Exatas"
            },
            {
                id: 4,
                nome: "Humanas"
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('area', null, {});

    }
};
