import React, {useState} from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { addBucketFB, createVoca } from "./redux/modules/voca";
import { useHistory } from 'react-router-dom';

const AddCard = (props) => {
  const history = useHistory();
  const Japanese = React.useRef();
  const Korean = React.useRef();
  const Sentence = React.useRef();
  const SentenceKr = React.useRef();
  

  const dispatch = useDispatch();
  const my_vocaList = useSelector((state)=> state.voca.list);

 
  const addVocaList = () => { 
    // 스프레드 문법! 기억하고 계신가요? :) 
    // 원본 배열 list에 새로운 요소를 추가해주었습니다.
    // setList([...list, text.current.value]);

    // dispatch(createVoca({
    //   id: my_vocaList.length === 0 ? 0 : my_vocaList[my_vocaList.length -1].id + 1,
      // jp: Japanese.current.value,
      // kr: Korean.current.value,
      // sentenceJp: Sentence.current.value,
      // sentenceKr: SentenceKr.current.value,
      // check: false

    dispatch(addBucketFB({
      idx: my_vocaList[my_vocaList.length -1].idx +1,
      jp: Japanese.current.value,
      kr: Korean.current.value,
      sentenceJp: Sentence.current.value,
      sentenceKr: SentenceKr.current.value,
      check: false
    }))
  }

  return(
    <Wraper>
      <Card>
      <ContentsWraper>
        <CardHeader>
          <h2>단어 추가하기</h2>
        </CardHeader>

        <DetailContent>
          <p>
            <span>일어</span>
            <input type="text" ref={Japanese}></input>
          </p>
          <p>
            <span>의미</span>
            <input type="text" ref={Korean}></input>
          </p>
          <p>
            <span>예문</span>
            <input type="text" ref={Sentence}></input>
          </p>
          <p>
            <span>해석</span>
            <input type="text" ref={SentenceKr}></input>
          </p>
          <button onClick={()=>{addVocaList(); history.goBack()}}>저장하기</button>
        </DetailContent>

      </ContentsWraper>
    </Card>
    </Wraper>

  )
} 

const Wraper = styled.div`
  margin:0 auto;
  display: flex;
  flex-direction: column;
  align-items:center;
  /* @media (min-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
  } */
`;
const Card = styled.div`
  margin: 2em ;
  padding: 0 2em;
  background-color:#fff;
  border-radius: 20px;
  @media (min-width: 600px){
    flex-basis: 20%;
  }
  @media (min-width: 800px){
    flex-basis: 10%;
  }

`;

const ContentsWraper = styled.div`
  margin: 2em;
  margin-bottom:4em;
`;
const CardHeader = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  h2{
    width:8em;
  }
`;
const DetailContent = styled.div`
  margin-top:2em;
  p{
    font-size: 1.2em;
    span{
      margin-right:1em;
    }
    input{
      width:15em;
      height:2em;
      border: 1px solid transparent;
      border-bottom: 1px solid #222;
      font-size:1em;
      :focus{
        outline:none;
      }
    }
  }
  button{
      margin-top:4em;
      width: 20vw;
      height:5vh;
      border-radius: 100px;
      border: 1px solid transparent;
      cursor:pointer;
    }
`;
export default AddCard;