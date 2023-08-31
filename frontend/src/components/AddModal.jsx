import React, { useState } from 'react'
import { Button, Form, InputGroup, Modal, Stack } from 'react-bootstrap'
import { despesas, receitas } from '../data/categorias'
import axios from 'axios'
import { useForm } from 'react-hook-form'

function AddModal(props) {
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm()

    function onSubmit(data) {
        // e.preventDefault()
        console.log(data)
        // axios
        //     .post('http://localhost:5000/trans', transaction, {
        //         headers: { Authorization: `Bearer ${props.isAuth.accessToken}` },
        //     })
        //     .then((data) => {
        //         console.log('Transação adicionada.')
        //         // setCategoria(props.tipo === 'Receita' ? 1000 : 0)
        //         setDate(new Date().toISOString().substring(0, 10))
        //         setDescricao('')
        //         data.valor = 0
        //         axios.get(`http://localhost:5000/usuario/${props.isAuth.usuario.id}`).then((data) => {
        //             props.setSaldo(data.data.saldo)
        //         })
        //         props.setReload((prev) => prev + 1)
        //         props.onHide()
        //     })
        //     .catch((err) => console.log(err))
    }

    // O ENDPOINT PEDE ESSE FORMATO:
    // {
    //     "nome": "outro teste2",
    //     "id_principio_ativo": 2,
    //     "id_laboratorio": 2,
    //     "registro": "12345",
    //     "ean": "123",
    //     "apresentacao": "teste",
    //     "id_classe_terapeutica": 15,
    //     "quantidade": 10000,
    //     "vencimento": "2026-05-31"
    //   }

    return (
        <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Modal.Header closeButton>
                    <Modal.Title id='contained-modal-title-vcenter'>Cadastrar medicamento {props.tipo}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ background: '#F0F0F0' }}>
                    {errors.valor && <span style={{ color: 'red' }}>Digite um valor diferente de zero</span>}
                    <Stack direction='horizontal' gap={1}>
                        <Form.Group className='mb-3 w-75'>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type='text' {...register('nome', { required: true })} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Registro</Form.Label>
                            <Form.Control type='text' {...register('registro', { required: true })} />
                        </Form.Group>
                    </Stack>{' '}
                    <Stack direction='horizontal' gap={1}>
                        <Form.Group className='mb-3 w-50'>
                            <Form.Label>Laboratório</Form.Label>
                            <Form.Select
                                aria-label='Default select example'
                                {...register('id_laboratorio', { required: true })}
                            >
                                <option>Open this select menu</option>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                            </Form.Select>
                        </Form.Group>{' '}
                        <Form.Group className='mb-3 w-50'>
                            <Form.Label>Principio Ativo</Form.Label>
                            <Form.Select
                                aria-label='Default select example'
                                {...register('id_principio_ativo', { required: true })}
                            >
                                <option>Open this select menu</option>
                                <option value='1'>
                                    One - E se for um nome muito grande? o que acontece? será que sai da tela? vamos ver
                                </option>
                                <option value='2'>Two</option>
                                <option value='3'>Three</option>
                            </Form.Select>
                        </Form.Group>
                    </Stack>
                    <Stack direction='horizontal' gap={1}>
                        <Form.Group className='mb-3 w-100'>
                            <Form.Label>Classe terapêutica</Form.Label>
                            <Form.Select
                                aria-label='Default select example'
                                {...register('id_classe_terapeutica', { required: true })}
                            >
                                <option>Open this select menu</option>
                                <option value='1'>
                                    One - E se for um nome muito grande? o que acontece? será que sai da tela? vamos ver
                                </option>
                                <option value='2'>Two</option>
                                <option value='3'>Three</option>
                            </Form.Select>
                        </Form.Group>
                    </Stack>
                    <Stack direction='horizontal' gap={1}>
                        <Form.Group className='mb-3 w-50'>
                            <Form.Label>Apresentação</Form.Label>
                            <Form.Control
                                as='textarea'
                                aria-label='Default select example'
                                {...register('apresentacao', { required: true })}
                            ></Form.Control>
                        </Form.Group>
                        <Stack>
                            <Form.Group className='mb-3 w-50'>
                                <Form.Label>Quantidade</Form.Label>
                                <Form.Control type='number' {...register('quantidade', { required: true })} />
                            </Form.Group>
                            <Form.Group className='mb-3 w-50'>
                                <Form.Label>Vencimento</Form.Label>
                                <Form.Control type='date' {...register('vencimento', { required: true })} />
                            </Form.Group>
                        </Stack>
                    </Stack>
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

export default AddModal
