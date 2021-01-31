import React from 'react'
import {Container, Col, Row, InputGroup, FormControl, Button} from 'react-bootstrap'
import axios from 'axios'


class InputCtr extends React.Component {

    constructor(){
        super()
        this.state = {
            seachText: ''

        }
        this.OnChangeSearch = this.OnChangeSearch.bind(this)
        this.fSearch = this.fSearch.bind(this)
    }

    sendData (responses) {
        this.props.parentCallback(responses.data);
   }

    OnChangeSearch(e){
        e.preventDefault()
        console.log(e.target.value)
        this.setState({seachText: e.target.value})
    }

    async fSearch() {
       const response = await axios.get('https://api.unsplash.com/search/photos', { timeout: 1000,
           headers: {
                Authorization: 'Client-ID ePwiGB22yDBmovB01kQ7VKn-nzERA6d8hecz4g8G--g'
            },
            params: {
                query: this.state.seachText,
                per_page: 50
            }
       })

        this.sendData(response)
    }


    render(){

            return (
                    <Container>
                        <Row>
                            <Col>
                                <InputGroup className="nb-3">
                                    <FormControl 
                                        placeholder="Imagen a Buscar"
                                        aria-label="Imagen a Buscar"
                                        aria-describedby="basic-addon2"
                                        onChange={(event) => this.OnChangeSearch(event)}
                                        />
                                <InputGroup.Append>
                                    <Button variant="outline-secondary"
                                        onClick={this.fSearch}
                                    >[Buscar]</Button>
                                </InputGroup.Append>
                                </InputGroup>
                            </Col>
                        </Row>                    
                    </Container>

            )

    }

}
export default InputCtr