import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Explore from './Explore';
import Guides from './Guides'
import Footer from './Footer';
import Container from '@material-ui/core/Container';


export default function Home() {

    return (
        <>
            <Container>
                <Navbar />
                <Hero />
                <Features />
                <Explore />
            </Container>
                <Guides />
            <Container>
                <Footer />
            </Container>
        </>
    );
}