import React, { useEffect, useState } from 'react'
import { Button, Container, Dropdown, Form, InputGroup, Spinner, Stack } from 'react-bootstrap'
// import testData from '../data/testData'
import TransItem from './TransItem'
import axios from 'axios'
import meses from '../data/meses'
import { FaCheckSquare, FaChevronLeft, FaChevronRight, FaSquare } from 'react-icons/fa'
import { BsFilter } from 'react-icons/bs'
import Med from './Med'
import AddModal from './AddModal'

function Medicamentos({
    ct,
    labs,
    pa,
    isAuth,
    reload,
    setReload,
    setMeds,
    meds,
    setDadosMes,
    dadosMes,
    mesAtual,
    setMesAtual,
}) {
    const [loading, setLoading] = useState(true)
    const [msg, setMsg] = useState('')
    const [modalShow, setModalShow] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios
            .get('http://localhost:5000/medicamentos', { headers: { Authorization: `Bearer ${isAuth.accessToken}` } })
            .then((data) => {
                setMeds(data.data)
                setLoading(false)
                setMsg('Sem dados.')
            })
            .catch((err) => {
                setMsg('Houve um erro.')
                console.log(err)
            })
    }, [reload])

    return (
        <Stack className='p-3'>
            <Stack gap={3} direction='horizontal' className='control-bar p-3 round'>
                <Button variant='outline-light' onClick={() => setModalShow(true)}>
                    Cadastrar medicamento
                </Button>

                <Form.Control
                    className='w-50'
                    placeholder='Procurar medicamento'
                    aria-label='medicamento'
                    aria-describedby='basic-addon1'
                />
            </Stack>
            <Stack direction='horizontal' className='transaction_month'>
                <Button
                    // onClick={() => stepMes(0)}
                    variant='link'
                    style={{ color: '#5b5b5b', textDecoration: 'none' }}
                >
                    {/* <h4>Nome:</h4> */}
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

            <AddModal
                ct={ct}
                labs={labs}
                pa={pa}
                setReload={setReload}
                isAuth={isAuth}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Stack>
    )
}

export default Medicamentos
