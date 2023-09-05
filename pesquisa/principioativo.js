const lista = require('./listacmed.js')
const pa = []
const fs = require('fs')
const Principioativo = require('../src/database/models/principioativo')

lista.map((item) => {
    const ct = {} // Create a new object for each item
    ct.nome = item['PRINCIPIO ATIVO']
    pa.push(ct)
})

const uniquect = pa.filter(
    (value, index, self) => index === self.findIndex((obj) => obj.codigo === value.codigo && obj.nome === value.nome)
)

const jsonContent = JSON.stringify(uniquect, null, 2) // Convert array to formatted JSON string

const filePath = 'pa.json'

fs.writeFile(filePath, jsonContent, (err) => {
    if (err) {
        console.error('Error writing JSON file:', err)
    } else {
        console.log('JSON file has been written successfully.')
    }
})

Principioativo.bulkCreate(uniquect)
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.log(err)
    })
