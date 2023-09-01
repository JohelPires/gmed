import axios from 'axios'
import React from 'react'
import { Button, ButtonGroup, Stack } from 'react-bootstrap'

function Lab({ item, isAuth, setReload }) {
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
            <Stack>
                <h6 style={{ cursor: 'pointer' }}>{item.nome}</h6>
                <small>CNPJ: {item.cnpj}</small>
            </Stack>
            <ButtonGroup size='sm' className='ms-auto' aria-label='Basic example'>
                {/* <Button variant='outline-secondary' onClick={() => setUpdateModalShow(true)}>
                    Editar
                </Button> */}
                <Button variant='outline-danger' onClick={handleDelete}>
                    Excluir
                </Button>
            </ButtonGroup>
            {/* <UpdateModal
        med={item}
        ct={ct}
        labs={labs}
        pa={pa}
        isAuth={isAuth}
        setReload={setReload}
        show={updateModalShow}
        onHide={() => setUpdateModalShow(false)}
    />
    <ViewModal med={item} show={viewModalShow} onHide={() => setViewModalShow(false)} /> */}
        </Stack>
    )
}

export default Lab
