const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../db')
const Usuario = require('./usuario')

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
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ean: {
            type: DataTypes.INTEGER,
            // allowNull: false,
        },
        apresentacao: {
            type: DataTypes.STRING,
        },
        id_classe_terapeutica: {
            type: DataTypes.INTEGER,
        },
        quantidade: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        vencimento: {
            type: DataTypes.DATEONLY,
        },
        deletado: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    { freezeTableName: true }
)
// Transacao.associate = function (models) {
//     Transacao.belongsTo(models.Conta, { foreignKey: 'id_conta' })
//     Transacao.belongsTo(models.Categoria, { foreignKey: 'id_categoria' })
// }

module.exports = Medicamentos
