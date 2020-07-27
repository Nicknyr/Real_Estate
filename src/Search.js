import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import theme from './Theme';
import Typography from '@material-ui/core/Typography';
import SearchHouseItems from './SearchHouseItems';
import axios from 'axios';


const useStyles = makeStyles({
    section: {
        margin: '5rem 0'
    },
});

export default function Features() {
    const classes = useStyles();

    return (
        <div className={classes.section}>
           <Grid container display="flex" justify="center">
               <Grid container>
                    <Box align="left" mb={3}>
                        <Typography variant="h6">
                            Miami, Florida Homes for Sale & Real Estate
                        </Typography>
                        <Typography variant="body1">
                            16,417 homes available
                        </Typography>
                    </Box>
               </Grid>
                {/* Real estate house listings */}
                <SearchHouseItems />
           </Grid>
        </div>
    );
}