import React from 'react';

import { Container,Background,ButtonNext } from './styles';

import img from '../../assets/Tela-Inicial-2.png';

//import img from '../../assets/Tela-Inicial-1.1.png';


export default function PageTwo() {
  return (
    <Container>
      <Background banner={img}  />
      {/* <ButtonNext>Iniciar</ButtonNext> */}
    </Container>
  );
}
