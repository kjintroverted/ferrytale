import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const Splash = () => {
  return (
    <Container>
      <Main>Ferry Tale Creative</Main>
      <Text>Thanks for stopping by. To stay current on the launch of our product follow us on instagram.</Text>
      <Text>Our store will open at the end of October so check back soon and get ready for your own pair of these awesome ears.</Text>
      <Button variant="outlined" color="inherit" href="https://instagram.com/ferrytalecreative">
        @ferrytalecreative
      </Button>
    </Container>
  )
}

export default Splash;

const Container = styled.div`
  height: 100%;
  padding: 10px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: white;
`

const Main = styled.h1`
  margin: 10px 0px;
  font-size: 4em;
`

const Text = styled.h3`
  margin: 10px 0px;
  font-size: 1.2em;
`