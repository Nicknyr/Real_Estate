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
import SvgIcon from '@material-ui/core/SvgIcon';
import Button from '@material-ui/core/Button';
import Miami from './assets/miami.jpg';

const useStyles = makeStyles({
    section: {
        margin: '5rem 0'
    },
    media: {
        height: '300px'
    },
    cardLong: {
        width: '18rem',
        height: '29rem',
        marginTop: '1rem',
        marginRight: '.5rem'
    },
    cardShort: {
        width: '18rem',
        height: '14rem',
        background: 'orange',
        margin: '1rem .5rem'
    },
    cardContainer: {
        display: 'inline-flex',
        justifyContent: 'flex-start'
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
                    <Card className={classes.cardLong}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={Miami}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
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
                    <Grid item>
                        <Card className={classes.cardShort}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                title="User Review"
                                />
                                <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
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
                        <Card className={classes.cardShort}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                title="User Review"
                                />
                                <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
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
                        <Card className={classes.cardShort}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                title="User Review"
                                />
                                <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
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
                        <Card className={classes.cardShort}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                title="User Review"
                                />
                                <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
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