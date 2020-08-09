import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { positions } from '@material-ui/system';
import Navbar from '../Navbar';
import theme from '../Theme';
import House3 from '../assets/house3.jpg';
import House4 from '../assets/house4.jpg';
import House5 from '../assets/house5.jpg';
import ImageGallery from './ImageGallery';
import SimpleModal from './Modal';

const useStyles = makeStyles({
    paper: {
        
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        height: 'auto',
        marginTop: theme.spacing(3),
        
    },
    largeImage: {
        position: 'relative'
    },
    smallImage: {
        height: '50%'
    },
    nestedContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    image: {
        objectFit: 'cover',
        height: '100%',
        width: '100%',
        /*
        transition: `transform .2s`, 

        '&:hover, &:focus': {
            transform: `scale(1.1)`
        }
        */
    },
    chip: {
        position: 'absolute',
        top: '25px',
        left: '20px',
        zIndex: '10',
        backgroundColor: '#FFF',
        color: '#7678ED',
        fontWeight: 'bold',
        fontSize: '.9rem',
        padding: '.2rem'
    },
    button: {
       
    },
    bottom: {
        //position: 'absolute',
        height: '100%',
        width: '100%'
    }
});

function ViewHouse() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <>
      <Navbar />
      <Container maxWidth="md" onClick={}>
        <Paper elevation={3} className={classes.paper}>
            <Grid container className={classes.container} display="flex" m={3}>
                <Grid item xs={9} className={classes.largeImage}>
                    <Box pt={1} pb={.5} pl={1} pr={.5} position="relative">
                        <Chip 
                            variant="outlined" 
                            size="small" 
                            label="For Sale" 
                            className={classes.chip}
                        />
                        <img src={House3} width="100%" className={classes.image} />
                    </Box>
                </Grid>
                <Grid item xs={3} className={classes.nestedContainer}>
                    <Grid item className={classes.smallImage}>
                        <Box pl={.5} pr={1} pt={1} pb={.5} className={classes.image}>
                            <img src={House4} width="100%" className={classes.image} />
                        </Box>
                    </Grid>
                    <Grid item className={classes.smallImage}>
                        <Box pl={.5} pr={1} pt={.5} pb={1} className={[classes.image, classes.bottom]} positon="relative">
                            <Button className={classes.chip}> 
                                <PhotoLibraryIcon />
                            </Button>
                            <img src={House5} width="100%" className={classes.image} />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
      </Container>
        <SimpleModal />
      </>
  );
}

export default ViewHouse;