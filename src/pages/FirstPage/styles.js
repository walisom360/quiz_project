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
  margin-top:320px;

 
  background: url(${props => (props.banner)}) no-repeat;
  background-size: 100% 100%;
 
  width: 1000px;
  height: 700px;
 
  object-fit: scale-down;
  z-index: -3;

  position:absolute;
`;





export const ButtonNext = styled.button`
  display: flex;
  justify-content:center;
  align-items: center;
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
  p {
    margin-right: 6px;
  }
  border: none;
  height: 80px;
  border-radius: 25px;
  cursor: pointer;
  color: white;
  background: #755684;
  width: 270px;
  font-size: 32px;
  font-weight: bold;
  position:absolute;
  margin-top:550px;
  outline: none;
  margin-left: 10px;
  margin-right: 32px;
  &:hover {
    background: #72159c;
    &:disabled {
      opacity: 0.5;
      cursor: default;
    }
  }
`;