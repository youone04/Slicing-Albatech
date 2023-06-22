import React from 'react';
import { Card } from 'react-bootstrap';

const CardHome = ({img , text , des, orange}) => {
  return (
    <Card className="mb-2 m-2 modif-card" style={orange? {border:'1px solid orange', height: 190}: {color:'none',  height: 195}}>
      <Card.Body>
        <img src={img} alt='Produk Desaign' />
        <Card.Title className='mt-3 title-card-home'><b>{text}</b></Card.Title>
        <Card.Title className='mt-3 des-card-home'>
          {des}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CardHome;
