import React from 'react'
import {Container,Navbar} from 'react-bootstrap'

  function Header() {
  return (
    <div>
    <Container fluid>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">logo</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
    </div>
  )
}
export default Header;