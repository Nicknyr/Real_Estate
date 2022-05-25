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
import ButtonFilters from './ButtonFilters';

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
        <ButtonFilters />
            <Container>
                <div className={classes.section}>
                    <Grid container display="flex" justify="center">
                        {/* Real estate house listings */}
                        <SearchHouseItems />
                    </Grid>
                </div>
            </Container>
        </>
    );
}