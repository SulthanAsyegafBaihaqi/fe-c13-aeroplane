/* eslint-disable react/react-in-jsx-scope */
// import Button from 'react-bootstrap/Button'
import React from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import '../../styles/layout/navbar.css'
import Logo from '../../assets/logo-pesawat.svg'

function navigasiLogin () {
  return (
    <Container >
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar mb-3">
          <Container fluid>
            <Navbar.Brand href="#"><img src={Logo} className="logo-navbar"/></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img src={Logo} className="logo-navbar" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/" className="pt-3 text-black fw-bold">Home</Nav.Link>
                  <Nav.Link href="/about" className="pt-3 text-black fw-bold">About</Nav.Link>
                  <Nav.Link href="/notification"className="pt-3 text-black fw-bold">Notification</Nav.Link>
                  <Nav.Link href="#profil"className="pt-3 text-black fw-bold">Profil</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </Container>
  )
}

export default navigasiLogin