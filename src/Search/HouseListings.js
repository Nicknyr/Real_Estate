import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import theme from '../Theme';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import House from '../assets/house3.jpg';
import BathtubOutlinedIcon from '@material-ui/icons/BathtubOutlined';
import KingBedOutlinedIcon from '@material-ui/icons/KingBedOutlined';
import Heart from '@material-ui/icons/FavoriteBorder';
import SquareFootOutlinedIcon from '@material-ui/icons/SquareFootOutlined';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import Home1 from '../assets/house1.jpg';
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';
import Controls from './Controls';

const useStyles = makeStyles({
    container: {
        height: '85vh',
        overflow: 'scroll',
        //padding: theme.spacing(1),
    },
    paper: {
        height: 'auto',
        width: '100%',

        [theme.breakpoints.up('md')]: {
            width: '18rem',
            margin: '2rem 0',
        }
    },
    ul: {
        display: 'flex',
        flexWrap: 'wrap',
        listStyleType: 'none',
        marginTop: '.3rem',
        padding: 0,
        justifyContent: 'center',

        [theme.breakpoints.up('md')]: {
            justifyContent: 'space-between',
        }
    },
    li: {
       //margin: '.3rem',
    },
    houseContainer: {
        height: 'auto',
        width: '100%',
        marginBottom: theme.spacing(2),
        borderBottom: '5px solid rgb(82, 84, 165)',
    },
    image: {
        minHeight: '150px !important',
        //maxHeight: '150px !important',
        objectFit: 'cover',
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',
        position: 'relative',
    },
    heart: {
        position: 'absolute',
        top: '5px',
        left: '10px',
        zIndex: '100',
        color: 'white'
    },
    openHouse: {
        height: '2.5rem',
        width: '10rem',
        position: 'absolute',
        top: '0',
        right: '0',
        background: '#2D2D2D',
        zIndex: '100',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        opacity: '.6',
        fontWeight: 'bold',
        padding: '2px 5px',
    },
    imageContainer: {
        position: 'relative',
    },
    houseDetails: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        width: '100%',
        paddingBottom: '1rem',
    },
    buttonContainer: {
        width: '100%',
        padding: theme.spacing(1)
    },
    font: {
        fontSize: '.9rem'
    },
    link: {
        '&:hover': {
            textDecoration: 'none',
        }
    }
});

