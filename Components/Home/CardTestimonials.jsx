import React from 'react';
import { Card, Image, Col, Row } from 'react-bootstrap';

export const CardTestimonialV1 = ({ title, des, name, job, width }) => {
    return (
        <div className="testimonial-content mb-4">
            <div>
                <h4><b>{title}</b></h4>
                <Card.Text style={{ fontSize: 20, width: width }}>
                    "{des}"
                </Card.Text>
                <div>

                    <div className='d-flex'>
                        <Image
                            style={{ width: 30, marginRight: 8 }}
                            src="images/content/Ellipse 50.png"
                            roundedCircle
                            alt="Testimonial Photo"
                            className='flex-item'
                        />
                        <div className='flex-item'>
                            <Card.Title style={{ fontSize: 12 }}>{name}t</Card.Title>
                            <Card.Subtitle style={{ color: ' #C4C4C4', fontSize: 12 }}>{job}</Card.Subtitle>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};



export const CardTestimonialV2 = () => {
    return (
        <>
            <Row>
                <Col>
                    <div className="testimonial-content mb-3" style={{ paddingLeft: 0 }}>
                        <div>
                            <b>Amazing People</b>
                            <Card.Text style={{ fontSize: 12 }}>
                                "They are people who are not only following the task , but can work as a team. Together."
                            </Card.Text>
                            <div>

                                <div className='d-flex'>

                                    <div className='flex-item'>
                                        <Card.Title style={{ fontSize: 12 }}>Matthhijs Piest</Card.Title>
                                        <Card.Subtitle style={{ color: ' #C4C4C4', fontSize: 12 }}>COO at WieBetaaltWat</Card.Subtitle>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                </Col>
            </Row>

            <Row>
                <Col></Col>
                <Col>
                    <div className="testimonial-content mb-3" style={{ paddingLeft: 0 }}>
                        <div>
                            <b>Amazing People</b>
                            <Card.Text style={{ fontSize: 12 }}>
                                "They are people who are not only following the task , but can work as a team. Together."
                            </Card.Text>
                            <div>

                                <div className='d-flex'>

                                    <div className='flex-item'>
                                        <Card.Title style={{ fontSize: 12 }}>Matthhijs Piest</Card.Title>
                                        <Card.Subtitle style={{ color: ' #C4C4C4', fontSize: 12 }}>COO at WieBetaaltWat</Card.Subtitle>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </Col>

            </Row>
        </>
    );
};




export const CardTestimonialV3 = () => {
    return (

        <div className="testimonial-content mb-3" style={{ paddingLeft: 0 }}>
            <div>
                <b>Amazing People</b>
                <Card.Text style={{ fontSize: 12 }}>
                    "They are people who are not only following the task , but can work as a team. Together."
                </Card.Text>
                <div>

                    <div className='d-flex'>

                        <div className='flex-item'>
                            <Card.Title style={{ fontSize: 12 }}>Matthhijs Piest</Card.Title>
                            <Card.Subtitle style={{ color: ' #C4C4C4', fontSize: 12 }}>COO at WieBetaaltWat</Card.Subtitle>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    );
};

