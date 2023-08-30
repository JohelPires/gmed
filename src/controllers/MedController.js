// const { Sequelize, DataTypes } = require('sequelize')
// const sequelize = require('../database/db')

// const Usuario = require('../database/models/usuario') //(sequelize, DataTypes)
const Laboratorio = require('../database/models/laboratorio')
const Medicamentos = require('../database/models/medicamentos') //(sequelize, DataTypes)
const { updateSaldo } = require('./UsuarioController')

// TESTADO: OK
function listAll(req, res) {
    Medicamentos.findAll({
        where: {
            // id_usuario: req.userId,
            deletado: false,
        },
        include: Laboratorio,
    })
        .then((result) => {
            res.status(201).json(result)
        })
        .catch((err) => {
            res.status(404).json(err)
        })
}

// {
//     nome,
//     id_principio_ativo,
//     id_laboratorio,
//     registro,
//     ean,
//     apresentacao,
//     id_classe_terapeutica,
//     quantidade,
//     vencimento,
// }

function add(req, res) {
    const medicamento = req.body

    Medicamentos.create(medicamento)
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
