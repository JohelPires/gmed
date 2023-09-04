import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Form, Spinner, Stack } from 'react-bootstrap'
import Lab from './Lab'
import AddLabModal from './AddLabModal'

function Laboratorios({ labs, setLabs, isAuth, reload, setReload }) {
    const [loading, setLoading] = useState(true)
    const [msg, setMsg] = useState('')
    const [labModalShow, setLabModalShow] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios
            .get('http://localhost:5000/laboratorios', { headers: { Authorization: `Bearer ${isAuth.accessToken}` } })
            .then((data) => {
                setLabs(data.data)
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
                <Button variant='outline-light' onClick={() => setLabModalShow(true)}>
                    Cadastrar Laboratório
                </Button>

                <Form.Control
                    className='w-50'
                    placeholder='Procurar laboratorio'
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
            ) : labs.length > 0 ? (
                labs.map((item) => {
                    return <Lab item={item} isAuth={isAuth} setReload={setReload} />
                    // return item.nome
                })
            ) : (
                <p>{msg}</p>
            )}

            <AddLabModal
                isAuth={isAuth}
                show={labModalShow}
                setReload={setReload}
                onHide={() => setLabModalShow(false)}
            />
            {/* <AddModal
                ct={ct}
                labs={labs}
                pa={pa}
                setReload={setReload}
                isAuth={isAuth}
                show={modalShow}
                onHide={() => setModalShow(false)}
            /> */}
        </Stack>
    )
}

export default Laboratorios
