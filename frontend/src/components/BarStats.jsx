import React, { useEffect, useState } from 'react'
import { Container, Stack } from 'react-bootstrap'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

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
}

function BarStats({ meds }) {
    const [labels, setLabels] = useState([])
    const [quant, setQuant] = useState([])
    useEffect(() => {
        const medsVencimento = {}
        for (const obj of meds) {
            // console.log(obj)
            const valor = obj.vencimento.slice(0, 4)
            // console.log(valor)
            medsVencimento[valor] = (medsVencimento[valor] || 0) + 1
        }
        console.log(medsVencimento)

        setLabels(Object.keys(medsVencimento))
        setQuant(Object.values(medsVencimento))
    }, [meds])

    console.log(labels, quant)

    const data = {
        labels: labels,
        datasets: [
            // {
            //     label: 'Despesas',
            //     data: [4, 5, 6],
            //     backgroundColor: '#E2B13D',
            // },
            {
                label: 'Medicamentos cadastrados',
                data: quant,
                backgroundColor: '#3dcabc',

                // backgroundColor: [
                //     '#00d4ff',
                //     '#17d0e6',
                //     '#29cdd2',
                //     '#3dcabc',
                //     '#4dc7aa',
                //     '#5fc496',
                //     '#73c07f',
                //     '#83bd6d',
                //     '#9ab954',
                //     '#acb640',
                //     '#beb32c',
                //     '#c9b120',
                // ],
            },
        ],
    }
    return (
        <Container className='bg-white round main-shadow'>
            <Stack className='p-3'>
                <div className='transaction_month'>
                    <h5>Ano de vencimento</h5>
                </div>
                <Bar options={options} data={data} />
            </Stack>
        </Container>
    )
}

export default BarStats
