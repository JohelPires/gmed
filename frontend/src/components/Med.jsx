import React, { useState } from 'react'
import { Badge, Button, ButtonGroup, Stack } from 'react-bootstrap'
import ViewModal from './ViewModal'
import UpdateModal from './UpdateModal'
import axios from 'axios'
import { FaEdit, FaEye, FaTrashAlt } from 'react-icons/fa'

function Med({ item, ct, labs, pa, isAuth, setReload, setToast }) {
    const [viewModalShow, setViewModalShow] = useState(false)
    const [updateModalShow, setUpdateModalShow] = useState(false)

    function handleDelete() {
        if (window.confirm('Tem certeza que quer deletar esse medicamento?')) {
            axios
                .delete(`http://localhost:5000/medicamentos/${item.id}`, {
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
            <h6 style={{ cursor: 'pointer' }} onClick={() => setViewModalShow(true)}>
                {item.nome}
            </h6>
            <div className='ms-auto'></div>
            {item.quantidade < 1000 && <Badge bg='warning'>estoque baixo</Badge>}
            {item.vencimento.slice(0, 4) == new Date().getFullYear() && <Badge bg='danger'>vencimento próximo</Badge>}
            <ButtonGroup size='sm' aria-label='Basic example'>
                <Button variant='outline-secondary' onClick={() => setViewModalShow(true)}>
                    <FaEye /> Visualizar
                </Button>
                <Button variant='outline-secondary' onClick={() => setUpdateModalShow(true)}>
                    <FaEdit /> Editar
                </Button>
                <Button variant='outline-danger' onClick={handleDelete}>
                    <FaTrashAlt /> Excluir
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
