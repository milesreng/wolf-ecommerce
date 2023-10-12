import React from 'react'
// import { Navbar, Nav, Container } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'

export const Header = () => {
  return (
    <header>
      <div className="w-full flex flex-row justify-between px-4 md:px-8 py-4 bg-forest border-b-2 border-forest-900 text-cloud-50">
        <h1 className="text-2xl">WolfShop</h1>
        <div className='flex flex-row gap-4 md:gap-8 align-middle'>
          <a href='/cart'
            className='flex flex-row gap-2 my-auto'>
            <FaShoppingCart className='my-auto' /> Cart
          </a>
          <a href='/login'
            className='flex flex-row gap-2 my-auto'>
            <FaUser className='my-auto' /> Log in
          </a>
        </div>
      </div>
      {/* <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand>WolfShop</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse>
            <Nav className='ms-auto'>
              <Nav.Link href='/cart'><FaShoppingCart /> Cart</Nav.Link>
              <Nav.Link href='/login'><FaUser /> Log in</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </header>
  )
}
