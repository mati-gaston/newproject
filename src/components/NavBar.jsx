import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to='/'>
          <img src="../Logo.png" alt="Logo" style={{width:'6rem' }} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to ='/'>Inicio</Nav.Link>
            <Nav.Link as={NavLink} to ='/'>Promos</Nav.Link>
            <NavDropdown title="Menú" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to ='/category/veggie'>Hamburguesas Veggie</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to ='/Category/pollo'>Hamburguesas de Pollo </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to ='/category/carne'>Hamburguesas de Carne</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to ='/category/Burguer del mes'>
                Burguer del mes
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;