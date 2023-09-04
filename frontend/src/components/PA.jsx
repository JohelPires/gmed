import axios from 'axios'
import React, { useState } from 'react'
import { Button, ButtonGroup, Stack } from 'react-bootstrap'
import AddPAModal from './AddPAModal'

function PA({ item, isAuth, setReload }) {
    const [modalShow, setModalShow] = useState(false)

    function handleDelete() {
        if (window.confirm('Tem certeza que quer deletar esse laboratório?')) {
            axios
                .delete(`http://localhost:5000/pa/${item.id}`, {
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
            </Stack>
            <ButtonGroup size='sm' className='ms-auto' aria-label='Basic example'>
                <Button variant='outline-secondary' onClick={() => setModalShow(true)}>
                    Editar
                </Button>
                <Button variant='outline-danger' onClick={handleDelete}>
                    Excluir
                </Button>
            </ButtonGroup>
            <AddPAModal
                editMode={true}
                pa={item}
                isAuth={isAuth}
                setReload={setReload}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            {/* <ViewModal med={item} show={viewModalShow} onHide={() => setViewModalShow(false)} /> */}
        </Stack>
    )
}

export default PA
