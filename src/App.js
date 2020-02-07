import React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';

import './App.css';
import IGBackground from './components/IGBackground';
import NavBar from './components/NavBar';

function App() {
  return (
    <Content>
      <NavBar />
      <main>
        <IGBackground
          username="ferrytalecreative"
          filterOpts={ ["to bottom right", "teal", "blue", "purple"] }
          offset={ 100 }
        />
        <Banner>
          <Feature>
            <Billboard>
              <h1>The store is <b>LIVE!</b></h1>
              <h3>To shop our limited selection, check out our <a href="https://etsy.com/shop/FerryTaleCreative">Etsy Shop</a></h3>
            </Billboard>
            <Details>
              <Button variant="contained" color="secondary" href="https://etsy.com/shop/FerryTaleCreative">
                Shop now
            </Button>
              <p>Be sure to check back here in the New Year, January 1, and we will have a full catalog of exciting products for you to check out. Until then we'd love to connect with you so be sure to follow us on Instagram <a href="https://www.instagram.com/ferrytalecreative/">@FerryTaleCreative</a> and check out our contact form in the Connect section if you have a questions or request.</p>
            </Details>
          </Feature>
        </Banner>
        <section style={ { height: 1000 } }>

        </section>
      </main>
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
      height: 50vh;
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
      margin-top: 100px;
      & a {
        color: white;
      }
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