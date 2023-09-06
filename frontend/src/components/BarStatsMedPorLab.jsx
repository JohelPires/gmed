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
        // console.log(medsPorLab)

        setNoveLabs(Object.keys(medsPorLab))
        setQuant(Object.values(medsPorLab))
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
