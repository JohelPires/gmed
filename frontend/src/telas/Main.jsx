import React, { useState } from 'react'
import { Col, Row, Tab, Tabs } from 'react-bootstrap'
import Transactions from '../components/Transactions'
import BarStats from '../components/BarStats'
import Categories from '../components/Categories'
import Medicamentos from '../components/Medicamentos'

function Main({ isAuth, reload, setReload }) {
    const [meds, setMeds] = useState([])
    const [dadosMes, setDadosMes] = useState([])
    const [mesAtual, setMesAtual] = useState(new Date().getMonth() + 1)
    return (
        <Row className='p-5 pt-0 pb-0'>
            <Col className='bg-white round main-shadow' md={8}>
                <Tabs defaultActiveKey='med' id='fill-tab-example' className='mb-3 mt-3 fs-5' fill>
                    <Tab eventKey='med' title='Medicamentos'>
                        <Medicamentos
                            setMeds={setMeds}
                            meds={meds}
                            isAuth={isAuth}
                            reload={reload}
                            setReload={setReload}
                        />
                    </Tab>
                    <Tab eventKey='labs' title='Laboratórios'>
                        <Medicamentos
                            setMeds={setMeds}
                            meds={meds}
                            isAuth={isAuth}
                            reload={reload}
                            setReload={setReload}
                        />
                    </Tab>
                    <Tab eventKey='pa' title='Princípio Ativo'>
                        <Medicamentos
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
