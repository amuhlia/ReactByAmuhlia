import React from 'react'
import {Container, Row, Button, Form, Col} from 'react-bootstrap'
import { connect } from 'react-redux'

import {createPolicy, deletePolicy} from '../../Actions'

const TeamsForm = (props) => {

    const nameRef = React.createRef()
    const amountRef = React.createRef()

    const handlerCreate = () => {
        const name = nameRef.current.value
        const amount = amountRef.current.value
        props.createPolicy(name, amount) 
    }

    const handleDelete = () => {
        const name = nameRef.current.value
        //amountRef.current.value = 0
        const amount = amountRef.current.value 
        props.deletePolicy(name,amount)
    }

    return (
        <Container>
            <Row>
                Alta/Baja de Competidores
            </Row>
            <Row>
                <Form.Group>
                    <Form.Control 
                        ref={nameRef}
                        size="sm" 
                        type="text" 
                        placeholder="Nombre"  
                    />
                    <br />
                    <Form.Control 
                        ref={amountRef}
                        size="sm" 
                        type="number" 
                        placeholder="Velocidad" 
                    />
                    <br />
                </Form.Group>
            </Row>
            <Row>
                <Col>
                    <Button onClick={handlerCreate} variant="outline-dark btn-sm"> 
                        Agregar Competidor
                    </Button>
                </Col>
                <Col>
                    <Button onClick={handleDelete} variant="outline-dark btn-sm">
                        Eliminar Competidor
                    </Button>
                </Col>
            </Row>

        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        policiesNames: state.listPolicies,
        totalAmount: state.totalAmount
    }
}

export default connect(mapStateToProps, {createPolicy, deletePolicy})(TeamsForm) 