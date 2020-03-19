import React from 'react';

import { Container,Background } from './styles';


import img from '../../assets/pone.png';

export default function Finish() {
  return (
    <Container>

     <Background banner={img}  />
      <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <h1>Obrigado pelas suas respostas !!!!</h1>
      </div>
    </Container>
  );
}
