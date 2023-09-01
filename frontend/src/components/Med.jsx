import React, { useState } from 'react'
import { Badge, Button, ButtonGroup, Stack } from 'react-bootstrap'
import ViewModal from './ViewModal'

function Med({ item }) {
    const [viewModalShow, setViewModalShow] = useState(false)
    return (
        <Stack gap={3} className='border-bottom pb-2' direction='horizontal'>
            <h6>{item.nome}</h6>
            {item.quantidade < 1000 && <Badge bg='warning'>estoque baixo</Badge>}
            {item.vencimento.slice(0, 4) === '2023' && <Badge bg='danger'>vencimento próximo</Badge>}
            <ButtonGroup size='sm' className='ms-auto' aria-label='Basic example'>
                <Button variant='outline-secondary' onClick={() => setViewModalShow(true)}>
                    Visualizar
                </Button>
                <Button variant='outline-secondary'>Editar</Button>
                <Button variant='outline-danger'>Excluir</Button>
            </ButtonGroup>
            <ViewModal med={item} show={viewModalShow} onHide={() => setViewModalShow(false)} />
        </Stack>
    )
}

export default Med
