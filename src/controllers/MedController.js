// const { Sequelize, DataTypes } = require('sequelize')
// const sequelize = require('../database/db')

// const Usuario = require('../database/models/usuario') //(sequelize, DataTypes)
const Classeterapeutica = require('../database/models/classeterapeutica')
const Laboratorio = require('../database/models/laboratorio')
const Medicamentos = require('../database/models/medicamentos') //(sequelize, DataTypes)
const Principioativo = require('../database/models/principioativo')
const { updateSaldo } = require('./UsuarioController')

// TESTADO: OK
function listAll(req, res) {
    Medicamentos.findAll({
        where: {
            // id_usuario: req.userId,
            deletado: false,
        },
        include: [Laboratorio, Principioativo, Classeterapeutica],
    })
        .then((result) => {
            const obj = result.map((item) => {
                return {
                    id: item.id,
                    nome: item.nome,
                    principioativo: item.principioativo.nome,
                    id_principio_ativo: item.id_principio_ativo,
                    id_laboratorio: item.id_laboratorio,
                    laboratorio: item.laboratorio.nome,
                    registro: item.registro,
                    ean: item.ean,
                    apresentacao: item.apresentacao,
                    id_classe_terapeutica: item.id_classe_terapeutica,
                    classeterapeutica: item.classeterapeutica.nome,
                    quantidade: item.quantidade,
                    vencimento: item.vencimento,
                }
            })
            res.status(201).json(obj)
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

// TESTADO: OK
function add(req, res) {
    const medicamento = req.body

    Medicamentos.create(medicamento)
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            const erros = err.errors.map((item) => item.message)
            res.status(400).json(erros)
            // res.status(400).json(
            //     'Informe nome, id_principio_ativo, id_laboratorio, registro, ean, apresentacao, id_classe_terapeutica, quantidade, vencimento'
            // )
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
                res.status(200).json('Medicamento atualizado.')
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
        { deletado: true },
        {
            where: {
                id: parseInt(id),
            },
        }
    )
        .then((result) => {
            if (result[0]) {
                res.status(200).json('Medicamento apagado.')
            } else {
                res.status(404).json('não encontrado.')
            }
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

module.exports = { listAll, add, findId, update, deleta }
