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
    cardActionArea: {
        //height: '100%',
        
        transition: `transform .2s`, /* Animation */

        '&:hover, &:focus': {
            transform: `scale(1.1)`
        }
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
});

const ReviewCard = ({ user, review }) => {
    const classes = useStyles();
    return (
        <Grid item>
            <Card className={[classes.cardShort, classes.cardBackground1]} raised>
                <CardActionArea className={classes.cardActionArea}>
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
                                {user}
                            </Typography>
                            <Typography variant="body2" className={classes.overlay}>
                                {review}
                            </Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}

export default ReviewCard;
