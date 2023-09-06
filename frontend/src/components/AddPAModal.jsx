import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form, Modal, Stack } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

function AddPAModal(props) {
    const [erro, setErro] = useState(null)
    const {
        register,
        handleSubmit,

        // watch,
        formState: { errors },
    } = useForm({
        shouldUnregister: true,
        defaultValues: {
            nome: props.editMode ? props.pa.nome : '',
        },
    })

    function onSubmit(data) {
        // e.preventDefault()
        const novoPA = {
            nome: data.nome,
        }

        if (props.editMode) {
            axios
                .put(`http://localhost:5000/pa/${props.pa.id}`, novoPA, {
                    headers: { Authorization: `Bearer ${props.isAuth.accessToken}` },
                })
                .then((data) => {
                    console.log('Princípio ativo atualizado.')
                    props.setReload((prev) => prev + 1)
                    props.onHide()
                })
                .catch((err) => {
                    setErro(err)
                    // props.setReload((prev) => prev + 1)
                })
        } else {
            axios
                .post('http://localhost:5000/pa', novoPA, {
                    headers: { Authorization: `Bearer ${props.isAuth.accessToken}` },
                })
                .then((data) => {
                    console.log('Princípio ativo adicionado.')
                    props.setReload((prev) => prev + 1)
                    props.onHide()
                })
                .catch((err) => {
                    setErro(err.response.data.errors)
                    // props.setReload((prev) => prev + 1)
                })
        }
    }
    console.log(erro)
    return (
        <Modal {...props} size='md' aria-labelledby='contained-modal-title-vcenter' centered animation={false}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Modal.Header closeButton>
                    <Modal.Title id='contained-modal-title-vcenter'>Cadastrar princípio ativo</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ background: '#F0F0F0' }}>
                    {/* {errors.valor && <span style={{ color: 'red' }}>Digite um valor diferente de zero</span>} */}
                    {erro &&
                        erro.map((item) => {
                            return (
                                <p style={{ color: 'red' }}>
                                    <small variant='danger'>{item.message}</small>
                                </p>
                            )
                        })}
                    <Stack gap={1}>
                        <Form.Group className='mb-3'>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control required type='text' {...register('nome', { required: true })} />
                        </Form.Group>
                    </Stack>{' '}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide} variant='secondary'>
                        Cancelar
                    </Button>
                    <Button type='submit'>{props.editMode ? 'Salvar' : 'Adicionar'}</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default AddPAModal
