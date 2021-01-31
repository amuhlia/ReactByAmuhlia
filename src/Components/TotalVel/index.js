import React from 'react'
import { Row, Container } from 'react-bootstrap'
import {connect} from 'react-redux'

let count =0
let tVel = 0

const compo = React.createRef()

const TotalVel = (props) => {
    tVel = props.totalAmount

    setInterval(() => {
        if (tVel===0) {count=0}
        //console.log(".tVel:"+tVel)
        count = count + tVel
        if (count>499) {count =0}
  
        try {
            compo.current.innerText = (typeof count !=='undefined'&&count>0) ? count : 'Sin Competencia'
        } catch(e){console.log(e)}

       // compo.current.style = "position:absolute; top:190px left:"+(count)+"px;"
       //console.log( compo.current.style)
     }, 100);

    return(
        <Container>
            <Row>
                <div style={{position: 'absolute', top: '-130px', left: '-200px'}}><h3>Lab. React Agustín Muhlía [JAMM7]</h3><h5>Softtek 24-07-2020</h5></div>
                <div style={{position: 'absolute', top: '-60px', left: '-200px'}}>
                    Velocidad &sum;(X) &prop; # de Competidores: v'{props.totalAmount}
                </div>
                <div style={{position: 'absolute', left: '-180px', top: '-30px'}}> ::Velocidad total de avance::  </div>
                <div ref={compo} style={{position: 'absolute', left: '90px', top: '-30px'}}></div>
            </Row>
            
        </Container>
    )
}


const mapStateToProps = (state) => {
    
    return {
        totalAmount : state.totalAmount        
    }
}

export default connect(mapStateToProps)(TotalVel)