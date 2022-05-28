import React from 'react';
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

const NotFound = () => {
  const history = useHistory();

  return (
    <>
      <Title>올바른 주소를 입력해주세요</Title>
      <BTN onClick={()=> {history.goBack()}}>돌아가기</BTN>
    </>

  )

}
const Title = styled.h2`
  margin-top:5em;
  color: #222;
`;
const BTN = styled.button`
  margin: 1em auto;
  width: 10vw;
  min-width:100px;
  height: 3vh;
  border-radius:100px;
  border: 1px solid transparent;
  box-sizing: border-box;
  cursor:pointer;
`;

export default NotFound;