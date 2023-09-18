const express = require('express')
const database = require('./src/database/db')
const path = require('path')
// const routes = require('./src/Routes/routes')
const rotasUsuario = require('./src/Routes/rotasUsuario')
// const rotasCategoria = require('./src/Routes/rotasCategoria')
const rotasMed = require('./src/Routes/rotasMed')
const rotasLab = require('./src/Routes/rotasLab')
const rotasPA = require('./src/Routes/rotasPA')
const rotasCT = require('./src/Routes/rotasCT')
// require('./src/database/models/classeterapeutica')
require('dotenv').config()

// process.env
// process.env.NODE_ENV --> production or undefined
const PORT = process.env.PORT || 5000

const app = express()

const cors = require('cors')
app.use(
    cors({
        origin: '*',
    })
)

app.use(express.json())
app.use(express.static(path.join(__dirname, 'frontend/build')))

if (process.env.NODE_ENV === 'production') {
    // server static content
    // npm run build
}

app.use('/usuario', rotasUsuario)
// app.use('/categoria', rotasCategoria)
app.use('/medicamentos', rotasMed)
app.use('/laboratorios', rotasLab)
app.use('/pa', rotasPA)
app.use('/ct', rotasCT)

database
    .sync({ alter: true, logging: false })
    .then((result) => {
        console.log('Banco de dados conectado.')
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}.`)
        })
    })
    .catch((err) => {
        console.log(err)
    })
