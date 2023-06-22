import { Card } from 'react-bootstrap';

const CardPortopolio = ({text1, title, des, img}) => {
    return (
        <Card className="mb-2 m-2 modif-card-portopolio">
            <Card.Img variant="top" src={img} />
            <Card.Body className='p-3'>
                <p style={{color:'#C4C4C4',lineHeight:0}} className='mt-3'>{text1}</p>
                <Card.Title className='mt-3 card-portopolio'><b>{title}</b></Card.Title>
                <Card.Text className='mt-3' style={{ fontSize: 14 }}>
                   {des}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CardPortopolio;
