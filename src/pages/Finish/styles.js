import styled from 'styled-components';

export const Container = styled.div`
  /* display:flex;
  align-items:center;
  justify-content:center; */

  h1{
    color:#fff;
    font-size:71px;
    margin-top:200px;
  }
`;


export const Background = styled.div`
  

 
  background: url(${props => (props.banner)}) no-repeat;
  background-size: 100% 100%;

  filter: brightness(30%);
 
  width: 100%;
  height:100%;
 
  object-fit: fill;
  z-index: -3;

  position:absolute;
`;

