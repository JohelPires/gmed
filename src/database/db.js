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

// const sequelize = new Sequelize(
//     'postgres://kkyicuqc:W5h4zwgdGD6rQZa-_U-KfKnhOhBeJxLB@silly.db.elephantsql.com/kkyicuqc'
// )

// const sequelize = new Sequelize(
//     'postgres://gmed:4CHc2naatlBTDVLQO4dMH8xYebhQgVkl@dpg-ck4adqnqj8ts73brtqbg-a.oregon-postgres.render.com/gmed'
// )

// const sequelize = new Sequelize('postgres://gmed:4CHc2naatlBTDVLQO4dMH8xYebhQgVkl@dpg-ck4adqnqj8ts73brtqbg-a/gmed')

module.exports = sequelize
