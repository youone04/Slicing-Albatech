import { Container, Row, Col } from 'react-bootstrap';
import { CardTestimonialV1, CardTestimonialV2, CardTestimonialV3 } from './CardTestimonials';

const Testimonials = () => {
  return (
    <div className='bg-image-testimonial mt-5' style={{
      backgroundImage: `url('images/content/Group 25.svg'), url('images/content/Petik (1).png')`,
    }}>
      <div className='mb-3 title-product'>
        <p className='testimonial-text'>Testimonial</p>
        <center>
        <h3 className='testimonial'><b>What clients love in working with Albatech Team</b></h3>
        </center>
      </div>
      <Container className='mt-5'>
        <Row>
          <Col lg={7}
            style={{
              backgroundImage: `url('images/content/Group 24.svg')`,
              backgroundRepeat: 'no-repeat',
              backgroundPositionX: 600,
              backgroundSize: 50,
            }}
          >
            <CardTestimonialV1 title="Amazing People" des="They are people who are not only following the task , but can work as a team. Together." name="Matthhijs Piest" job="COO at WieBetaaltWat" width={'78%'} />
          </Col>

          <Col lg={5}><CardTestimonialV3 /></Col>
        </Row>
        <Row>
          <Col lg={7}>
            <CardTestimonialV2 />
          </Col>
          <Col
            style={{
              backgroundImage: `url('images/content/Petik.png')`,
              backgroundRepeat: 'no-repeat',
              backgroundPositionX: 320,
              backgroundSize: 150,
              backgroundPositionY: 40
            }}
            lg={5}><CardTestimonialV1 title="Partnership approach" des="We felt Like we had a true partner throughout the process. They were clearly interested on our long-term success" name="Matthhijs Piest" job="COO at WieBetaaltWat" width={'100%'} /></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
