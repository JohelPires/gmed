const lista = require('./listacmed.js')
const classesterapeuticas = []
const fs = require('fs')
const Classeterapeutica = require('../src/database/models/classeterapeutica')

lista.map((item) => {
    const ct = {} // Create a new object for each item
    ct.codigo = item['CLASSE TERAPEUTICA'].slice(0, 5)
    ct.nome = item['CLASSE TERAPEUTICA'].slice(8)
    classesterapeuticas.push(ct)
})

const uniquect = classesterapeuticas.filter(
    (value, index, self) => index === self.findIndex((obj) => obj.codigo === value.codigo && obj.nome === value.nome)
)

const jsonContent = JSON.stringify(uniquect, null, 2) // Convert array to formatted JSON string

const filePath = 'classesTerapeuticas.json'

fs.writeFile(filePath, jsonContent, (err) => {
    if (err) {
        console.error('Error writing JSON file:', err)
    } else {
        console.log('JSON file has been written successfully.')
    }
})

Classeterapeutica.bulkCreate(uniquect)
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.log(err)
    })
