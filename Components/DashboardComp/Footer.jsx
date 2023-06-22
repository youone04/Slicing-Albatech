import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="mt-5">
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="copy-right-admin d-flex">
                            <p>&copy; PT. Alba Digital Teknologi 2021 | All Righta Reserved</p>
                            <p>Privacy policy | Terms of ervice</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
