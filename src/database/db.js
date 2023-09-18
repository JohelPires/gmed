const Sequelize = require('sequelize')
const config = require('./config/config')

// const sequelize = new Sequelize('gmed', 'postgres', '123', {
//     dialect: 'postgres',
//     host: 'localhost',
// })

const sequelize = new Sequelize('gmed', 'postgres', '123', {
    dialect: 'postgres',
    host: 'localhost',
})

// console.log(config.development)

// const sequelize = new Sequelize(config.development.url)

module.exports = sequelize
