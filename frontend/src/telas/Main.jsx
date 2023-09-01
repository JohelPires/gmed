import React, { useEffect, useState } from 'react'
import { Col, Row, Tab, Tabs } from 'react-bootstrap'
import Transactions from '../components/Transactions'
import BarStats from '../components/BarStats'
import Categories from '../components/Categories'
import Medicamentos from '../components/Medicamentos'
import axios from 'axios'
import Laboratorios from '../components/Laboratorios'
import PrincipioAtivo from '../components/PrincipioAtivo'
import ClasseTerapeutica from '../components/ClasseTerapeutica'

function Main({ isAuth, reload, setReload }) {
    const [meds, setMeds] = useState([])
    const [ct, setCt] = useState([]) // CLASSES TERAPEUTICAS
    const [labs, setLabs] = useState([]) // LABORATORIOS
    const [pa, setPa] = useState([]) // PRINCIPIOS ATIVOS

    useEffect(() => {
        axios
            .get('http://localhost:5000/ct', { headers: { Authorization: `Bearer ${isAuth.accessToken}` } })
            .then((data) => {
                setCt(data.data)
            })
            .catch((err) => {
                console.log(err)
            })
        axios
            .get('http://localhost:5000/laboratorios', { headers: { Authorization: `Bearer ${isAuth.accessToken}` } })
            .then((data) => {
                setLabs(data.data)
            })
            .catch((err) => {
                console.log(err)
            })
        axios
            .get('http://localhost:5000/pa', { headers: { Authorization: `Bearer ${isAuth.accessToken}` } })
            .then((data) => {
                setPa(data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [reload])

    return (
        <Row className='p-5 pt-0 pb-0'>
            <Col className='bg-white round main-shadow' md={8}>
                <Tabs defaultActiveKey='med' id='fill-tab-example' className='mb-3 mt-3 fs-5' fill>
                    <Tab eventKey='med' title='Medicamentos'>
                        <Medicamentos
                            ct={ct}
                            labs={labs}
                            pa={pa}
                            setMeds={setMeds}
                            meds={meds}
                            isAuth={isAuth}
                            reload={reload}
                            setReload={setReload}
                        />
                    </Tab>
                    <Tab eventKey='labs' title='Laboratórios'>
                        <Laboratorios
                            labs={labs}
                            setLabs={setLabs}
                            isAuth={isAuth}
                            reload={reload}
                            setReload={setReload}
                        />
                    </Tab>
                    <Tab eventKey='pa' title='Princípio Ativo'>
                        <PrincipioAtivo
                            setMeds={setMeds}
                            meds={meds}
                            isAuth={isAuth}
                            reload={reload}
                            setReload={setReload}
                        />
                    </Tab>
                    <Tab eventKey='ct' title='Classes Terapêuticas'>
                        <ClasseTerapeutica
                            setMeds={setMeds}
                            meds={meds}
                            isAuth={isAuth}
                            reload={reload}
                            setReload={setReload}
                        />
                    </Tab>
                </Tabs>
            </Col>
            <Col md={4}>
                {/* <BarStats dados={meds} /> */}
                {/* <Categories dados={meds} dadosMes={dadosMes} mesAtual={mesAtual} /> */}
            </Col>
        </Row>
    )
}

export default Main
