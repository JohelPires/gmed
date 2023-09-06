import axios from 'axios'
import React, { useState } from 'react'
import { Button, ButtonGroup, Stack } from 'react-bootstrap'
import AddLabModal from './AddLabModal'

function Lab({ item, isAuth, setReload, setToast }) {
    const [updateModalShow, setUpdateModalShow] = useState(false)

    function handleDelete() {
        if (window.confirm('Tem certeza que quer deletar esse laboratório?')) {
            axios
                .delete(`http://localhost:5000/laboratorios/${item.id}`, {
                    headers: { Authorization: `Bearer ${isAuth.accessToken}` },
                })
                .then((data) => {
                    console.log(data)
                    setToast({ msg: 'Laboratório excluído.', show: true, title: 'Notificação' })
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
                <Button variant='outline-secondary' onClick={() => setUpdateModalShow(true)}>
                    Editar
                </Button>
                <Button variant='outline-danger' onClick={handleDelete}>
                    Excluir
                </Button>
            </ButtonGroup>
            <AddLabModal
                editMode={true}
                lab={item}
                isAuth={isAuth}
                setReload={setReload}
                show={updateModalShow}
                onHide={() => setUpdateModalShow(false)}
            />
            {/* <ViewModal med={item} show={viewModalShow} onHide={() => setViewModalShow(false)} /> */}
        </Stack>
    )
}

export default Lab
