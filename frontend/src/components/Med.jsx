import React, { useState } from 'react'
import { Badge, Button, ButtonGroup, Stack } from 'react-bootstrap'
import ViewModal from './ViewModal'
import UpdateModal from './UpdateModal'
import axios from 'axios'
import { FaEdit, FaEye, FaTrashAlt } from 'react-icons/fa'

function Med({ item, ct, labs, pa, isAuth, setReload, setToast, isSmallScreen }) {
    const [viewModalShow, setViewModalShow] = useState(false)
    const [updateModalShow, setUpdateModalShow] = useState(false)
    // const url = 'https://gmed.onrender.com'
    const url = 'http://localhost:5000'

    function handleDelete() {
        if (window.confirm('Tem certeza que quer deletar esse medicamento?')) {
            axios
                .delete(`${url}/medicamentos/${item.id}`, {
                    headers: { Authorization: `Bearer ${isAuth.accessToken}` },
                })
                .then((data) => {
                    console.log(data)
                    setToast({ msg: 'Medicamento excluído.', show: true, title: 'Notificação' })
                    setReload((prev) => prev + 1)
                    // props.onHide()
                })
                .catch((err) => console.log(err))
        }
    }

    return (
        <Stack key={item.id} gap={3} className='border-bottom pb-2' direction='horizontal'>
            <h6 className='w-25' style={{ cursor: 'pointer' }} onClick={() => setViewModalShow(true)}>
                {item.nome}
            </h6>
            {!isSmallScreen && (
                <h6 style={{ cursor: 'pointer' }} onClick={() => setViewModalShow(true)}>
                    {item.principioativo}
                </h6>
            )}
            <div className='ms-auto'></div>
            {item.quantidade < 1000 && <Badge bg='warning'>{isSmallScreen ? 'eb' : 'estoque baixo'}</Badge>}
            {item.vencimento.slice(0, 4) === new Date().getFullYear() && (
                <Badge bg='danger'>{isSmallScreen ? 'vp' : 'vencimento próximo'}</Badge>
            )}
            <ButtonGroup size='sm' aria-label='Basic example'>
                <Button variant='outline-secondary' onClick={() => setViewModalShow(true)}>
                    <FaEye />
                    {!isSmallScreen && <small> Visualizar</small>}
                </Button>
                <Button variant='outline-secondary' onClick={() => setUpdateModalShow(true)}>
                    <FaEdit />
                    {!isSmallScreen && <small> Editar</small>}
                </Button>
                <Button variant='outline-danger' onClick={handleDelete}>
                    <FaTrashAlt />
                    {!isSmallScreen && <small> Excluir</small>}
                </Button>
            </ButtonGroup>
            <UpdateModal
                med={item}
                ct={ct}
                labs={labs}
                pa={pa}
                isAuth={isAuth}
                setReload={setReload}
                show={updateModalShow}
                onHide={() => setUpdateModalShow(false)}
                setToast={setToast}
            />
            <ViewModal med={item} show={viewModalShow} onHide={() => setViewModalShow(false)} />
        </Stack>
    )
}

export default Med
