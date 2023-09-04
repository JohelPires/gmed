import React, { useEffect, useState } from 'react'
import { Container, Stack } from 'react-bootstrap'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

function BarStatsMedPorLab({ meds }) {
    const data = {
        labels: [
            'BRISTOL-MYERS...',
            'BRISTOL-MYERS SQUIBB FARMACEUTICA LTDA',
            '2BRISTOL-MYERS SQUIBB FARMACEUTICA LTDA025',
            '2BRISTOL-MYERS SQUIBB FARMACEUTICA LTDA025',
            '2BRISTOL-MYERS SQUIBB FARMACEUTICA LTDA025',
            '2BRISTOL-MYERS SQUIBB FARMACEUTICA LTDA025',
            '2BRISTOL-MYERS SQUIBB FARMACEUTICA LTDA025',
            '2BRISTOL-MYERS SQUIBB FARMACEUTICA LTDA025',
            '2BRISTOL-MYERS SQUIBB FARMACEUTICA LTDA025',
            '2BRISTOL-MYERS SQUIBB FARMACEUTICA LTDA025',
        ],
        datasets: [
            // {
            //     label: 'Despesas',
            //     data: [4, 5, 6],
            //     backgroundColor: '#E2B13D',
            // },
            {
                label: 'Quantidade',
                data: [3, 4, 5, 6, 5, 4, 2, 7, 4, 2],
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
                        return 'teste'
                    },
                },
            },
        },
    }
    return (
        <Container className='bg-white round main-shadow'>
            <Stack className='p-3'>
                <div className='transaction_month'>
                    <h5>Medicamentos por laboratório</h5>
                </div>
                <Bar options={options} data={data} />
            </Stack>
        </Container>
    )
}

export default BarStatsMedPorLab
