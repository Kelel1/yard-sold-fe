import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Nav} from 'react-bootstrap';

const Navbar = () => (
  <>    
    <div className="nav">      
      <Container fluid>
        <Row>
          <Col md="auto">
            <Nav.Item>
              <Nav.Link href=""><button>Yard Sold</button></Nav.Link>
            </Nav.Item>
          </Col>
          <Col xs={7}></Col>
          <Col md="auto">
            <Nav.Item>
              <Nav.Link href="">Login</Nav.Link>
            </Nav.Item>
          </Col>
          <Col md="auto">
            <Nav.Item>
              <Nav.Link href="">Store</Nav.Link>
          </Nav.Item>
          </Col>
          <Col md="auto">
            <Nav.Item>
              <Nav.Link href=""><button>Sign-up</button></Nav.Link>
            </Nav.Item>
          </Col>
        </Row>
      </Container>
    </div>
    <style jsx>{`
      .nav {
        display: flex;
        background-color: white;
        position: fixed;
        width: 100%;
        justify-content: right;
      }
    `}</style>
  
  </>
)

export default Navbar;