import React from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Menu = () => {
    return (
        <Container>
            <Row>
                <Col sm="2">
                    <Link to="/">
                        <Button variant="dark">
                            Competencias
                        </Button>
                    </Link>
                </Col>
                <Col sm="2">
                    <Link to="/img">
                        <Button>
                            API
                        </Button>
                    </Link>
                </Col>
            </Row>
            <Row style={{height: "100px"}} />
        </Container>
    )
}

export default Menu