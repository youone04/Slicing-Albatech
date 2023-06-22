import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardHome from './CardHome';

const CompletPackage = () => {
    return (
        <Container className='product-desaign'>
            <div className='mb-3 title-product'>
                <p className='complete-package'>Complete Package</p>
                <h3><b className='product-desaign' style={{textShadow:' 2px 2px black'}}>From product desaign to software continuous delivery</b></h3>
            </div>
            <Row>
                <Col>
                <CardHome img={'/images/content/Group 6.png'} text="Website development  &#10132;" des="High-performance website to reach out more you potential customers" orange={true}/>
                </Col>
                <Col><CardHome img={'/images/content/Mobile apps development.png'} text="Mobile apps development" des="To accelerate your busines process"/></Col>
                <Col><CardHome img={'/images/content/Digital product design.png'} text="Digital product desaign" des="Complete digital creations from UX prototyping  to final UI designs"/></Col>
            </Row>
            <Row>
                <Col><CardHome img={'/images/content/Maintenance.png'}text="Maintenance" des="Make sure your digital environment keep online and updated"/></Col>
                <Col><CardHome img={'/images/content/CMS development.png'} text="CMS development" des="You can your website content yourself"/></Col>
                <Col><CardHome img={'/images/content/Payment.png'} text="Payment" des="Slimplify the payment system with just ons"/></Col>
            </Row>
        </Container>
    );
};

export default CompletPackage;
