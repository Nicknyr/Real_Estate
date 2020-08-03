import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import theme from '../Theme';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import House from '../assets/house3.jpg';
import BathtubOutlinedIcon from '@material-ui/icons/BathtubOutlined';
import KingBedOutlinedIcon from '@material-ui/icons/KingBedOutlined';
import SquareFootOutlinedIcon from '@material-ui/icons/SquareFootOutlined';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';

const useStyles = makeStyles({
    container: {
        height: '85vh',
        overflow: 'scroll',
        padding: theme.spacing(1)
    },
    paper: {
        height: 'auto',
        width: '18rem',
    },
    ul: {
        display: 'flex',
        flexWrap: 'wrap',
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        justifyContent: 'space-between'
    },
    li: {
        margin: '.3rem'
    },
    houseContainer: {
        height: 'auto',
        width: '100%',
        marginBottom: theme.spacing(2)
    },
    imageContainer: {
        height: 'auto'
    },
    houseDetails: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1)
    },
    buttonContainer: {
        width: '100%',
        padding: theme.spacing(1)
    }
});

const Housepapers = ({papers, loading}) => {
    const classes = useStyles();

    if(loading) {
        return <h2>loading</h2>;
    }

    const listings = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15, 16];

    return (
        <Grid container className={classes.container}>
            <Box align="left" mb={3}>
                <Typography variant="h6">
                    Miami, Florida Homes for Sale & Real Estate
                </Typography>
                <Typography variant="body1">
                    16,417 homes available
                </Typography>
            </Box>
            <ul className={classes.ul}>
                {listings.map((listing, index) => (
                    <li className={classes.li}>
                        <Paper className={classes.paper}>
                            <Box className={classes.houseContainer}>
                                <Grid container display="flex" flexDirection="column">
                                    <Grid item className={classes.imageContainer}>
                                        <Box className={classes.imageContainer}>
                                            <img src={House}  width="100%" />
                                        </Box>
                                    </Grid>
                                    <Grid item className={classes.houseDetails}>
                                        <Box display="flex">
                                            <Typography variant="h6" className={classes.price}>$2,500</Typography>
                                        </Box>
                                        <Box display="inline" display="inline-flex" alignItems="center" mr={1}>
                                            <KingBedOutlinedIcon style={{ fontSize: '1.2rem'}} />
                                            <Box pl={.5}>
                                                <Typography variant="body1">3bd</Typography>
                                            </Box>
                                        </Box>
                                        <Box display="inline" display="inline-flex" alignItems="center" mr={1}>
                                            <BathtubOutlinedIcon style={{ fontSize: '1.2rem'}} />
                                            <Box pl={.5}>
                                                <Typography variant="body1">2ba</Typography>
                                            </Box>                        
                                        </Box>
                                        <Box display="inline" display="inline-flex" alignItems="center" mr={1}>
                                            <SquareFootOutlinedIcon style={{ fontSize: '1.2rem'}} />
                                            <Box pl={.5}>
                                                <Typography variant="body1">2,004 sqft</Typography>
                                            </Box>
                                        </Box>
                                        <Box align="left" className={classes.address}>
                                            2950 SW 3rd Ave #9A
                                            Coral Way, Miami, Florida
                                        </Box>
                                    </Grid>
                                    <Grid item className={classes.buttonContainer}>
                                        <Box>
                                            <Button variant="outlined" fullWidth>Check availability</Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </li>
                ))}
            </ul>
        </Grid>
    )
}

export default Housepapers;


/*
        <ul>
            {papers.map((paper, index) => (
                <li key={paper[index][0]}>
                    <img src={paper[9][0]} height="200" />
                </li>
            ))}
        </ul>
*/