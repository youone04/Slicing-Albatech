import React from 'react';
import {Nav, Navbar } from 'react-bootstrap';

const MobileNavbar = () => {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Navbar expand="sm" className='navbar-dashboard'>
      <Navbar.Toggle aria-controls="myNavbar" onClick={handleToggle} />
      <Navbar.Collapse id="myNavbar" in={open}>
        <Nav className="mr-auto">
          <Nav.Link href="#" className="active">Dashboard</Nav.Link>
          <Nav.Link href="#">Age</Nav.Link>
          <Nav.Link href="#">Gender</Nav.Link>
          <Nav.Link href="#">Geo</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MobileNavbar;
