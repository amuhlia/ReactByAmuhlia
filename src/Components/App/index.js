import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { BrowserRouter, Route } from 'react-router-dom'

import Menu from '../Menu'
import TeamsForm from '../CompetenciasForm'
import NamesList from '../NamesList'
import TotalVel from '../TotalVel'  
import ImageSearch from '../image_search'


const App = () => {
    return(
        <Container>
            <BrowserRouter>
                <Row>
                    <Menu/>
                </Row>
                <Row>
                    <Col>
                        <Route path="/" exact component={TeamsForm}></Route>
                        <Route path="/img" exact component={ImageSearch}></Route>                        
                    </Col>
                    <Col>
                        <Row>
                            <NamesList/>
                        </Row>
                        <Row>
                            <TotalVel/>
                        </Row>

                    </Col>
                </Row>
            </BrowserRouter>
        </Container>
    )
}

export default App