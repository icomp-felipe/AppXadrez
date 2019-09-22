'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    id_curso: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};