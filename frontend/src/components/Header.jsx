import React from 'react'
// import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaUser } from 'react-icons/fa'

export const Header = () => {
  return (
    <header>
      <div className='w-screen flex flex-row justify-between px-4 md:px-8 py-4 bg-forest border-b-2 border-forest-900 text-default-bg'>
        <Link to='/' className='text-2xl'>WolfShop</Link>
        <div className='flex flex-row gap-4 md:gap-8 align-middle'>
          <Link to='/cart'
            className='flex flex-row gap-2 my-auto'>
            <FaShoppingCart className='my-auto mx-4 md:mx-0' /> <span className='hidden md:block'>Cart</span>
          </Link>
          <Link to='/login'
            className='flex flex-row gap-2 my-auto'>
            <FaUser className='my-auto mx-4 md:mx-0' /> <span className='hidden md:block'>Log in</span>
          </Link>
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
