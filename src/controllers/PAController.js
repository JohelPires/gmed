// const { Sequelize, DataTypes } = require('sequelize')
// const sequelize = require('../database/db')

// const Usuario = require('../database/models/usuario') //(sequelize, DataTypes)
const Principioativo = require('../database/models/principioativo') //(sequelize, DataTypes)

// TESTADO: OK
function listAll(req, res) {
    Principioativo.findAll({
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

// TESTADO: OK
function add(req, res) {
    const { nome } = req.body
    // const id_usuario = req.userId
    Principioativo.create({ nome })
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

function findId(req, res) {
    const { id } = req.params
    Principioativo.findByPk(id)
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

// TESTADO: OK
function update(req, res) {
    const { id } = req.params
    Principioativo.update(req.body, {
        where: {
            id: parseInt(id),
        },
    })
        .then((result) => {
            if (result[0]) {
                res.status(200).json('Principio ativo atualizado.')
            } else {
                res.status(404).json('não encontrado.')
            }
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

function deleta(req, res) {
    const { id } = req.params
    Principioativo.destroy({
        where: {
            id: parseInt(id),
        },
    })
        .then((result) => {
            if (result) {
                res.status(200).json('Principio ativo apagado.')
            } else {
                res.status(404).json('não encontrado.')
            }
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

// TESTADO: OK
// function deleta(req, res) {
//     const { id } = req.params
//     Principioativo.update(
//         { deletado: true },
//         {
//             where: {
//                 id: parseInt(id),
//             },
//         }
//     )
//         .then((result) => {
//             if (result[0]) {
//                 res.status(200).json('Principio ativo apagado.')
//             } else {
//                 res.status(404).json('não encontrado.')
//             }
//         })
//         .catch((err) => {
//             res.status(400).json(err)
//         })
// }

module.exports = { listAll, add, findId, update, deleta }
