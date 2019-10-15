import React from 'react';
import styled from 'styled-components';

import './App.css';
import IGBackground from './components/IGBackground';
import Splash from './components/Splash';

function App() {
  return (
    <Main>
      <IGBackground username="ferrytalecreative" />
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
  box-shadow: rgba(0,0,0,.5) 3px 10px;
`

const Fence = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  max-width: 1000px;
  display: flex;
  align-items: center;
`

const Spacer = styled.div`
  flex: 1;
`
