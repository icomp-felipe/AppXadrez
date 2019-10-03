'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return Promise.all([
      queryInterface.addConstraint('partida', ['id_user_1'], {
        type: 'foreign key',
        name: 'partida_user1_fk',
        references: {
            table: 'user',
            field: 'id'
        },
            onDelete: 'restrict',
            onUpdate: 'restrict'
        }),
        queryInterface.addConstraint('partida', ['id_user_2'], {
          type: 'foreign key',
          name: 'partida_user2_fk',
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
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
