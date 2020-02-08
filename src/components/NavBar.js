import React, { useState } from 'react';
import styled from 'styled-components';
import { Spacer } from '.';
import { IconButton } from '@material-ui/core';

const NavBar = () => {

  const [compact, setCompact] = useState(window.innerWidth < 500)

  window.addEventListener("scroll", () => setCompact(window.scrollY > 50 || window.innerWidth < 500))

  const Bar = styled.div`
    position: fixed;
    top: 0;
    z-index: 100;
    display: flex;
    width: 100vw;
    height: ${compact ? 50 : 100 }px;
    align-items: ${compact ? 'center' : 'flex-end' };
    background: white;
    padding: 0px 5px;
    transition: all .3s ease-out;
  `

  return (
    <Bar>
      { !compact && <Spacer /> }
      { compact ?
        <h2>Ferry Tale Creative</h2> :
        <h1 style={ { alignSelf: "center" } }>Ferry Tale Creative</h1>
      }
      <Spacer />
      <IconButton>
        <i className="material-icons">shopping_cart</i>
      </IconButton>
    </Bar>
  )
}

export default NavBar;

