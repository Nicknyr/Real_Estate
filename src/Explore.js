import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import theme from './Theme';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ApartmentIcon from '@material-ui/icons/Apartment';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import Button from '@material-ui/core/Button';
import Miami from './assets/miami.jpg';
import Philly from './assets/philly.jpg';
import NewOrleans from './assets/neworleans.jpg';
import Chicago from './assets/chicago.jpg';
import Home1 from './assets/house1.jpg';
import Home2 from './assets/house2.jpg';
import Home3 from './assets/house3.jpg';
import Home4 from './assets/house4.jpg';
import Home5 from './assets/house5.jpg';
import Home6 from './assets/house6.jpg';
import Home7 from './assets/house7.jpg';
import Home8 from './assets/house8.jpg';
import Home9 from './assets/house9.jpg';
import Home10 from './assets/house10.jpg';
import Home11 from './assets/house11.jpg';
import Home12 from './assets/house12.jpg';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles({
    section: {
        margin: '5rem 0'
    },
    media: {
        height: '29rem',
        backgroundSize: 'cover',
        transition: 'transform .2s',
        filter: `brightness(80%)`,

        '&:hover': {
            display: 'none'
        }
    },
    cardLong: {
        width: '18rem',
        height: '29rem',
        marginTop: '1rem',
        marginRight: '.5rem',
        marginLeft: '.5rem',
        position: 'relative'
    },
    cardShort: {
        width: '18rem',
        height: '14rem',
        margin: '1rem .5rem',
        position: 'relative'
    },
    cardBackground1: {
        background: '#ED7D3A'
    },
    cardBackground2: {
        background: '#3ABEFF'
    },
    cardBackground3: {
        background: '#D84797'
    },
    cardBackground4: {
        background: '#26FFE6'
    },
    cardContainer: {
        display: 'inline-flex',
        justifyContent: 'flex-start',
        flexWrap: 'nowrap'
    },
    content: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        display: 'flex',
        flexDirection: 'column',
        color: 'snow',
        height: '100%',
        fontWeight: 'bold'
    },
    overlay: {
        fontSize: '1.2rem',
        paddingTop: '.5rem'
    },
    cityContent: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        color: 'snow',
        height: '100%',
        width: '100%',
        fontWeight: 'bold'
    },
    cityOverlay: {
        fontWeight: '400',
        fontSize: '1rem'
    },
    neighborhoodOverlay: {
        fontWeight: 'bold',
        color: 'snow',
        margin: '0.1rem 0'
    },
    cityBottomOverlay: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '1.1rem'
    }
});


