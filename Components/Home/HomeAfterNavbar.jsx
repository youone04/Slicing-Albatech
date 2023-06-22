import React from 'react';
import { Row, Col } from 'react-bootstrap';

const HomeAfterNavbar = () => {
  return (
    <Row className="mt-5">
      <Col md={6} className="bg-white">
        <div className="text-mod">
          <h1 className="buildslace">Build Or Scale Up</h1>
          <h1 className="your-development">Your Development Team</h1>
          <p className="line">in weeks, not months</p>
          <div className="book-now">Book Now</div>
        </div>
      </Col>
      <Col md={6} className="bg-white">
        <img className="image-home" src="images/content/Group 81.png" alt="img" />
      </Col>
    </Row>
  );
};

export default HomeAfterNavbar;

