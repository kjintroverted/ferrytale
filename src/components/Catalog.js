import React from 'react';
import styled from 'styled-components';
import { Header } from '.';

const Catalog = () => {
  return (
    <Content>
      <Header>Catalog.</Header>
    </Content>
  )
}

export default Catalog;

const Content = styled.section`
  background: white;
  min-height: 200px;
  padding: 10px 10px;
`