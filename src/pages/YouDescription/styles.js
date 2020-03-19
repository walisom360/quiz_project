import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:flex-start;
  padding:100px;

  img{
    width:130px;
    height:90px;
    margin-top:20px;
  }

  h1{
    margin-bottom:20px;
    color:#1271CC;
  }

  textarea{
    border-bottom:4px solid #fff;
    width:60%;
    height: 222px;
    font-size: 18px;
    border-radius:4px;
    padding:10px;
    color: #666;
    background:#353940;
    border: 0;
    border: 1px solid #eee;
    outline:0;
    margin-top:40px;
  }
`;

export const ButtonNext = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
  p {
    margin-right: 6px;
  }
  border: none;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  background: #755684;
  width: 70px;
  font-size: 15px;
  font-weight: bold;
  outline: none;
  margin-left: 10px;
  margin-right: 6px;
  &:hover {
    background: #72159c;
    &:disabled {
      opacity: 0.5;
      cursor: default;
    }
  }
`;

export const DivButton = styled.div`
 display:flex;
 flex-direction:row;
 align-items:center;
 margin-top:30px;

 transition:all 0.4s;
 transition-delay:0.2s;

`