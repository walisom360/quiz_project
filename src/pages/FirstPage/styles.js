import styled from 'styled-components';


export const Container = styled.div`
  width:100%;
  height:100%;
`;

export const Background = styled.div`
 

 
  background: url(${props => (props.banner)}) no-repeat;
  background-size: 100% 100%;
 
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: scale-down;
  z-index: -3;
`;



