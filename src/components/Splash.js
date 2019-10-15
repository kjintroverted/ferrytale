import React from 'react';
import styled from 'styled-components';

const Splash = () => {
  return (
    <Container>
      <h1>Ferry Tale Creative</h1>
      <h3>Store Coming soon!</h3>
      <h1>@FerryTaleCreative</h1>
      <h3>Let's talk about your Ferry Tale, connect with us on IG</h3>
    </Container>
  )
}

export default Splash;

const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & * {
    color: white;
    text-align: right;
    font-family: "Raleway";
    margin: 5px 20px;

  }
`