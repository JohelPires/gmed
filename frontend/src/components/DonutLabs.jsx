import React, { useEffect, useState } from 'react'
import { Container, Stack } from 'react-bootstrap'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { despesas } from '../data/categorias'
import meses from '../data/meses'

ChartJS.register(ArcElement, Tooltip, Legend)

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'left',
        },
    },
}

function DonutLabs({ meds }) {
    const [totMedsPerLab, setTotMedsPerLab] = useState({})

    useEffect(() => {
        const result = {}

        meds.forEach((med) => {
            const { laboratorio, quantidade } = med
            if (!result[laboratorio]) {
                result[laboratorio] = quantidade
            } else {
                result[laboratorio] += quantidade
            }
        })

        setTotMedsPerLab(result)
    }, [meds])

    const data = {
        labels: Object.keys(totMedsPerLab),
        datasets: [
            {
                label: 'Despesas',
                data: Object.values(totMedsPerLab),
                backgroundColor: [
                    'rgb(4, 191, 191)',
                    'rgb(52, 152, 219)',
                    'rgb(121, 154, 224)',
                    'rgb(54, 95, 183)',
                    'rgb(173, 213, 247)',
                    'rgb(14, 234, 255)',
                    'rgb(0, 48, 90)',
                    'rgb(41, 98, 255)',
                    'rgb(53, 71, 140)',
                    'rgb(0, 146, 178)',
                    'rgb(28, 63, 253)',
                    'rgb(2, 8, 115)',
                    'rgb(0, 75, 141)',
                    'rgb(4, 102, 140)',
                    'rgb(2, 136, 209)',
                ],
                borderColor: 'rgba(255, 255, 255, 0.9)',
                borderWidth: 2,
            },
        ],
    }
    return (
        <Container className='bg-white round main-shadow'>
            <Stack className='p-3'>
                <div className='transaction_month'>
                    <h5>Quantidades por laboratório</h5>
                </div>
                <div className='donut'>
                    {meds.length > 0 ? (
                        <Doughnut style={{ maxHeight: '200px' }} data={data} options={options} />
                    ) : (
                        'Sem dados.'
                    )}
                </div>
            </Stack>
        </Container>
    )
}

export default DonutLabs
