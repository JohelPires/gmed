import React, { useEffect, useState } from 'react'
import { Container, Stack } from 'react-bootstrap'
import { Bar } from 'react-chartjs-2'

function Info({ meds, reload, labs, pa }) {
    const [total, setTotal] = useState(0)
    useEffect(() => {
        setTotal(0)
        meds.map((item) => {
            console.log(item.quantidade)
            setTotal((prev) => prev + item.quantidade)
        })
    }, [reload, meds])
    return (
        <Container className='p-4 bg-white round main-shadow'>
            <div className='transaction_month '>
                <h5>Informações</h5>
            </div>
            <Stack className='p-3'>
                <Stack direction='horizontal'>
                    <h5>Medicamentos Cadastrados: </h5>
                    <h3 className='ms-auto'>{meds && meds.length}</h3>
                </Stack>
                <Stack direction='horizontal'>
                    <h5>Total de medicamentos: </h5>
                    <h3 className='ms-auto'>{total}</h3>
                </Stack>
                <Stack direction='horizontal'>
                    <h5>Laboratórios cadastrados: </h5>
                    <h3 className='ms-auto'>{labs && labs.length}</h3>
                </Stack>
                <Stack direction='horizontal'>
                    <h5>Princípios ativos registrados: </h5>
                    <h3 className='ms-auto'>{pa && pa.length}</h3>
                </Stack>
            </Stack>
        </Container>
    )
}

export default Info
