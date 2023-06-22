import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col md={12} lg={12}>
                        <div className="copy-right-admin d-lg-flex">
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
