import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import styled from 'styled-components';

import './App.css';
import IGBackground from './components/IGBackground';

function App() {
  return (
    <Content>
      <AppBar color="default">
        <Toolbar>
          <Logo>
            <img
              src="https://cdn.discordapp.com/attachments/365602656812793857/643909979467808808/logos_ftc_textless.png"
              alt="ftc_logo" />
          </Logo>
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
        offset={ 55 }
      />
      <Banner>
        <Feature>
          <Billboard>
            <h1>The store is <b>LIVE!</b></h1>
            <h3>Some subtitle.</h3>
          </Billboard>
          <Details>
            <p>Butcher poke coloring book, authentic mixtape lumbersexual franzen food truck fanny pack single-origin coffee skateboard. Butcher lo-fi enamel pin gastropub, plaid lomo poutine taiyaki chicharrones hell of cray. 8-bit hell of lo-fi 3 wolf moon heirloom fixie typewriter mustache jianbing, DIY gentrify chambray.</p>
            <Button variant="contained" color="secondary" href="https://etsy.com/shop/FerryTaleCreative">
              Shop now
            </Button>
          </Details>
        </Feature>
      </Banner>
      <Footer>
        <Contact>
          <h4>Connect with us.</h4>
          <p>Follow us on Instagram <a href="https://www.instagram.com/ferrytalecreative/">@FerryTaleCreative</a></p>
          <p>Have a question? <a href="https://forms.gle/t6NSqEZNVMPoU5Lm7">Ask us here!</a></p>
        </Contact>
      </Footer>
    </Content>
  );
}

export default App;

const Content = styled.div``

const Banner = styled.div`
      height: 95vh;
      display: flex;
      justify-content: center;
      align-items: center;
    `

const Feature = styled.div`
      width: 90%;
      max-width: 700px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
    `

const Billboard = styled.div`
      color: white;
      background: rgba(0, 0, 0, .2);
      padding-left: 10px;
      padding-bottom: 10px;
      border-left: white solid;
    `

const Details = styled.div`
      width: 90%;
      max-width: 600px;
      color: white;
      margin-top: 50px;
      text-align: justify;
    `

const Footer = styled.div`
      min-height: 200px;
      background-color: white;
      display: flex;
      justify-content: center;
  & h4 {
        margin: 15px 0px;
    }
  & p {
        opacity: .7;
        margin: 5px 0px;
    }
  `

const Contact = styled.div`
    width: 90%;
    max-width: 700px;
  `

const Spacer = styled.span`
    flex: 1;
`

const Logo = styled.span`
    width: 40px;
`