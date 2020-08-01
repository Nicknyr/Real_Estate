import * as React from 'react';
import { useState } from 'react';
import ReactMapGL, { NavigationControl, Marker, Popup} from 'react-map-gl';
import LocationOnIcon from '@material-ui/icons/LocationOn';
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
import MapPopUp from './MapPopUp';

const useStyles = makeStyles({
    popup: {
        background: 'red',
        height: '50px',
        width: '50px'
    },
    h6: {
        //fontSize: '.7rem'
    },
    houseContainer: {
        height: 'auto',
        width: '15rem'
    }
});

function Map() {
  const classes = useStyles();
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '85vh',
    latitude: 25.761681,
    longitude: -80.191788,
    zoom: 12
  });
  const [selectedListing, setSelectedListing] = useState(10);

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapStyle="mapbox://styles/nicknyr/ckd6irpux09s61iqr0tbnw6lq"
    >
        <div style={{position: 'absolute', right: 10, bottom: 50}}>
          <NavigationControl/>
        </div>
        <Marker 
            latitude={25.768907} 
            longitude={-80.190017} 
            offsetLeft={-20} 
            offsetTop={-10}
            onClick={e => {
                e.preventDefault();
                setSelectedListing(selectedListing);
            }}
        >
          <LocationOnIcon style={ {fontSize: '2.5em', color: '#7678ED'} } onClick={e => {
                e.preventDefault();
                setSelectedListing(selectedListing);
            }}/>
        </Marker>

        {selectedListing ? (
            <Popup 
                latitude={25.768907} 
                longitude={-80.190017} 
                onClose={() => {
                    setSelectedListing(null);
                }}
            >
                <Box className={classes.houseContainer}>
                    <img src={House}  width="100%" />
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
            </Popup>
        ): null}
    </ReactMapGL>
  );
}

export default Map;