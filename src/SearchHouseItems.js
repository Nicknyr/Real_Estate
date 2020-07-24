import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import theme from './Theme';
import Typography from '@material-ui/core/Typography';
import House from './assets/house3.jpg';
import BathtubOutlinedIcon from '@material-ui/icons/BathtubOutlined';
import KingBedOutlinedIcon from '@material-ui/icons/KingBedOutlined';
import SquareFootOutlinedIcon from '@material-ui/icons/SquareFootOutlined';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';

const useStyles = makeStyles({
    section: {
        margin: '5rem 0'
    },
    paper: {
        padding: theme.spacing(1)
    },
    houseContainer: {
        height: 'auto'
    },
    price: {
        fontSize: '1.3rem'
    },
    address: {
        lineHeight: '1.5'
    }
});


export default function SearchHouseItems() {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item>
                <Paper className={classes.paper}>
                    <Box className={classes.houseContainer}>
                        <img src={House} height="auto" width="100%"/>
                        <Box display="flex">
                            <Typography variant="h5" className={classes.price}>$450,000</Typography>
                            <Box display="inline-flex" alignItems="center" pl={1}>
                                <ArrowUpwardOutlinedIcon />
                            </Box>
                        </Box>
                        <Box display="inline" display="inline-flex" alignItems="center" mr={2}>
                            <KingBedOutlinedIcon />
                            <Box pl={.5}>
                                <Typography variant="body1">3bd</Typography>
                            </Box>
                        </Box>
                        <Box display="inline" display="inline-flex" alignItems="center" mr={2}>
                            <BathtubOutlinedIcon />
                            <Box pl={.5}>
                                <Typography variant="body1">2ba</Typography>
                            </Box>                        
                        </Box>
                        <Box display="inline" display="inline-flex" alignItems="center" mr={2}>
                            <SquareFootOutlinedIcon />
                            <Box pl={.5}>
                                <Typography variant="body1">2,004 sqft</Typography>
                            </Box>
                        </Box>
                        <Box align="left" className={classes.address}>
                            2950 SW 3rd Ave #9A
                            Coral Way, Miami, Florida
                        </Box>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    );
}