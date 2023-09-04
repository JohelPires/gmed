import React, { useEffect, useState } from 'react'
import PA from './PA'
import AddPAModal from './AddPAModal'
import { Button, Form, Spinner, Stack } from 'react-bootstrap'
import axios from 'axios'

function PrincipioAtivo({ pa, setPa, isAuth, reload, setReload }) {
    const [loading, setLoading] = useState(true)
    const [msg, setMsg] = useState('')
    const [paModalShow, setPaModalShow] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios
            .get('http://localhost:5000/pa', { headers: { Authorization: `Bearer ${isAuth.accessToken}` } })
            .then((data) => {
                setPa(data.data)
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
                <Button variant='outline-light' onClick={() => setPaModalShow(true)}>
                    Cadastrar Princípio Ativo
                </Button>

                <Form.Control
                    className='w-50'
                    placeholder='Procurar princípio ativo'
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
            ) : pa.length > 0 ? (
                pa.map((item) => {
                    return <PA item={item} isAuth={isAuth} setReload={setReload} />
                    // return item.nome
                })
            ) : (
                <p>{msg}</p>
            )}

            <AddPAModal
                editMode={false}
                isAuth={isAuth}
                show={paModalShow}
                setReload={setReload}
                onHide={() => setPaModalShow(false)}
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

export default PrincipioAtivo
