import React from 'react';

import { Container,Background,ButtonNext } from './styles';

import img from '../../assets/Tela-Inicial-4.png';


export default function FirstPage({history}) {

 function next(){
   history.push('/youdescription')
 }


  return (
    <Container>
      <Background banner={img}  />
      <ButtonNext onClick={next}>Avançar</ButtonNext>
    </Container>
  );
}
