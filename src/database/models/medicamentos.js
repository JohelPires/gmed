const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../db')
const Usuario = require('./usuario')
const PrincipioAtivo = require('./principioativo') // Import the PrincipioAtivo model
const Laboratorio = require('./laboratorio') // Import the Laboratorio model
const ClasseTerapeutica = require('./classeterapeutica') // Import the ClasseTerapeutica model

// "nome": "ORENCIA",
// "principio_aivo": "ABATACEPTE",
// "CNPJ": "56.998.982/0001-07",
// "laboratorio": "BRISTOL-MYERS SQUIBB FARMACEUTICA LTDA",
// "registro": "1018003900027",
// "EAN": "7896016807442",
// "apresentacao": "125 MG/ML SOL INJ CT 1 SER PREENCHIDA",
// "classe_terapeutica": "M01C0 - AGENTES ANTI-REUMATICOS ESPECIFICOS",
// "quantidade": 1000,
// "vencimento": "05/2025"

const Medicamentos = sequelize.define(
    'medicamentos',
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
        id_principio_ativo: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_laboratorio: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        registro: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        ean: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        apresentacao: {
            type: DataTypes.STRING,
        },
        id_classe_terapeutica: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        quantidade: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        vencimento: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
    },
    { freezeTableName: true }
)

// Set up the associations
Medicamentos.belongsTo(PrincipioAtivo, { foreignKey: 'id_principio_ativo' })
Medicamentos.belongsTo(Laboratorio, { foreignKey: 'id_laboratorio' })
Medicamentos.belongsTo(ClasseTerapeutica, { foreignKey: 'id_classe_terapeutica' })

module.exports = Medicamentos
