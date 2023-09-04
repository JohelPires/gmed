import React, { useState } from 'react'
import { Badge, Button, ButtonGroup, Stack } from 'react-bootstrap'
import ViewModal from './ViewModal'
import UpdateModal from './UpdateModal'
import axios from 'axios'

function Med({ item, ct, labs, pa, isAuth, setReload }) {
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
                    setReload((prev) => prev + 1)
                    // props.onHide()
                })
                .catch((err) => console.log(err))
        }
    }

    return (
        <Stack gap={3} className='border-bottom pb-2' direction='horizontal'>
            <h6 style={{ cursor: 'pointer' }} onClick={() => setViewModalShow(true)}>
                {item.nome}
            </h6>
            {/* <div className='ms-auto'></div> */}
            {item.quantidade < 1000 && <Badge bg='warning'>estoque baixo</Badge>}
            {item.vencimento.slice(0, 4) == new Date().getFullYear() && <Badge bg='danger'>vencimento próximo</Badge>}
            <ButtonGroup size='sm' className='ms-auto' aria-label='Basic example'>
                <Button variant='outline-secondary' onClick={() => setViewModalShow(true)}>
                    Visualizar
                </Button>
                <Button variant='outline-secondary' onClick={() => setUpdateModalShow(true)}>
                    Editar
                </Button>
                <Button variant='outline-danger' onClick={handleDelete}>
                    Excluir
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
            />
            <ViewModal med={item} show={viewModalShow} onHide={() => setViewModalShow(false)} />
        </Stack>
    )
}

export default Med
