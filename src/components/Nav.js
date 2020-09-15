import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Nav from 'react-bootstrap/Nav';

const Navbar = () => (
  <Nav>
    <Nav.Item>
      <Nav.Link href="">Sign-up</Nav.Link>
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