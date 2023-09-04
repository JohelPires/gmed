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
    const data = {
        labels: ['2023', '2024', '2025', '2026', '2027'],
        datasets: [
            // {
            //     label: 'Despesas',
            //     data: [4, 5, 6],
            //     backgroundColor: '#E2B13D',
            // },
            {
                label: 'Quantidade',
                data: [3, 4, 5, 2, 3],
                backgroundColor: '#49ABED',
            },
        ],
    }
    return (
        <Container className='bg-white round main-shadow'>
            <Stack className='p-3'>
                <div className='transaction_month'>
                    <h3>Data de vencimento</h3>
                </div>
                <Bar options={options} data={data} />
            </Stack>
        </Container>
    )
}

export default BarStats
