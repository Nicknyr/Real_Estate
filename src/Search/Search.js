import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import theme from '../Theme';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SearchHouseItems from './SearchHouseItems';
import axios from 'axios';
import Navbar from '../Navbar';
import SearchBar from './SearchBar';

const useStyles = makeStyles({
    section: {
        margin: '1rem 0'
    },
    x: {
        //background: 'red'
    }
});

export default function Features() {
    const classes = useStyles();

    return (
        <>
        <Navbar />
        <SearchBar />
            <Container>
                <div className={classes.section}>
                    <Grid container display="flex" justify="center">
                        {/*
                        <Grid container className={classes.x}>
                            <Box align="left" mb={3}>
                                <Typography variant="h6">
                                    Miami, Florida Homes for Sale & Real Estate
                                </Typography>
                                <Typography variant="body1">
                                    16,417 homes available
                                </Typography>
                            </Box>
                        </Grid>*/}
                            {/* Real estate house listings */}
                            <SearchHouseItems />
                    </Grid>
                </div>
            </Container>
        </>
    );
}