import {Card} from 'react-bootstrap';

const Consultation = () => {
  return (
    <Card className='card-consul mt-5' style={{height:200,borderRadius: 20,background:'#FFCE07', border:'1px solid black'}}>
      <Card.Body>
        <p>special title treatment</p>
        <h3 style={{lineHeight:0}}>
         Build with Albatech.
        </h3>
        <div className='center-div'>
        <div className='button-consul mt-5'>Consultation Now</div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Consultation;