export default function Features() {
    const classes = useStyles();

    return (
        <div className={classes.section}>
             <Typography 
                variant="h4" 
                align="center" 
                className={classes.header}
            >
                Explore new neighborhoods
            </Typography>
            <Grid container justify="center">
                <Grid item xs={12} sm={8} md={5}>
                    <Box align="center">
                        <Typography variant="body1">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>
                    </Box>
                </Grid>
                <Grid container justify="center" className={classes.cardContainer}>
                    {/* Section One */ }
                    <Grid item>
                        <Card className={classes.cardLong} raised>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={Miami}
                                title="Miami"
                                />
                            </CardActionArea>
                            <CardContent className={classes.cityContent}>
                                <Box>
                                    <Typography variant="body1" className={classes.cityOverlay}>
                                        Miami, Florida
                                    </Typography>
                                    <Typography variant="h5" className={classes.neighborhoodOverlay}>
                                        South Beach
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body1" className={classes.cityBottomOverlay}>
                                        View Neighborhood
                                        <ArrowForwardIosIcon fontSize="small" style={{ margin: '0 0.3rem'}}/>    
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={[classes.cardShort, classes.cardBackground1]} raised>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                title="User Review"
                                />
                                <CardContent className={classes.content}>
                                    <Box>
                                        <Typography variant="body1" className={classes.overlayTitleTop}>
                                            User
                                        </Typography>
                                        <Typography variant="body1" className={classes.overlayTitle}>
                                            Nick, New York resident
                                        </Typography>
                                        <Typography variant="body2" className={classes.overlay}>
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className={classes.cardShort} raised>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={Home1}
                                title="Home for sale"
                                />
                            </CardActionArea>
                            <CardContent className={classes.cityContent}>
                                <Box>
                                    <Typography variant="body1" className={classes.cityOverlay}>
                                        Fort Lauderdale, Florida
                                    </Typography>
                                    <Typography variant="h5" className={classes.neighborhoodOverlay}>
                                        Las Olas Isles
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body1" className={classes.cityBottomOverlay}>
                                        View Neighborhood
                                        <ArrowForwardIosIcon fontSize="small" style={{ margin: '0 0.3rem'}}/>    
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.cardShort} raised>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={Home2}
                                title="Home for sale"
                                />
                            </CardActionArea>
                            <CardContent className={classes.cityContent}>
                                <Box>
                                    <Typography variant="body1" className={classes.cityOverlay}>
                                        Boston, Massachusets
                                    </Typography>
                                    <Typography variant="h5" className={classes.neighborhoodOverlay}>
                                        Brookline
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body1" className={classes.cityBottomOverlay}>
                                        View Neighborhood
                                        <ArrowForwardIosIcon fontSize="small" style={{ margin: '0 0.3rem'}}/>    
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                        <Card className={classes.cardShort} raised>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={Home3}
                                title="Home for sale"
                                />
                            </CardActionArea>
                            <CardContent className={classes.cityContent}>
                                <Box>
                                    <Typography variant="body1" className={classes.cityOverlay}>
                                        San Diego, California
                                    </Typography>
                                    <Typography variant="h5" className={classes.neighborhoodOverlay}>
                                        La Jolla
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body1" className={classes.cityBottomOverlay}>
                                        View Neighborhood
                                        <ArrowForwardIosIcon fontSize="small" style={{ margin: '0 0.3rem'}}/>    
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* Section Two */}
                    <Grid item>
                        <Card className={classes.cardLong} raised>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={Philly}
                                title="Philadelphia"
                                />
                            </CardActionArea>
                            <CardContent className={classes.cityContent}>
                                <Box>
                                    <Typography variant="body1" className={classes.cityOverlay}>
                                        Philadelphia, Pennsylvania
                                    </Typography>
                                    <Typography variant="h5" className={classes.neighborhoodOverlay}>
                                        Downtown
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body1" className={classes.cityBottomOverlay}>
                                        View Neighborhood
                                        <ArrowForwardIosIcon fontSize="small" style={{ margin: '0 0.3rem'}}/>    
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.cardShort} raised>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={Home4}
                                title="Home for sale"
                                />
                            </CardActionArea>
                            <CardContent className={classes.cityContent}>
                                <Box>
                                    <Typography variant="body1" className={classes.cityOverlay}>
                                        Long Island, New York
                                    </Typography>
                                    <Typography variant="h5" className={classes.neighborhoodOverlay}>
                                        Plainview
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body1" className={classes.cityBottomOverlay}>
                                        View Neighborhood
                                        <ArrowForwardIosIcon fontSize="small" style={{ margin: '0 0.3rem'}}/>    
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                        <Card className={[classes.cardShort, classes.cardBackground2]} raised>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                title="User Review"
                                />
                                <CardContent className={classes.content}>
                                    <Box>
                                        <Typography variant="body1" className={classes.overlayTitleTop}>
                                            User
                                        </Typography>
                                        <Typography variant="body1" className={classes.overlayTitle}>
                                            Nick, New York resident
                                        </Typography>
                                        <Typography variant="body2" className={classes.overlay}>
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Share
                                </Button>
                                <Button size="small" color="primary">
                                Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.cardShort} raised>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={Home5}
                                title="Home for sale"
                                />
                            </CardActionArea>
                            <CardContent className={classes.cityContent}>
                                <Box>
                                    <Typography variant="body1" className={classes.cityOverlay}>
                                        Portsmouth, New Hampshire
                                    </Typography>
                                    <Typography variant="h5" className={classes.neighborhoodOverlay}>
                                        North Hampton
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body1" className={classes.cityBottomOverlay}>
                                        View Neighborhood
                                        <ArrowForwardIosIcon fontSize="small" style={{ margin: '0 0.3rem'}}/>    
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                        <Card className={classes.cardShort} raised>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={Home6}
                                title="Home for sale"
                                />
                            </CardActionArea>
                            <CardContent className={classes.cityContent}>
                                <Box>
                                    <Typography variant="body1" className={classes.cityOverlay}>
                                        Ocean City, Maryland
                                    </Typography>
                                    <Typography variant="h5" className={classes.neighborhoodOverlay}>
                                        North Ocean City
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body1" className={classes.cityBottomOverlay}>
                                        View Neighborhood
                                        <ArrowForwardIosIcon fontSize="small" style={{ margin: '0 0.3rem'}}/>    
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* Section Three */}
                    <Grid item>
                        <Card className={classes.cardLong} raised>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={NewOrleans}
                                title="New Orleans"
                                />
                            </CardActionArea>
                            <CardContent className={classes.cityContent}>
                                <Box>
                                    <Typography variant="body1" className={classes.cityOverlay}>
                                        New Orleans, Louisiana 
                                    </Typography>
                                    <Typography variant="h5" className={classes.neighborhoodOverlay}>
                                        French District
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body1" className={classes.cityBottomOverlay}>
                                        View Neighborhood
                                        <ArrowForwardIosIcon fontSize="small" style={{ margin: '0 0.3rem'}}/>    
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.cardShort} raised>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={Home7}
                                title="Home for sale"
                                />
                            </CardActionArea>
                            <CardContent className={classes.cityContent}>
                                <Box>
                                    <Typography variant="body1" className={classes.cityOverlay}>
                                        Chicago, Illinois
                                    </Typography>
                                    <Typography variant="h5" className={classes.neighborhoodOverlay}>
                                        Evanston
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body1" className={classes.cityBottomOverlay}>
                                        View Neighborhood
                                        <ArrowForwardIosIcon fontSize="small" style={{ margin: '0 0.3rem'}}/>    
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                        <Card className={classes.cardShort} raised>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={Home8}
                                title="Home for sale"
                                />
                            </CardActionArea>
                            <CardContent className={classes.cityContent}>
                                <Box>
                                    <Typography variant="body1" className={classes.cityOverlay}>
                                        Portland, Oregon
                                    </Typography>
                                    <Typography variant="h5" className={classes.neighborhoodOverlay}>
                                        Bethany
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body1" className={classes.cityBottomOverlay}>
                                        View Neighborhood
                                        <ArrowForwardIosIcon fontSize="small" style={{ margin: '0 0.3rem'}}/>    
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={[classes.cardShort, classes.cardBackground3]} raised>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                title="User Review"
                                />
                                <CardContent className={classes.content}>
                                    <Box>
                                        <Typography variant="body1" className={classes.overlayTitleTop}>
                                            User
                                        </Typography>
                                        <Typography variant="body1" className={classes.overlayTitle}>
                                            Nick, New York resident
                                        </Typography>
                                        <Typography variant="body2" className={classes.overlay}>
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Share
                                </Button>
                                <Button size="small" color="primary">
                                Learn More
                                </Button>
                            </CardActions>
                        </Card>
                        <Card className={classes.cardShort} raised> 
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={Home9}
                                title="Home for sale"
                                />
                            </CardActionArea>
                            <CardContent className={classes.cityContent}>
                                <Box>
                                    <Typography variant="body1" className={classes.cityOverlay}>
                                        Fargo, North Dakota
                                    </Typography>
                                    <Typography variant="h5" className={classes.neighborhoodOverlay}>
                                        West Fargo
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body1" className={classes.cityBottomOverlay}>
                                        View Neighborhood
                                        <ArrowForwardIosIcon fontSize="small" style={{ margin: '0 0.3rem'}}/>    
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* Section Four */}
                    <Grid item>
                        <Card className={classes.cardLong} raised>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={Chicago}
                                title="Chicago"
                                />
                            </CardActionArea>
                            <CardContent className={classes.cityContent}>
                                <Box>
                                    <Typography variant="body1" className={classes.cityOverlay}>
                                        Chicago, Illinois
                                    </Typography>
                                    <Typography variant="h5" className={classes.neighborhoodOverlay}>
                                        Downtown
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body1" className={classes.cityBottomOverlay}>
                                        View Neighborhood
                                        <ArrowForwardIosIcon fontSize="small" style={{ margin: '0 0.3rem'}}/>    
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.cardShort} raised>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={Home10}
                                title="Home for sale"
                                />
                            </CardActionArea>
                            <CardContent className={classes.cityContent}>
                                <Box>
                                    <Typography variant="body1" className={classes.cityOverlay}>
                                        Nashville, Tennessee
                                    </Typography>
                                    <Typography variant="h5" className={classes.neighborhoodOverlay}>
                                        Brentwood
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body1" className={classes.cityBottomOverlay}>
                                        View Neighborhood
                                        <ArrowForwardIosIcon fontSize="small" style={{ margin: '0 0.3rem'}}/>    
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                        <Card className={classes.cardShort} raised>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={Home11}
                                title="Home for sale"
                                />
                            </CardActionArea>
                            <CardContent className={classes.cityContent}>
                                <Box>
                                    <Typography variant="body1" className={classes.cityOverlay}>
                                        Washington, DC
                                    </Typography>
                                    <Typography variant="h5" className={classes.neighborhoodOverlay}>
                                        Georgetown
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body1" className={classes.cityBottomOverlay}>
                                        View Neighborhood
                                        <ArrowForwardIosIcon fontSize="small" style={{ margin: '0 0.3rem'}}/>    
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.cardShort} raised>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={Home12}
                                title="Home for sale"
                                />
                            </CardActionArea>
                            <CardContent className={classes.cityContent}>
                                <Box>
                                    <Typography variant="body1" className={classes.cityOverlay}>
                                        Bronx, New York
                                    </Typography>
                                    <Typography variant="h5" className={classes.neighborhoodOverlay}>
                                        Pelham Bay
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body1" className={classes.cityBottomOverlay}>
                                        View Neighborhood
                                        <ArrowForwardIosIcon fontSize="small" style={{ margin: '0 0.3rem'}}/>    
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                        <Card className={[classes.cardShort, classes.cardBackground4]} raised>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                title="User Review"
                                />
                                <CardContent className={classes.content}>
                                    <Box>
                                        <Typography variant="body1" className={classes.overlayTitleTop}>
                                            User
                                        </Typography>
                                        <Typography variant="body1" className={classes.overlayTitle}>
                                            Nick, New York resident
                                        </Typography>
                                        <Typography variant="body2" className={classes.overlay}>
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Share
                                </Button>
                                <Button size="small" color="primary">
                                Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}