import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import House from '../assets/house3.jpg';
import BathtubOutlinedIcon from '@material-ui/icons/BathtubOutlined';
import KingBedOutlinedIcon from '@material-ui/icons/KingBedOutlined';
import SquareFootOutlinedIcon from '@material-ui/icons/SquareFootOutlined';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';

const useStyles = makeStyles({
    popup: {
        background: 'red',
        height: '50px',
        width: '50px'
    },
    houseContainer: {
        height: '20rem',
        width: '15rem',
        background: 'red'
    },
    image: {
      maxHeight: '10rem !important',
      objectFit: 'contain'
    }
});

function MapPopUp() {
  const classes = useStyles();

  return (
        <Box className={classes.houseContainer}>
            <img src={House} className={classes.image} />
            <Box display="flex">
                <Typography variant="h5" className={classes.price}>$450,000</Typography>
                <Box display="inline-flex" alignItems="center" pl={1}>
                    <ArrowUpwardOutlinedIcon />
                </Box>
            </Box>
            <Box display="inline" display="inline-flex" alignItems="center" mr={1}>
                <KingBedOutlinedIcon />
                <Box pl={.5}>
                    <Typography variant="body1">3bd</Typography>
                </Box>
            </Box>
            <Box display="inline" display="inline-flex" alignItems="center" mr={1}>
                <BathtubOutlinedIcon />
                <Box pl={.5}>
                    <Typography variant="body1">2ba</Typography>
                </Box>                        
            </Box>
            <Box display="inline" display="inline-flex" alignItems="center" mr={1}>
                <SquareFootOutlinedIcon />
                <Box pl={.5}>
                    <Typography variant="body1">2,004 sqft</Typography>
                </Box>
            </Box>
            <Box align="left" className={classes.address}>
                2950 SW 3rd Ave #9A
                Coral Way, Miami, Florida
            </Box>
        </Box>
  );
}

export default MapPopUp;

/*
export default class CityInfo extends PureComponent {
  render() {
    const {info} = this.props;
    const displayName = `${info.city}, ${info.state}`;

    return (
      <div>
        <div>
          {displayName} |{' '}
          <a
            target="_new"
            href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${displayName}`}
          >
            Wikipedia
          </a>
        </div>
        <img width={240} src={info.image} />
      </div>
    );
  }
}
*/