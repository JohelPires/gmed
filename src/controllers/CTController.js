// const { Sequelize, DataTypes } = require('sequelize')
// const sequelize = require('../database/db')

// const Usuario = require('../database/models/usuario') //(sequelize, DataTypes)
const Classeterapeutica = require('../database/models/classeterapeutica') //(sequelize, DataTypes)

// TESTADO: OK
function listAll(req, res) {
    Classeterapeutica.findAll()
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
    Classeterapeutica.create({ nome })
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

function findId(req, res) {
    const { id } = req.params
    Classeterapeutica.findByPk(id)
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

function update(req, res) {
    const { id } = req.params
    Classeterapeutica.update(req.body, {
        where: {
            id: parseInt(id),
        },
    })
        .then((result) => {
            if (result[0]) {
                res.status(200).json('Classeterapeutica atualizada.')
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
//     Classeterapeutica.destroy({
//         where: {
//             id: parseInt(id),
//         },
//     })
//         .then((result) => {
//             if (result) {
//                 res.status(200).json('Classeterapeutica deletada com sucesso.')
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
    Classeterapeutica.update(
        { deleted: true },
        {
            where: {
                id: parseInt(id),
            },
        }
    )
        .then((result) => {
            if (result[0]) {
                res.status(200).json('Classeterapeutica apagada.')
            } else {
                res.status(404).json('não encontrado.')
            }
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

module.exports = { listAll, add, findId, update, deleta }
