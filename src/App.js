import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container,Row,Col } from 'react-bootstrap';
import { FaBeer } from 'react-icons/fa';
import { IconContext } from "react-icons";
import {BsArrowCounterclockwise,BsArrowClockwise} from "react-icons/bs"

function App() {
  return (
    <Container fluid style={{border:'1px solid red'}}>
    <Row>
      <Col lg={2}>
      <IconContext.Provider value={{ color: "red", className: "global-class-name",size:'25px' }}>
        <div>
          <BsArrowCounterclockwise/>
          <BsArrowClockwise/>
          
        </div>
      </IconContext.Provider>
      </Col>   
      <Col lg={2}>
      <IconContext.Provider value={{ color: "green", className: "global-class-name",size:'25px' }}>
        <div>
        
        </div>
      </IconContext.Provider>
      </Col>
      <Col lg={6}>

      </Col> 
      <Col lg={2}>
      <IconContext.Provider value={{ color: "red", className: "global-class-name",size:'25px' }}>
        <div>
        <BsArrowClockwise/>
        </div>
      </IconContext.Provider>
      </Col> 
    </Row>
  </Container>
  );
}

export default App;
