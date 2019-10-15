import React from 'react';
import styled from 'styled-components';

import './App.css';
import IGBackground from './components/IGBackground';
import Splash from './components/Splash';

function App() {
  return (
    <Main>
      <IGBackground username="ferrytalecreative" />
      <Filter />
      <Fence>
        <Splash />
        <Spacer />
      </Fence>
    </Main>
  );
}

export default App;

const Main = styled.div`
  display: flex;
  justify-content: center;
`

const Fence = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  max-width: 1000px;
  display: flex;
  align-items: center;
  margin-left: 10px;
`

const Filter = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to bottom right,teal,blue,purple);
  opacity: .7;
`

const Spacer = styled.div`
  flex: 1;
`
