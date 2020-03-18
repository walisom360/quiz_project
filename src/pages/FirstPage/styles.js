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
 
  width: 800px;
  height: 600px;
 
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
  height: 60px;
  border-radius: 25px;
  cursor: pointer;
  color: white;
  background: #0f2232;
  width: 220px;
  font-size: 26px;
  font-weight: bold;
  border:1px solid #fff;
  position:absolute;
  margin-top:520px;
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