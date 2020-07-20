import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import Cityscape from './assets/cityscapes.png';
import { positions } from '@material-ui/system';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100%',
    //background: 'salmon',
    display: 'flex',
    alignItems: 'flex-end'
  },
  cityWrapper: {
     display: 'flex',
     alignItems: 'flex-end',
     height: '100%',
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid 
            container
            justify="center"
            alignItems="flex-end"
        >
            <Box className={classes.cityWrapper}>
                <img src={Cityscape} width="600" className={classes.city}/>
            </Box>
        </Grid>
    </div>
  );
}
