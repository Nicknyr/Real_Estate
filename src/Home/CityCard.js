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
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const useStyles = makeStyles({
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
    cardShort: {
        width: '18rem',
        height: '14rem',
        margin: '1rem .5rem',
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
    },
});

const CityCard = ({image, city, neighborhood, variant}) => {
    console.log('props in CityCard : ' + image + " " + city + " " + neighborhood);
    const classes = useStyles();
    return (
        <Card className={variant == 'short' ? classes.cardShort : classes.cardLong} raised>
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
    );
}

export default CityCard;



