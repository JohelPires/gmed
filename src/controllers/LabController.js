// const { Sequelize, DataTypes } = require('sequelize')
// const sequelize = require('../database/db')

// const Usuario = require('../database/models/usuario') //(sequelize, DataTypes)
const Laboratorio = require('../database/models/laboratorio') //(sequelize, DataTypes)

// TESTADO: OK
function listAll(req, res) {
    Laboratorio.findAll({
        // where: {
        //     // id_usuario: req.userId,
        //     deletado: false,
        // },
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
    const { nome, cnpj } = req.body
    // const id_usuario = req.userId
    Laboratorio.create({ nome, cnpj })
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            // if (err.errors)
            res.status(400).json('Informe nome e cnpj')
        })
}

function findId(req, res) {
    const { id } = req.params
    Laboratorio.findByPk(id)
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
    Laboratorio.update(req.body, {
        where: {
            id: parseInt(id),
        },
    })
        .then((result) => {
            if (result[0]) {
                res.status(200).json('Laboratorio atualizada.')
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
    Laboratorio.destroy({
        where: {
            id: parseInt(id),
        },
    })
        .then((result) => {
            if (result) {
                res.status(200).json('Laboratorio apagado.')
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
//     Laboratorio.update(
//         { deletado: true },
//         {
//             where: {
//                 id: parseInt(id),
//             },
//         }
//     )
//         .then((result) => {
//             if (result[0]) {
//                 res.status(200).json('Laboratorio apagado.')
//             } else {
//                 res.status(404).json('não encontrado.')
//             }
//         })
//         .catch((err) => {
//             res.status(400).json(err)
//         })
// }

module.exports = { listAll, add, findId, update, deleta }
