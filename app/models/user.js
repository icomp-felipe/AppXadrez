'use strict';
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [5,100],
                    msg : "Seu nome precisa ter entre 5 e 100 caracteres!"
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    args: true,
                    msg: "Por favor, insira um e-mail válido"
                }
            }
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false
        },
        curso_id: {
            type: DataTypes.INTEGER,
            allowNull: false
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
    user.associate = function (models) {
        // associations can be defined here
    };
    return user;
};