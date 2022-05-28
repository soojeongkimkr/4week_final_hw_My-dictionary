import React from 'react'
import styled from 'styled-components';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import {faTrashCan} from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';



const Cards = (props) => {
  // store에서 저장된 state를 가지고 온다.
  const my_vocaList = useSelector((state)=> state.voca.list);
  

  return(
    <>
    <Wraper>
      {my_vocaList.map((list,idx) => {
      
        return (
        <Card key={idx}>
         <ContentsWraper>
           <CardHeader>
             <h2>{my_vocaList[idx].jp}</h2>
             <Icons>
               <FontAwesomeIcon icon={faCheck} className="icon"/>
               <FontAwesomeIcon icon={faPenToSquare} className="icon"/>
               <FontAwesomeIcon icon={faTrashCan} className="icon"/>
             </Icons>
           </CardHeader>
 
           <DetailContent>
             <div className='korean'>{my_vocaList[idx].kr}</div>
             <div>{my_vocaList[idx].sentenceJp}</div>
             <div>{my_vocaList[idx].sentenceKr}</div>
           </DetailContent>
         </ContentsWraper>
       </Card>
        )
        }
      )
    }
     
    </Wraper>
  </>
  )
}


/////////// style ////////////

const Wraper = styled.div`
  margin:0 auto;
  display: flex;
  flex-direction: column;
  align-items:center;
  @media (min-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
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
  margin-bottom: 1.5em;
`;
const CardHeader = styled.div`
  display: flex;
  flex-grow:1;
  align-items:center;
  h2{
    width:5em;
    text-align:left;
  }
`;
const Icons = styled.div`
  width:10em;
  text-align:right;
  .icon{
    margin-left: 1em;
    cursor:pointer;
  }
`;
const DetailContent = styled.div`
  text-align: left;
  color: darkblue;
  .korean{
    color:#222;
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 0.5em;
  }
`;


export default Cards;
