import { Row, Col, Container } from "react-bootstrap"

const Progres = () => {
    return (
        <div id="progres">
            <center>
                <h4>Our Progres Comes with a Collaboration Between Creativity, Ideas, and Technology</h4>
            </center>
            <Container className="text-align-center text-progres center-div mt-4">
                <Row>
                    <Col>
                        <h3> 1000+</h3>
                        <p>Designs</p>
                    </Col>
                    <Col>
                        <h3> 30+</h3>
                        <p>Products</p>
                    </Col>
                    <Col>
                        <h3> 58+</h3>
                        <p>Website Developments</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Progres