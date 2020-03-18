import styled from 'styled-components';


export const Container = styled.div`
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top:60px;
`;

export const Background = styled.div`
 

 
  background: url(${props => (props.banner)}) no-repeat;
  background-size: 100% 100%;
 
  width: 1000px;
  height: 700px;
 
  object-fit: scale-down;
  z-index: -3;
`;



