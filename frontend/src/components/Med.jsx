import React from 'react'
import { Badge, Button, ButtonGroup, Stack } from 'react-bootstrap'

function Med({ item }) {
    return (
        <Stack gap={3} className='border-bottom pb-2' direction='horizontal'>
            <h6>{item.nome}</h6>
            <Badge bg='warning'>estoque baixo</Badge>
            <Badge bg='danger'>vencimento próximo</Badge>
            <ButtonGroup size='sm' className='ms-auto' aria-label='Basic example'>
                <Button variant='outline-secondary'>Visualizar</Button>
                <Button variant='outline-secondary'>Editar</Button>
                <Button variant='outline-danger'>Excluir</Button>
            </ButtonGroup>
        </Stack>
    )
}

export default Med
