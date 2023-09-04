import React, { useEffect, useState } from 'react'
import { Container, Stack } from 'react-bootstrap'
import { Bar } from 'react-chartjs-2'

function Info({ meds, reload, labs }) {
    const [total, setTotal] = useState(0)
    useEffect(() => {
        setTotal(0)
        meds.map((item) => {
            console.log(item.quantidade)
            setTotal((prev) => prev + item.quantidade)
        })
    }, [reload, meds])
    return (
        <Container className='bg-white round main-shadow'>
            <Stack className='p-3'>
                <h4>Medicamentos Cadastrados</h4>
                <h3>{meds && meds.length}</h3>
                <h4>Total de medicamentos</h4>
                <h3>{total}</h3>
                <h4>Laboratórios cadastrados</h4>
                <h3>{labs && labs.length}</h3>
            </Stack>
        </Container>
    )
}

export default Info