const Housepapers = ({listings, listing_id, loading}) => {
    const classes = useStyles();

    if(loading) {
        return <CircularProgress /> ;
    }

    console.log('listing_id in HouseListings : ' + listing_id);

    return (
        <Grid container className={classes.container} disableGutters={true}>
            <Box align="left" mb={3}>
                <Typography variant="h6">
                    Miami, Florida Homes for Sale & Real Estate
                </Typography>
                <Typography variant="body2">
                    16,417 homes available
                </Typography>
            </Box>
            <ul className={classes.ul}>
            {/*
                {listings.map((listing, index) => (
                    <li className={classes.li}>
                        <Link href="#">
                            <Paper elevation="3" className={classes.paper}>
                                <Box className={classes.houseContainer}>
                                    <Grid container display="flex" flexDirection="column">
                                        <Grid item>
                                            <Box className={classes.imageContainer}>
                                                <Heart className={classes.heart} fontSize="large" />
                                                <Box className={classes.openHouse}>
                                                    Open House 05/30
                                                </Box>
                                                <img src={listing[9][0]}  width="100%" className={classes.image}/>
                                            </Box>
                                        </Grid>
                                        <Grid item className={classes.houseDetails}>
                                            <Box display="flex">
                                                <Typography variant="h6" className={classes.price}>$2,500</Typography>
                                            </Box>
                                            <Box display="inline" display="inline-flex" alignItems="center" mr={1}>
                                                <KingBedOutlinedIcon style={{ fontSize: '1rem'}} />
                                                <Box pl={.5}>
                                                    <Typography variant="body2" className={classes.font}>3bd</Typography>
                                                </Box>
                                            </Box>
                                            <Box display="inline" display="inline-flex" alignItems="center" mr={1}>
                                                <BathtubOutlinedIcon style={{ fontSize: '1rem'}} />
                                                <Box pl={.5}>
                                                    <Typography variant="body2" className={classes.font}>2ba</Typography>
                                                </Box>                        
                                            </Box>
                                            <Box display="inline" display="inline-flex" alignItems="center" mr={1}>
                                                <SquareFootOutlinedIcon style={{ fontSize: '1rem'}} />
                                                <Box pl={.5}>
                                                    <Typography variant="body2" className={classes.font}>2,004 sqft</Typography>
                                                </Box>
                                            </Box>
                                            <Box align="left" className={classes.address}>
                                                <Typography variant="body2" className={classes.font}>{listing[1]} <br/></Typography>
                                                <Typography variant="body2" className={classes.font}>{listing[4]}, {listing[2]}, {listing[5]}</Typography>
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
                        </Link>
                    </li>
                ))}
                */}
                <Link href="#" className={classes.link}>
                    <Paper elevation="3" className={classes.paper}>
                        <Box className={classes.houseContainer}>
                            <Grid container display="flex" flexDirection="column">
                                <Grid item>
                                    <Box className={classes.imageContainer}>
                                        <Heart className={classes.heart} fontSize="large" />
                                        <Box className={classes.openHouse}>
                                            Open House 05/30
                                        </Box>
                                        <img src={Home1}  width="100%" className={classes.image}/>
                                    </Box>
                                </Grid>
                                <Grid item className={classes.houseDetails}>
                                    <Box display="flex">
                                        <Typography variant="h6" className={classes.price}>$2,500</Typography>
                                    </Box>
                                    <Box display="inline" display="inline-flex" alignItems="center" mr={1}>
                                        <KingBedOutlinedIcon style={{ fontSize: '1rem'}} />
                                        <Box pl={.5}>
                                            <Typography variant="body2" className={classes.font}>3bd</Typography>
                                        </Box>
                                    </Box>
                                    <Box display="inline" display="inline-flex" alignItems="center" mr={1}>
                                        <BathtubOutlinedIcon style={{ fontSize: '1rem'}} />
                                        <Box pl={.5}>
                                            <Typography variant="body2" className={classes.font}>2ba</Typography>
                                        </Box>                        
                                    </Box>
                                    <Box display="inline" display="inline-flex" alignItems="center" mr={1}>
                                        <SquareFootOutlinedIcon style={{ fontSize: '1rem'}} />
                                        <Box pl={.5}>
                                            <Typography variant="body2" className={classes.font}>2,004 sqft</Typography>
                                        </Box>
                                    </Box>
                                    <Box align="left" className={classes.address}>
                                        <Typography variant="body2" className={classes.font}></Typography>
                                        <Typography variant="body2" className={classes.font}>123 Main Street, Fort Lauderdale, 33301</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Paper>
                </Link>
                    <Link href="#" className={classes.link}>
                        <Paper elevation="3" className={classes.paper}>
                            <Box className={classes.houseContainer}>
                                <Grid container display="flex" flexDirection="column">
                                    <Grid item>
                                        <Box>
                                            <img src={Home1}  width="100%" className={classes.image}/>
                                        </Box>
                                    </Grid>
                                    <Grid item className={classes.houseDetails}>
                                        <Box display="flex">
                                            <Typography variant="h6" className={classes.price}>$2,500</Typography>
                                        </Box>
                                        <Box display="inline" display="inline-flex" alignItems="center" mr={1}>
                                            <KingBedOutlinedIcon style={{ fontSize: '1rem'}} />
                                            <Box pl={.5}>
                                                <Typography variant="body2" className={classes.font}>3bd</Typography>
                                            </Box>
                                        </Box>
                                        <Box display="inline" display="inline-flex" alignItems="center" mr={1}>
                                            <BathtubOutlinedIcon style={{ fontSize: '1rem'}} />
                                            <Box pl={.5}>
                                                <Typography variant="body2" className={classes.font}>2ba</Typography>
                                            </Box>                        
                                        </Box>
                                        <Box display="inline" display="inline-flex" alignItems="center" mr={1}>
                                            <SquareFootOutlinedIcon style={{ fontSize: '1rem'}} />
                                            <Box pl={.5}>
                                                <Typography variant="body2" className={classes.font}>2,004 sqft</Typography>
                                            </Box>
                                        </Box>
                                        <Box align="left" className={classes.address}>
                                            <Typography variant="body2" className={classes.font}></Typography>
                                            <Typography variant="body2" className={classes.font}>123 Main Street, Fort Lauderdale, 33301</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </Link>
                    <Link href="#" className={classes.link}>
                        <Paper elevation="3" className={classes.paper}>
                            <Box className={classes.houseContainer}>
                                <Grid container display="flex" flexDirection="column">
                                    <Grid item>
                                        <Box>
                                            <img src={Home1}  width="100%" className={classes.image}/>
                                        </Box>
                                    </Grid>
                                    <Grid item className={classes.houseDetails}>
                                        <Box display="flex">
                                            <Typography variant="h6" className={classes.price}>$2,500</Typography>
                                        </Box>
                                        <Box display="inline" display="inline-flex" alignItems="center" mr={1}>
                                            <KingBedOutlinedIcon style={{ fontSize: '1rem'}} />
                                            <Box pl={.5}>
                                                <Typography variant="body2" className={classes.font}>3bd</Typography>
                                            </Box>
                                        </Box>
                                        <Box display="inline" display="inline-flex" alignItems="center" mr={1}>
                                            <BathtubOutlinedIcon style={{ fontSize: '1rem'}} />
                                            <Box pl={.5}>
                                                <Typography variant="body2" className={classes.font}>2ba</Typography>
                                            </Box>                        
                                        </Box>
                                        <Box display="inline" display="inline-flex" alignItems="center" mr={1}>
                                            <SquareFootOutlinedIcon style={{ fontSize: '1rem'}} />
                                            <Box pl={.5}>
                                                <Typography variant="body2" className={classes.font}>2,004 sqft</Typography>
                                            </Box>
                                        </Box>
                                        <Box align="left" className={classes.address}>
                                            <Typography variant="body2" className={classes.font}></Typography>
                                            <Typography variant="body2" className={classes.font}>123 Main Street, Fort Lauderdale, 33301</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </Link>
            </ul>
            {/*
            <Grid container display="flex" flexDirection="row" justifyContent='center'>
                <Box align="center">
                    <Controls />
                </Box>
            </Grid>
            */}
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