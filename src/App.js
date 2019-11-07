import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import styled from 'styled-components';

import './App.css';
import IGBackground from './components/IGBackground';

function App() {
  return (
    <Content>
      <AppBar color="default">
        <Toolbar>
          {/* <IconButton edge="start" color="inherit" aria-label="menu">
            <i className="material-icons">menu</i>
          </IconButton> */}
          <Typography variant="h6">
            Ferry Tale Creative
          </Typography>
          <Spacer />
          <IconButton href="https://etsy.com/shop/FerryTaleCreative">
            <i className="material-icons">shopping_cart</i>
          </IconButton>
        </Toolbar>
      </AppBar>
      <IGBackground
        username="ferrytalecreative"
        filterOpts={ ["to bottom right", "teal", "blue", "purple"] }
        offset={ 65 }
      />
      <Banner>

      </Banner>
    </Content>
  );
}

export default App;

const Content = styled.div``

const Banner = styled.div`
  position:
`

const Spacer = styled.span`
  flex: 1;
`