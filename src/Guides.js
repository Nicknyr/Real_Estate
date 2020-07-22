import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import theme from './Theme';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import House from './assets/House.svg';
import Listings from './assets/Listings.svg';
import Search from './assets/Search.svg';
import Contract from './assets/Contract.svg';

const useStyles = makeStyles({
    section: {
        margin: '5rem 0',
        background: '#DFF2D8',
        height: 'auto',
        width: '100%',
        paddingTop: '5rem',
        paddingBottom: '5rem',
        display: 'flex',
        justifyContent: 'center'
    },
    description: {
        fontWeight: 'bolder',
        fontSize: '1.8rem',
        color: 'black'
    },
    gridItem: {
       height: 'auto',
       //background: 'blue',
       marginTop: '2.5rem',

       [theme.breakpoints.up('sm')]: {
        marginTop: '.5rem'
      }
    },
    container: {
        height: '100%',
        //background: 'red'
    },
    h6: {
        //color: '#FFF',
        fontSize: '1.4rem'
    },
    button: {
        margin: '1rem 0'
    }
});


export default function Guides() {
    const classes = useStyles();

    return (
        <div className={classes.section}>
            <Grid container className={classes.container} display="flex" justify="center" md={8}>
                <Grid container display="flex" justify="center" sm={6}>
                    <Grid item xs={10}>
                        <Box align="left">
                            <Typography variant="h6">Our Guides</Typography>
                            <Typography variant="h5" color="secondary" className={classes.description}>
                                All the information you need to make an informed decision about your new home in one place
                            </Typography>
                            <Button variant="contained" className={classes.button}>See all the guides</Button>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container xs={10} sm={6}>
                    <Grid container xs={10}className={classes.gridItem}>
                        <Grid item xs={6}>
                            <Box align="left">
                                <img src={Search} height="100" />
                            </Box>
                        </Grid>
                        <Grid item xs={6}> 
                            <Box display="flex" flexDirection="column">
                                <Typography variant="h6" className={classes.h6}>Buyer Guides</Typography>
                                <Typography variant="body1">How to buy <ArrowForwardIcon /></Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container xs={10} className={classes.gridItem}>
                        <Grid item xs={6}>
                            <Box align="left">
                                <img src={Contract} height="100" />
                            </Box>
                        </Grid>
                        <Grid item xs={6}> 
                            <Box display="flex" flexDirection="column">
                                <Typography variant="h6" className={classes.h6}>Renter Guides</Typography>
                                <Typography variant="body1">How to buy <ArrowForwardIcon /></Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container xs={10} className={classes.gridItem}>
                        <Grid item xs={6}>
                            <Box align="left">
                                <img src={House} height="100" />
                            </Box>
                        </Grid>
                        <Grid item xs={6}> 
                            <Box display="flex" flexDirection="column">
                                <Typography variant="h6" className={classes.h6}>Seller Guides</Typography>
                                <Typography variant="body1">How to buy <ArrowForwardIcon /></Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

{/*
<img src={House} height="80" />

<Box align="center">
    <Typography variant="h6">Our Guides</Typography>
    <Typography variant="h5" color="secondary" className={classes.description}>
        All the information you need to make an informed decision about your new home in one place
    </Typography>
    <Button variant="text">See all the guides</Button>
</Box> 

<Grid container direction="row" justify="center" alignItems="center" className={classes.guidesIntro}>
                   <Grid xs={6} className={classes.gridItem} display="flex" justifyContent="flex-end">
                       <Box align="right" pr={5}>
                            <img src={House} height="80" />
                       </Box>
                   </Grid>
                   <Grid item xs={6} className={classes.gridItem}>
                       <Box align="left">
                            <Typography variant="h6">Buyer Guides</Typography>
                            <Typography variant="body1">How to buy <ArrowForwardIcon /></Typography>
                       </Box>
                   </Grid>
                   <Grid xs={6} className={classes.gridItem} display="flex" justifyContent="flex-end">
                       <Box align="right" pr={5}>
                            <img src={House} height="80" />
                       </Box>
                   </Grid>
                   <Grid item xs={6} className={classes.gridItem}>
                       <Box align="left">
                            <Typography variant="h6">Buyer Guides</Typography>
                            <Typography variant="body1">How to buy <ArrowForwardIcon /></Typography>
                       </Box>
                   </Grid>
                   <Grid xs={6} className={classes.gridItem} display="flex" justifyContent="flex-end">
                       <Box align="right" pr={5}>
                            <img src={House} height="80" />
                       </Box>
                   </Grid>
                   <Grid item xs={6} className={classes.gridItem}>
                       <Box align="left">
                            <Typography variant="h6">Buyer Guides</Typography>
                            <Typography variant="body1">How to buy <ArrowForwardIcon /></Typography>
                       </Box>
                   </Grid>
               </Grid>
           </Grid>
*/}