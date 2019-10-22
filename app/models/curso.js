'use strict';
module.exports = (sequelize, DataTypes) => {
    const curso = sequelize.define('curso', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        sigla: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [4,50],
                    msg : "O nome do curso precisa ter entre 4 e 50 caracteres!"
                }
            }
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        id_area: {
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
    curso.associate = function (models) {
        curso.hasOne(models.area);
    };
    return curso;
};