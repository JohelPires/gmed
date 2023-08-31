import React, { useEffect, useState } from 'react'
import { Button, Container, Dropdown, Spinner, Stack } from 'react-bootstrap'
// import testData from '../data/testData'
import TransItem from './TransItem'
import axios from 'axios'
import meses from '../data/meses'
import { FaCheckSquare, FaChevronLeft, FaChevronRight, FaSquare } from 'react-icons/fa'
import { BsFilter } from 'react-icons/bs'
import Med from './Med'

function Medicamentos({ isAuth, reload, setReload, setMeds, meds, setDadosMes, dadosMes, mesAtual, setMesAtual }) {
    // const [data, setData] = useState(testData.transactions)
    // const [mesAtual, setMesAtual] = useState(new Date().getMonth() + 1)
    const [mes, setMes] = useState('')
    const [ano, setAno] = useState(new Date().getFullYear())
    const [loading, setLoading] = useState(true)
    const [msg, setMsg] = useState('')
    const [receitas, setReceitas] = useState(true)
    const [despesas, setDespesas] = useState(true)
    const [decrescente, setDecrescente] = useState(true)

    // useEffect(() => {
    //     setMes(meses[mesAtual - 1])
    // }, [mesAtual])

    useEffect(() => {
        setLoading(true)
        axios
            .get('http://localhost:5000/medicamentos', { headers: { Authorization: `Bearer ${isAuth.accessToken}` } })
            .then((data) => {
                console.log(data.data)

                setMeds(data.data)
                console.log('===========')
                setLoading(false)
                setMsg('Sem dados.')
            })
            .catch((err) => {
                setMsg('Houve um erro.')
                console.log(err)
            })
    }, [reload])

    return (
        <Container className='bg-white round main-shadow'>
            <Stack className='p-3'>
                <Stack direction='horizontal' className='transaction_month'>
                    <Button
                        // onClick={() => stepMes(0)}
                        variant='link'
                        style={{ color: '#5b5b5b', textDecoration: 'none' }}
                    >
                        <h3>Medicamentos</h3>
                    </Button>
                </Stack>

                {loading ? (
                    <Spinner animation='border' variant='primary' />
                ) : meds.length > 0 ? (
                    meds.map((item) => {
                        return <Med item={item} />
                    })
                ) : (
                    <p>{msg}</p>
                )}
            </Stack>
        </Container>
    )
}

export default Medicamentos
