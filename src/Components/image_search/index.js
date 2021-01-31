import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'

import InputCtr from '../inputCtr'
import ImageContainer from '../image_container'
import './inputSearch.css'

class ImageSearch extends React.Component {

    constructor(){
        super()
        this.state = { message: [] }
    }

    callbackFunction = (childData) => {
        this.setState({message: childData.results})
        console.log('message', this.state.message)
    }

    render(){

            return (
                <div>
                <h6>API-Basics</h6>
                    <Container className="inputSearch">
                        <Row>
                            <Col>
                                <InputCtr parentCallback = {this.callbackFunction}/>
                            </Col>
                        </Row>    
                        <div style={{height: 50+'px'}}>

                        </div>

                        <Row>
                            {
                                this.state.message.map((img) => { 
                                    return (
                                    <ImageContainer src={img.urls.thumb} galt={img.alt_description}
                                    ikey={img.id} >
                                    </ImageContainer>
                                    )
                                }
                            )
                            }

                        </Row>
                                       
                    </Container>
                    </div>

            )

    }

}
export default ImageSearch