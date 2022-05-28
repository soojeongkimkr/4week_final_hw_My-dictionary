import './App.css';
import Cards from './Cards'
import AddCard from './AddCard';
import NotFound from './NotFound';
import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import { Route, Switch, Link } from 'react-router-dom';


function App() {
  
  

  return (
    <div className="App">
      <Wrap>
        <Header>
          <Title> 일본어 단어장 </Title>
          <Link to ="/add">
            <BTN>
            <FontAwesomeIcon icon={faPlus} size="2x" color="gray"/>
            </BTN>
          </Link>
        </Header>
        <Line></Line>
        <Switch>
          <Route path='/' exact>
            <Cards ></Cards>
          </Route>
          <Route path='/add'>
            <AddCard></AddCard>
          </Route>
          <Route>
            <NotFound/>
          </Route>
        </Switch>
      </Wrap>
      
    </div>
  );
}


//////// style ////////

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #8f77d8;
  display:flex;
  flex-direction:column;
`;
const Header = styled.div`
  padding-top : 1em;
  width: 100vw;
  display:flex;
  justify-content:center;
  align-items:center;
`;
const Title = styled.h1`
  width: 70vw;
  color: #fff;
  margin-left:1.5em;
`;
const BTN = styled.button`
    width: 50px;
    height: 50px;
    border-radius:100px;
    border: 1px solid transparent;
    cursor:pointer;
`;
const Line = styled.hr`
  border: 1px dotted #ddd;
  width: 100vw;
  opacity: .7;
`;

export default App;
