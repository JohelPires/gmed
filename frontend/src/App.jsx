import './App.css'
import Navbar from './components/Navbar'

import { Col, Container, Row } from 'react-bootstrap'
import Main from './telas/Main'
import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './telas/Login'
import Registrar from './telas/Registrar'
import Sobre from './telas/Sobre'

function App() {
    const [isAuth, setIsAuth] = useState('')
    const [reload, setReload] = useState(0)
    // const [contextValue, setContextValue] = useState('Valor inicial do contexto');

    // useEffect(() => {
    //   // Atualizar o valor do contexto quando a variável triggerUpdate mudar
    //   if (triggerUpdate) {
    //     setContextValue('Novo valor do contexto após a mudança');
    //   }
    // }, [triggerUpdate]);

    return (
        <div className='App'>
            <Container fluid>
                <Row className='navbar main-shadow mb-5'>
                    <Col>
                        <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
                        {/* {isAuth && <ControlBar isAuth={isAuth} reload={reload} setReload={setReload} />} */}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Routes>
                            <Route
                                path='/'
                                element={
                                    isAuth ? (
                                        <Main isAuth={isAuth} setReload={setReload} reload={reload} />
                                    ) : (
                                        <Navigate to={'/login'} />
                                    )
                                }
                            />
                            <Route path='login' element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />} />
                            <Route path='registrar' element={<Registrar isAuth={isAuth} setIsAuth={setIsAuth} />} />
                            <Route path='sobre' element={<Sobre />} />
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default App
