import React, { useState } from 'react'
import { Badge, Button, ButtonGroup, Stack } from 'react-bootstrap'
import ViewModal from './ViewModal'
import UpdateModal from './UpdateModal'

function Med({ item, ct, labs, pa, isAuth, setReload }) {
    const [viewModalShow, setViewModalShow] = useState(false)
    const [updateModalShow, setUpdateModalShow] = useState(false)

    return (
        <Stack gap={3} className='border-bottom pb-2' direction='horizontal'>
            <h6 style={{ cursor: 'pointer' }} onClick={() => setViewModalShow(true)}>
                {item.nome}
            </h6>
            {item.quantidade < 1000 && <Badge bg='warning'>estoque baixo</Badge>}
            {item.vencimento.slice(0, 4) == new Date().getFullYear() && <Badge bg='danger'>vencimento próximo</Badge>}
            <ButtonGroup size='sm' className='ms-auto' aria-label='Basic example'>
                <Button variant='outline-secondary' onClick={() => setViewModalShow(true)}>
                    Visualizar
                </Button>
                <Button variant='outline-secondary' onClick={() => setUpdateModalShow(true)}>
                    Editar
                </Button>
                <Button variant='outline-danger'>Excluir</Button>
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
