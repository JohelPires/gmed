const express = require('express')
const database = require('./src/database/db')
// const routes = require('./src/Routes/routes')
const rotasUsuario = require('./src/Routes/rotasUsuario')
// const rotasCategoria = require('./src/Routes/rotasCategoria')
const rotasMed = require('./src/Routes/rotasMed')
const rotasLab = require('./src/Routes/rotasLab')
const rotasPA = require('./src/Routes/rotasPA')
const rotasCT = require('./src/Routes/rotasCT')
require('./src/database/models/classeterapeutica')

const app = express()

const cors = require('cors')
app.use(
    cors({
        origin: '*',
    })
)

app.use(express.json())
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
        app.listen(5000, () => {
            console.log('Servidor rodando na porta 5000.')
        })
    })
    .catch((err) => {
        console.log(err)
    })
