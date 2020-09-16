import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Nav from 'react-bootstrap/Nav';

const Navbar = () => (
  <Nav className="justify-content-end">
    <Nav.Item>
      <Nav.Link href=""><button>Sign-up</button></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="">Login</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="">Store</Nav.Link>
    </Nav.Item>
  </Nav>
)

export default Navbar;