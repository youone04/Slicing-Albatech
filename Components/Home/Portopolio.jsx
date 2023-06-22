import { Row, Col } from 'react-bootstrap';
import CardPortopolio from './CardPortopolio';

const Portopolio = () => {
  return (
    <div className='mt-5'>
      <div className='mb-3 title-product'>
        <p className='complete-package'>Portopolio</p>
        <div className='center-div'>
          <h3 className='portopolio'><b>The software that we build takes our clients to the next level</b></h3>
        </div>
      </div>
      <Row>
        <Col md={4} lg={4}>
          <CardPortopolio text1="Mobile apps" title="ILIOS app (B2B E-commerce)" des="Has a unique selling point where not all companies offer applications for sales, data collection and management" img="images/content/Rectangle 1914.png" />
        </Col>
        <Col md={4} lg={4}>
          <CardPortopolio text1="Website Development" title="Home and Living" des="Albatech helps in creating a website catalog to show brand indetity and information in accordance with vision and mission of Home and Living" img="https://img.freepik.com/free-photo/paper-texture_1194-6012.jpg" />
        </Col>
        <Col md={4} lg={4}>
          <CardPortopolio text1="Website Development" title="HIPPO" des="Albatech help to create e-commerce and company profile for Hippo's Website with realtime transaction and integration with Payment Gateway to accept multi Payment" img={"https://img.freepik.com/free-photo/paper-texture_1194-6012.jpg"} />
        </Col>
      </Row>
      <div className='center-div'>
        <div className='learn-more'>Learn more</div>
      </div>
    </div>
  );
};

export default Portopolio;