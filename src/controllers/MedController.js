// const { Sequelize, DataTypes } = require('sequelize')
// const sequelize = require('../database/db')

// const Usuario = require('../database/models/usuario') //(sequelize, DataTypes)
const Medicamentos = require('../database/models/medicamentos') //(sequelize, DataTypes)
const { updateSaldo } = require('./UsuarioController')

function listAll(req, res) {
    console.log(typeof Medicamentos)
    Medicamentos.findAll({
        where: {
            // id_usuario: req.userId,
            deletado: false,
        },
    })
        .then((result) => {
            res.status(201).json(result)
        })
        .catch((err) => {
            res.status(404).json(err)
        })
}

function add(req, res) {
    const { valor, descricao, id_conta, frequencia, periodica, id_categoria, data } = req.body
    const id_usuario = req.userId
    updateSaldo(id_usuario, valor)
    Medicamentos.create({ id_usuario, valor, descricao, id_conta, frequencia, periodica, id_categoria, data })
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

function findId(req, res) {
    const { id } = req.params
    Medicamentos.findByPk(id)
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

function update(req, res) {
    const { id } = req.params
    Medicamentos.update(req.body, {
        where: {
            id: parseInt(id),
        },
    })
        .then((result) => {
            if (result[0]) {
                res.status(200).json('Medicamentos atualizada.')
            } else {
                res.status(404).json('não encontrado.')
            }
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

// function deleta(req, res) {
//     const { id } = req.params
//     Medicamentos.destroy({
//         where: {
//             id: parseInt(id),
//         },
//     })
//         .then((result) => {
//             if (result) {
//                 res.status(200).json('Medicamentos deletada com sucesso.')
//             } else {
//                 res.status(404).json('não encontrado.')
//             }
//         })
//         .catch((err) => {
//             res.status(400).json(err)
//         })
// }

function deleta(req, res) {
    const { id } = req.params
    Medicamentos.update(
        { deleted: true },
        {
            where: {
                id: parseInt(id),
            },
        }
    )
        .then((result) => {
            if (result[0]) {
                res.status(200).json('Medicamentos apagada.')
            } else {
                res.status(404).json('não encontrado.')
            }
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

module.exports = { listAll, add, findId, update, deleta }
