import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import theme from '../Theme';
import Typography from '@material-ui/core/Typography';
import ApartmentIcon from '@material-ui/icons/Apartment';
import SvgIcon from '@material-ui/core/SvgIcon';
import Button from '@material-ui/core/Button';
import RealEstate from '../assets/RealEstate.svg';
import Rent from '../assets/Rent.svg';
import Sale from '../assets/Sale.svg'; 

const useStyles = makeStyles({
    section: {
        margin: '5rem 0'
    },
    feature: {
        padding: theme.spacing(5),

        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(2)
          }
    },
    body: {
        marginTop: '.5rem',
        marginBottom: '1rem'
    }
});


export default function Features() {
    const classes = useStyles();

    return (
        <div className={classes.section}>
            <Typography 
                variant="h4" 
                align="center" 
            >
                See how we can help
            </Typography>
            <Grid container justify="center">
                <Grid item xs={12} sm={4} md={3} className={classes.feature}>
                    <Box align="center">
                        <img src={Sale} height="100" />
                        <Typography variant="h5" align="center">Buy a home</Typography>
                        <Typography variant="body1" className={classes.body}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id semper risus in hendrerit gravida rutrum.
                        </Typography>
                        <Button variant="contained">Find a home</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={3} className={classes.feature}>
                    <Box align="center">
                        <img src={Rent} height="100" />
                        <Typography variant="h5">Rent a home</Typography>
                        <Typography variant="body1" className={classes.body}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in mollis nunc sed id semper risus in.
                        </Typography>
                        <Button variant="contained">Find a rental</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={3} className={classes.feature}>
                    <Box align="center">
                        <img src={RealEstate} height="100"/>
                        <Typography variant="h5">See neighborhoods</Typography>
                        <Typography variant="body1" className={classes.body}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem sed risus.
                        </Typography>
                        <Button variant="contained">Learn more</Button>
                    </Box>
                 </Grid>
            </Grid>
        </div>
    );
}