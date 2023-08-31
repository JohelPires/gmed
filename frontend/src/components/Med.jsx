import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Med({ item }) {
    return (
        <Container className='border-bottom'>
            <Row style={{ fontSize: '9px' }}>
                <Col md={10}>Nome:</Col>
                {/* <Col md={6}>Laboratório:</Col> */}
                <Col md={2}></Col>
            </Row>
            <Row style={{ fontSize: '13px' }}>
                <Col md={8}>{item.nome}</Col>
                {/* <Col>{item.laboratorio}</Col> */}
                <Col className='text-left'>possivel tag</Col>
            </Row>
        </Container>
    )
}

export default Med
