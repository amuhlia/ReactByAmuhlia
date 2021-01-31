import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {connect} from 'react-redux'

//const jComp = React.createRef()
let count =-400
let tVel = 0

const NamesList = (props) => {




     let arrLength = 100
     let arrColores = ['fuchsia','red','silver','yellow','blue','orange','green','powderblue','coral','aqua','teal']
     const [elRefs, setElRefs] = React.useState([])
   
     React.useEffect(() => {
       // add or remove refs
       setElRefs(elRefs => (
         Array(arrLength).fill().map((_, i) => elRefs[i] || React.createRef())
       ));
     }, [arrLength],
     count =-400);

     console.log('elRefs='+elRefs.toString())

     tVel = props.totalAmount

     setInterval(() => {
        try{
            count = count + tVel
            if (count>499) {count =-400}
            //console.log(count)
            //compo.current.innerText = count
          props.names.map((_,i) => {
                    elRefs[i].current.style = "padding: 1%; border-radius:10px; border: 1px black solid;background-color:"+arrColores[i]+"; position:absolute; top:"+(250+(i*28))+"px; left:"+(count)+"px;"
                })
            //jComp.current.style = "position:absolute;  left:100px;"
            //console.log(jComp.current.style)
            } catch (Error){
            }
 
     }, 100);     


    return(
        <Container>
            <Row>

                <Col>
                    {
                        props.names.map((name,i) => {
                            return (
                                <div key={name+i} ref={elRefs[i]}>
                                    {name}
                                </div>
                            )
                        })
                    }
                </Col>
            </Row>
 
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        names: state.listPolicies,
        totalAmount : state.totalAmount
    }
}

export default connect(mapStateToProps)(NamesList)