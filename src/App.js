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
      <Splash />
    </Main>
  );
}

export default App;

const Main = styled.div``
const Filter = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to bottom right,teal,blue,purple);
  opacity: .7;
`
