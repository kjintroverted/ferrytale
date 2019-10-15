import React from 'react';
import styled from 'styled-components';

import './App.css';
import IGBackground from './components/IGBackground';
import Splash from './components/Splash';

function App() {
  return (
    <Main>
      <IGBackground
        username="ferrytalecreative"
        filterOpts={ ["to bottom right", "teal", "blue", "purple"] } />
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
`

const Spacer = styled.div`
  flex: 1;
`
