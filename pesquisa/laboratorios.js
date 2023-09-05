const lista = require('./listacmed.js')
const laboratorios = []
const fs = require('fs')
const Laboratorio = require('../src/database/models/laboratorio')

lista.map((item) => {
    const lab = {} // Create a new objelct for each item
    lab.cnpj = item['CNPJ']
    lab.nome = item['LABORATORIO']
    laboratorios.push(lab)
})

const uniquelab = laboratorios
    .filter(
        (value, index, self) => index === self.findIndex((obj) => obj.cnpj === value.cnpj && obj.nome === value.nome)
    )
    .filter((item) => item.cnpj && item.nome)

const uniqueData = []
const seenNames = new Set()

for (const item of uniquelab) {
    if (!seenNames.has(item.nome)) {
        uniqueData.push(item)
        seenNames.add(item.nome)
    }
}

const jsonContent = JSON.stringify(uniqueData, null, 2) // Convert array to formatted JSON string

const filePath = 'laboratorios.json'
fs.writeFile(filePath, jsonContent, (err) => {
    if (err) {
        console.error('Error writing JSON file:', err)
    } else {
        console.log('JSON file has been written successfully.')
    }
})

Laboratorio.bulkCreate(uniqueData)
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.log(err)
    })
