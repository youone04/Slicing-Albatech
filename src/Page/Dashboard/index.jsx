import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container>
      <h1 className="text-center my-4">Dashboard</h1>
      <Row>
        <Col md={6} lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>Users</Card.Title>
              <Card.Text>Manage users and permissions.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>Products</Card.Title>
              <Card.Text>Manage your products and inventory.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>Reports</Card.Title>
              <Card.Text>Generate and view reports.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
