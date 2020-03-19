import styled from 'styled-components';

export const Container = styled.div`


  h1{
    color:#fff;
  }
`;



 
export const DivOptions = styled.div`
 display:flex;
 flex-direction:row;

 margin-top:40px;
`

export const Card = styled.div`
  width:220px;
  height:280px;
  border-radius:4px;
  border:1px solid #fff;
  margin-right:27px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  cursor: pointer;
  
  img{
    width:90%;
    height:77%;
    margin-bottom:4px;
  }

  &:hover{
    background:rgba(0, 0, 0, 0.2);

  }

`

export const Marked = styled.div``

export const Option = styled.div`
 display:flex;
 align-items:center;
 justify-content:center;
 width:140px;
 height:40px;
 border-radius:4px;
 margin-top:4px;

 background:#1271CC;

 font-weight:bold;
`


export const Background = styled.div`
  

 
  background: url(${props => (props.banner)}) no-repeat;
  background-size: 100% 100%;

  filter: brightness(40%);
 
  width: 100%;
  height:100%;
 
  object-fit: fill;
  z-index: -3;

  position:absolute;
`;
