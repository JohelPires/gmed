// const sequelize = require('sequelize')
// const sequelize = require('../database/db')
const { SECRET_KEY, SALT } = require('../secret')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Usuario = require('../database/models/usuario') //(sequelize, DataTypes)
const sequelize = require('../database/db')

function listAll(req, res) {
    Usuario.findAll()
        .then((result) => {
            res.status(201).json(result)
        })
        .catch((err) => {
            res.status(404).json(err)
        })
}

async function login(req, res) {
    const { email, senha } = req.body
    let usuario
    if (email) {
        usuario = await Usuario.findOne({ where: { email } })
    } else {
        return res.status(400).json({ erro: 'Informe um e-mail válido.' })
    }
    // console.log(usuario.id)
    if (!usuario) {
        return res.status(404).json({ erro: 'Usuario não encontrado.' })
    }

    // Verifica se a senha está correta
    const verificaSenha = await bcrypt.compare(senha, usuario.senha)

    if (!verificaSenha) {
        return res.status(400).json({
            erro: 'Senha incorreta.',
        })
    }

    // Gera token de acesso
    const accessToken = jwt.sign({ id: usuario.id }, SECRET_KEY)

    return res.status(200).json({
        accessToken,
        usuario,
    })
}

async function addUsuario(req, res) {
    const { nome, email, senha, matricula } = req.body

    if (!email || !senha || !matricula) {
        return res.status(400).json({
            error: 'Email, senha e matrícula são obrigatórios!',
        })
    }

    const hashedSenha = await bcrypt.hash(senha, SALT)

    const usuario = { nome, email, senha: hashedSenha, matricula }

    Usuario.create(usuario)
        .then((result) => {
            const accessToken = jwt.sign({ id: result.id }, SECRET_KEY)
            res.status(200).json({ result, token: accessToken })
        })
        .catch((err) => {
            res.status(401).json(err)
        })
}

function findId(req, res) {
    const { id } = req.params
    Usuario.findByPk(id)
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

function update(req, res) {
    const { id } = req.params
    Usuario.update(req.body, {
        where: {
            id: parseInt(id),
        },
    })
        .then((result) => {
            res.status(200).json('Dados do usuário atualizados.')
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

async function updateSenha(req, res) {
    const { id } = req.params
    const { senha, novasenha } = req.body

    let usuario
    if (id) {
        usuario = await Usuario.findOne({ where: { id } })
    } else {
        return res.status(400).json({ erro: 'Houve um erro. Id inválido.' })
    }
    // console.log(usuario.id)
    if (!usuario) {
        return res.status(404).json({ erro: 'Usuario não encontrado.' })
    }

    // Verifica se a senha está correta
    const verificaSenha = await bcrypt.compare(senha, usuario.senha)

    if (!verificaSenha) {
        return res.status(400).json({
            erro: 'Senha incorreta.',
        })
    }

    const hashedSenha = await bcrypt.hash(novasenha, SALT)

    // const usuario = { nome, email, senha: hashedSenha, matricula }

    Usuario.update(
        { senha: hashedSenha },
        {
            where: {
                id: parseInt(id),
            },
        }
    )
        .then((result) => {
            res.status(200).json('Senha atualizada.')
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

function deleta(req, res) {
    const { id } = req.params
    Usuario.destroy({
        where: {
            id: parseInt(id),
        },
    })
        .then((result) => {
            if (result) {
                res.status(200).json('Usuário deletado com sucesso.')
            } else {
                res.status(404).json('Usuário não encontrado.')
            }
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

module.exports = { listAll, addUsuario, findId, update, deleta, login, updateSenha }
