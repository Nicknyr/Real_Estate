import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Explore from './Explore';
import Footer from './Footer';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/styles';
import theme from './Theme';
import CssBaseline from '@material-ui/core/CssBaseline';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Navbar />
        <Hero />
        <Features />
        <Explore />
      </Container>
    </ThemeProvider>
  );
}

export default App;
