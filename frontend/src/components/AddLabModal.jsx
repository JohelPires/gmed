import axios from 'axios'
import React from 'react'
import { Button, Form, Modal, Stack } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

function AddLabModal(props) {
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm({ resetOptions: { keepDirtyValues: true } })

    function onSubmit(data) {
        // e.preventDefault()
        const novoLaboratorio = {
            nome: data.nome,
            cnpj: data.cnpj,
        }

        axios
            .post('http://localhost:5000/laboratorios', novoLaboratorio, {
                headers: { Authorization: `Bearer ${props.isAuth.accessToken}` },
            })
            .then((data) => {
                console.log('Laboratorio adicionado.')
                props.setReload((prev) => prev + 1)
                props.onHide()
            })
            .catch((err) => {
                console.log(err)
                props.setReload((prev) => prev + 1)
            })
    }
    return (
        <Modal {...props} size='md' aria-labelledby='contained-modal-title-vcenter' centered animation={false}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Modal.Header closeButton>
                    <Modal.Title id='contained-modal-title-vcenter'>Cadastrar medicamento</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ background: '#F0F0F0' }}>
                    {errors.valor && <span style={{ color: 'red' }}>Digite um valor diferente de zero</span>}
                    <Stack gap={1}>
                        <Form.Group className='mb-3'>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type='text' {...register('nome', { required: true })} defaultValue={''} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Cnpj</Form.Label>
                            <Form.Control type='text' {...register('cnpj', { required: true })} />
                        </Form.Group>
                    </Stack>{' '}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide} variant='secondary'>
                        Cancelar
                    </Button>
                    <Button type='submit'>Adicionar</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default AddLabModal
