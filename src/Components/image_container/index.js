import React from 'react'
import {Col, Row} from 'react-bootstrap'

import './stilo.css'


class ImageContainer extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <Row md={4} sm={1}>
                <Col>
                        
                    <img src={this.props.src} alt={this.props.galt} key={this.props.ikey} />                 

                </Col>
            </Row>
        ) 

    }

}
export default ImageContainer