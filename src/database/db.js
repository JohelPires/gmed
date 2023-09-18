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

const sequelize = new Sequelize(
    'postgres://kkyicuqc:W5h4zwgdGD6rQZa-_U-KfKnhOhBeJxLB@silly.db.elephantsql.com/kkyicuqc'
)

module.exports = sequelize
