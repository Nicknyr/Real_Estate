import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import theme from '../Theme';
import Typography from '@material-ui/core/Typography';
import MapIcon from '@material-ui/icons/Map';
import FilterIcon from '@material-ui/icons/FilterList';

const useStyles = makeStyles({
    controlsContainer: {
        height: '3.5rem',
        width: 'auto',
        background: '#7678ED',
        //opacity: '.7',
        color: 'white',
        borderRadius: '5px',
        position: 'relative',
        zIndex: '100',
        //bottom: '20rem'
    },
    mapIcon: {

    },
    divider: {
        background: 'white',
        margin: '0 1rem'
    },
    button: {
        padding: '0',
        width: '1rem',
        color: 'white'
    },
    icon: {
        marginLeft: '.2rem'
    }
})

export default function Controls({toggleMap, toggleList}) {

    const classes = useStyles();
    return (
        <Grid container display="flex" className={classes.controlsContainer}>
            <Box 
                display="flex" 
                alignItems="center" 
                justifyContent="space-between"  
                z-index="100">
                    <Box display="flex" alignItems="center">
                        <MapIcon 
                            className={classes.icon} 
                            fontSize="medium" 
                            color="white"
                        />
                        <Button 
                            variant="text" 
                            color="primary"
                            className={classes.button}
                            onClick={toggleMap}
                            >
                                Map
                        </Button>
                    </Box>
                    <Divider 
                        orientation="vertical" 
                        className={classes.divider} 
                    />
                    <Box display="flex" alignItems="center">
                        <FilterIcon 
                            className={classes.icon} 
                            fontSize="medium" 
                            color="white"
                        />
                        <Button 
                            variant="text" 
                            color="primary" 
                            className={classes.button}
                            onClick={toggleList}
                            >
                                Sort
                        </Button>
                    </Box>
            </Box>
        </Grid>
    );  
}