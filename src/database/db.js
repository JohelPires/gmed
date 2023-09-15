const Sequelize = require('sequelize')
const config = require('./config/config')

// const sequelize = new Sequelize('gmed', 'postgres', '123', {
//     dialect: 'postgres',
//     host: 'localhost',
// })

// const sequelize = new Sequelize('gmed', 'postgres', '123', {
//     dialect: 'postgres',
//     host: 'localhost',
// })

// console.log(config.development)

let sequelize

if (process.env.NODE_ENV === 'production') {
    sequelize = new Sequelize(config.production.url)
} else {
    sequelize = new Sequelize(config.development.url)
}

module.exports = sequelize
