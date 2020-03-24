import styled from 'styled-components';

export const Container = styled.div`
  margin-top:300px;
  display: flex;
  flex-direction:column;
  justify-content: center;

  color:#fff;

  h2{
    color:#fff;
    margin-bottom:40px;
  }

  align-items: center;
  height:100px;
  .chartjs-render-monitor {
    max-width: 80%;
    height: 40%;
    color:#fff;
  }
`;


export const Background = styled.div`
  

 
  background: url(${props => (props.banner)}) no-repeat;
  background-size: 100% 100%;

  filter: brightness(10%);
 
  width: 100%;
  height:100%;
 
  object-fit: fill;
  z-index: -3;

  position:absolute;
`;