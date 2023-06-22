import { Navbar, Nav, Container } from 'react-bootstrap';

const BurgerMenu = () => {
  return (
    <Navbar className='burger-menu' expand="lg">
      <Container>
        <Navbar.Brand href="#"><img src="/images/logo/alba-logo.png" alt="alba logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <hr/>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Services</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BurgerMenu;
