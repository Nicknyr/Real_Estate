import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import theme from '../Theme';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Miami from '../assets/miami.jpg';
import Philly from '../assets/philly.jpg';
import NewOrleans from '../assets/neworleans.jpg';
import Chicago from '../assets/chicago.jpg';
import Home1 from '../assets/house1.jpg';
import Home2 from '../assets/house2.jpg';
import Home3 from '../assets/house3.jpg';
import Home4 from '../assets/house4.jpg';
import Home5 from '../assets/house5.jpg';
import Home6 from '../assets/house6.jpg';
import Home7 from '../assets/house7.jpg';
import Home8 from '../assets/house8.jpg';
import Home9 from '../assets/house9.jpg';
import Home10 from '../assets/house10.jpg';
import Home11 from '../assets/house11.jpg';
import Home12 from '../assets/house12.jpg';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const useStyles = makeStyles({
    section: {
        margin: '5rem 0'
    },
    media: {
        height: '100%',
        backgroundSize: 'cover',
        transition: 'transform .2s',
        filter: `brightness(80%)`,

        '&:img': {
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
    },
    cardActionArea: {
        height: '100%',
        
        transition: `transform .2s`, /* Animation */

        '&:hover, &:focus': {
            transform: `scale(1.1)`
        }
    }
});

const ForSaleCard = ({image, city, neighborhood}) => {
    console.log('props in CityCard : ' + image + " " + city + " " + neighborhood);
    const classes = useStyles();
    return (
        <Grid item>
            <Card className={classes.cardLong} raised>
                <CardActionArea className={classes.cardActionArea}>
                    <CardMedia
                    className={classes.media}
                    image={`${image}`}
                    title={city}
                    />
                    <CardContent className={classes.cityContent}>
                        <Box>
                            <Typography variant="body1" className={classes.cityOverlay}>
                                {city}
                            </Typography>
                            <Typography variant="h5" className={classes.neighborhoodOverlay}>
                                {neighborhood}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body1" className={classes.cityBottomOverlay}>
                                View Neighborhood
                                <ArrowForwardIosIcon fontSize="small" style={{ margin: '0 0.3rem'}}/>    
                            </Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}

export default ForSaleCard;



