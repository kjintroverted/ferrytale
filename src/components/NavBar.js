import React from 'react';
import styled from 'styled-components';
import { Spacer } from '.';
import { IconButton } from '@material-ui/core';

const NavBar = () => {

  return (
    <Bar>
      <Spacer />
      <h1 style={ { alignSelf: "center" } }>Ferry Tale Creative</h1>
      <Spacer />
      <IconButton>
        <i className="material-icons">shopping_cart</i>
      </IconButton>
    </Bar>
  )
}

export default NavBar;

const Bar = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  width: 100vw;
  height: 100px;
  align-items: flex-end;
  background: white;
`