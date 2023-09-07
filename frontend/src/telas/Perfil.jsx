import axios from 'axios'
import React, { useEffect } from 'react'
import { Button, Col, Container, Row, Stack } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

function Perfil({ isAuth, setIsAuth }) {
    const navigate = useNavigate()
    useEffect(() => {
        console.log(isAuth.usuario)
    }, [])

    function deletaUsuario() {
        if (window.confirm('Tem certeza que quer deletar sua conta?')) {
            axios
                .delete(`http://localhost:5000/usuario/${isAuth.usuario.id}`, {
                    headers: { Authorization: `Bearer ${isAuth.accessToken}` },
                })
                .then((data) => {
                    console.log(data)
                    setIsAuth('')
                    window.localStorage.clear()
                    navigate('/login')
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    return (
        <Container fluid>
            <Row>
                <Col md={1}></Col>
                <Col md={10}>
                    <Link to={'/'} className='text-dark'>
                        <h6 className='m-3 mt-0'>{'< Voltar'}</h6>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col md={1}></Col>
                <Col className='bg-white round main-shadow p-5' md={10}>
                    <Link to={'/'}>Voltar</Link>
                    <h3 className='mb-3'>Perfil</h3>
                    <h6>Nome: {isAuth.usuario.nome}</h6>
                    <h6>Matrícula: {isAuth.usuario.matricula}</h6>
                    <h6>Email: {isAuth.usuario.email}</h6>
                    <Stack className='w-50'>
                        <h5>Alterar senha</h5>
                        <input type='text' />
                    </Stack>
                    <Button variant='danger' className='mt-3' onClick={deletaUsuario}>
                        Excluir minha conta
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Perfil
