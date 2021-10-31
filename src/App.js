import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import Gallery from "./components/Gallery";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ISIS3710/Marvel-Natobo-exercise</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="wh-text" href="#home">Gallery</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Gallery />
    </div>
  </>
  );
}

export default App;
