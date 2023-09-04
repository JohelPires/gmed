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

function Medicamentos({ ct, labs, pa, isAuth, reload, setReload, setMeds, meds }) {
    const [loading, setLoading] = useState(true)
    const [msg, setMsg] = useState('')
    const [modalShow, setModalShow] = useState(false)
    const [procurar, setProcurar] = useState('')
    const [dadoFiltrado, setDadoFiltrado] = useState([])

    useEffect(() => {
        setLoading(true)
        axios
            .get('http://localhost:5000/medicamentos', { headers: { Authorization: `Bearer ${isAuth.accessToken}` } })
            .then((data) => {
                setMeds(data.data)
                setDadoFiltrado(data.data)
                // setDadoFiltrado(data.data.filter((item) => item.nome.toLowerCase().startsWith('outro')))
                // console.log(dadoFiltrado)
                console.log(data.data)
                setLoading(false)
                setMsg('Sem dados.')
            })
            .catch((err) => {
                setMsg('Houve um erro.')
                console.log(err)
            })
    }, [reload])

    function handleProcurar(e) {
        const filtra = meds.filter((item) => item.nome.toLowerCase().startsWith(e.target.value.toLowerCase()))
        setDadoFiltrado(filtra)
    }

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
                    // value={procurar}
                    onChange={handleProcurar}
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
            <Stack style={{ overflow: 'auto', height: '600px' }}>
                {loading ? (
                    <Spinner animation='border' variant='primary' />
                ) : dadoFiltrado.length > 0 ? (
                    dadoFiltrado.map((item) => {
                        return <Med item={item} ct={ct} labs={labs} pa={pa} isAuth={isAuth} setReload={setReload} />
                    })
                ) : (
                    <p>{msg}</p>
                )}
            </Stack>

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
