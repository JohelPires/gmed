const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../db')

const Usuario = sequelize.define(
    'usuario',
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        senha: {
            type: DataTypes.STRING,
        },
        matricula: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },
    { freezeTableName: true }
)

module.exports = Usuario
