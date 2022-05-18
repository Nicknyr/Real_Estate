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
//import ImageGallery from 'react-image-gallery';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const useStyles = makeStyles({
    container: {
        background: 'red',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    carousel: {
        width: '500px',
        background: 'green'
    }
});

function Gallery() {
  const classes = useStyles();

  return (
      <Container maxWidth="md" className={classes.container}>
          <Carousel className={classes.carousel}>
            <div>
                <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
                <p className="legend">Legend 4</p>
            </div>
            <div>
                <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
                <p className="legend">Legend 5</p>
            </div>
            <div>
                <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" />
                <p className="legend">Legend 6</p>
            </div>
            <div>
                <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" />
                <p className="legend">Legend 7</p>
            </div>
            <div>
                <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg" />
                <p className="legend">Legend 8</p>
            </div>
            <div>
                <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-9.jpg" />
                <p className="legend">Legend 9</p>
            </div>
            <div>
                <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-10.jpg" />
                <p className="legend">Legend 10</p>
            </div>
        </Carousel>
      </Container>
  );
}

export default Gallery;