// Import necessary React and React Bootstrap components
import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// Create a functional component for the Navbar
const MyNavbar = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <div className='logo'>
        <img src={require('./logo.png')} alt='logo' />
      </div>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ms-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#link'>Menu</Nav.Link>
          <Nav.Link href='#link'>AboutUs</Nav.Link>
          <Nav.Link href='#link'>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNavbar
