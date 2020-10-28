import { Container, Typography } from '@material-ui/core';
import React from 'react';
import Header from '../components/Header';

const Home: React.FC = () => {
  return (
    <Container style={{ height: '100vh' }}>
      <Header />
      <Typography>Hello world</Typography>
    </Container>
  );
};
export default Home;
