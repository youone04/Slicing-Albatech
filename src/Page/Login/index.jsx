import { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { handleLogin } from '../../../actions/handleActions';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className='card-login dashboard-admin'>
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <hr />
          <Form className="login-form">
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={form.email}
                onChange={(e) => setForm({
                  ...form,
                  email: e.target.value
                })}
                required
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={(e) => setForm({
                  ...form,
                  password: e.target.value
                })}
                required
              />
            </Form.Group>
            <Button className='mt-3 button-login' onClick={() => handleLogin(form)} variant="primary" type="button">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
