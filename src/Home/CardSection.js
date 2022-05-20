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
import CityCard from './CityCard';
import ReviewCard from './ReviewCard';
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

const useStyles = makeStyles({
    container: {
        //background: 'red',
        width: '100rem',
        //height: '29rem',
        height: 'auto',
        overflow: 'contain',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        //flexWrap: 'wrap',
        //alignItems: 'stretch',
        
        [theme.breakpoints.up('md')]: {
            //height: 'auto',
            flexDirection: 'row',
          },
    },
    tallContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1rem',

        [theme.breakpoints.up('md')]: {
            width: '25%',
            marginTop: '0'
        }
    },
    smallContainer: {
        //background: 'orange',
        display: 'flex',
        justifyContent: 'center',
        

        [theme.breakpoints.up('md')]: {
            width: '75%',
        }
    }
});

const CardSection = ({image, city, neighborhood, variant}) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.container}>
            <Grid container className={classes.tallContainer}>
                <Grid item>
                    <CityCard 
                        image={Miami} 
                        city={'Miami, Florida'} 
                        neighborhood={'South Beach'}
                        variant={'long'}
                    />
                </Grid>
            </Grid>
            <Grid container className={classes.smallContainer}>
                <Grid item>
                    <ReviewCard 
                        user={'Nick, New York resident'} 
                        review={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.'}
                    />
                </Grid>
                <Grid item>
                    <CityCard 
                        image={Home1} 
                        city={'Fort Lauderdale, Florida'} 
                        neighborhood={'Las Olas Isles'}
                        variant={'short'}
                    />
                </Grid> 
                <Grid item>
                    <CityCard 
                        image={Home2} 
                        city={'Boston, Massachusets'} 
                        neighborhood={'Brookline'}
                        variant={'short'}
                    /> 
                </Grid>
                <Grid item>
                    <CityCard 
                        image={Home3} 
                        city={'San Diego, California'} 
                        neighborhood={'La Jolla'}
                        variant={'short'}
                    /> 
                </Grid>
                <Grid item>
                    <CityCard 
                        image={Home7} 
                        city={'Missoula, Montana'} 
                        neighborhood={'Lower Rattlesnake'}
                        variant={'short'}
                    /> 
                </Grid>
                <Grid item>
                    <CityCard 
                        image={Home3} 
                        city={'San Diego, California'} 
                        neighborhood={'La Jolla'}
                        variant={'short'}
                    /> 
                </Grid>
            </Grid>
        </Grid>
    );
}

export default CardSection;



