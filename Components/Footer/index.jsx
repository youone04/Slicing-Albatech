import { Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <div>
        <div className="mb-3 mt-5 card-footer">
            <div className="mt-5">
                <Row>
                    <Col lg={6} className="text-alba">
                        <div>
                            <img className="mb-4" src="/images/logo/alba-logo.png" alt="alba logo" />
                            <p className="des-alba">Albatech acts a corporate partner to help digitize their business to accelarate trends in remote work</p>
                        </div>
                    </Col>

                    <Col>
                        <b>Website</b>
                        <div className="mt-3">
                            <p>About</p>
                            <p>Service</p>
                            <p>Portopolio</p>
                            <p>Blig</p>
                            <p>Carer</p>
                        </div>
                    </Col>

                    <Col>
                        <b>Contact</b>
                        <div className="mt-3">
                            <p>The Prominence Blok 38D No.25
                             Jl. Jalur Sutera Barat, Alam Sutera,
                             Kota Tangerang, Banten 15143
                            </p>

                            <p>
                                <b>P: </b> +62 81 1889 3383
                            </p>

                           <div className="d-flex justify-content-between">
                           <p>
                                <b>E: </b> Info@albatech.id
                            </p>
                            <img className="whatsapp" src="images/content/WhatsApp Button 1.png" alt="whatsapp"/>
                           </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
        <div className="copy-right d-lg-flex">
        <p>&copy; PT. Alba Digital Teknologi 2021 | All Righta Reserved</p>
        <p>Privacy policy | Terms of ervice</p>
        </div>
        </div>
    )
}

export default Footer;