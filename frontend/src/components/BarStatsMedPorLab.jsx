import React, { useEffect, useState } from 'react'
import { Container, Stack } from 'react-bootstrap'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

function BarStatsMedPorLab({ meds }) {
    // console.log(meds)
    const [noveLabs, setNoveLabs] = useState([])
    const [quant, setQuant] = useState([])

    useEffect(() => {
        const medsPorLab = {}
        for (const obj of meds) {
            // console.log(obj)
            const valor = obj.laboratorio
            // console.log(valor)
            medsPorLab[valor] = (medsPorLab[valor] || 0) + 1
        }

        // Convert the original object to an array of key-value pairs
        const keyValueArray = Object.entries(medsPorLab)

        // Sort the array in descending order based on quantity values
        keyValueArray.sort((a, b) => b[1] - a[1])

        // Slice the first 9 elements from the sorted array
        const top9Labs = keyValueArray.slice(0, 15)

        // Convert the sliced array back into an object
        const resultObject = Object.fromEntries(top9Labs)

        // console.log(resultObject)
        console.log(resultObject)

        setNoveLabs(Object.keys(resultObject))
        setQuant(Object.values(resultObject))
    }, [meds])
    // console.log(noveLabs, quant)

    // const noveLabs = [
    //     'BRISTOL-MYERS...',
    //     'BRISTOL-MYERS SQUIBB FARMACEUTICA LTDA',
    //     '2BRISTOL-MYERS SQUIBB FARMACEUTICA LTDA025',
    //     '2BRISTOL-MYERS SQUIBB FARMACEUTICA LTDA025',
    //     '2BRISTOL-MYERS SQUIBB FARMACEUTICA LTDA025',
    //     '2BRISTOL-MYERS SQUIBB FARMACEUTICA LTDA025',
    //     '2BRISTOL-MYERS SQUIBB FARMACEUTICA LTDA025',
    //     '2BRISTOL-MYERS SQUIBB FARMACEUTICA LTDA025',
    //     '2BRISTOL-MYERS SQUIBB FARMACEUTICA LTDA025',
    //     '2BRISTOL-MYERS SQUIBB FARMACEUTICA LTDA025',
    // ]
    const data = {
        labels: noveLabs,
        datasets: [
            // {
            //     label: 'Despesas',
            //     data: [40000, 50000, 60000],
            //     backgroundColor: '#E2B13D',
            // },
            {
                label: 'Quantidade',
                data: quant,
                backgroundColor: '#49ABED',
            },
        ],
    }
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            // title: {
            //     display: true,
            //     text: 'Chart.js Bar Chart',
            // },
        },
        scales: {
            x: {
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function (value, index, values) {
                        return `${noveLabs[index].slice(0, 9)}...`
                    },
                },
            },
        },
    }
    return (
        <Container className='bg-white round main-shadow'>
            <Stack className='p-3'>
                <div className='transaction_month'>
                    <h5>Medicamentos cadastrados por laboratório</h5>
                </div>
                <Bar options={options} data={data} />
            </Stack>
        </Container>
    )
}

export default BarStatsMedPorLab
