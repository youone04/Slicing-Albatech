import { Container } from "react-bootstrap";

const FixedNavbar = () => {
  return (
    <nav className="navbar">
      <Container>
        <ul>
          <li><a href="#"> <img src="/images/logo/alba-logo.png" alt="alba logo" /></a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Portopolio</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">career</a></li>
          <li> <div className='contact-us'>Contact Us</div></li>
        </ul>
      </Container>
    </nav>
  );
};

export default FixedNavbar;
