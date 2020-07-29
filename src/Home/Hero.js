import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import MenuDrawer from '../Menu';
import Home from '../assets/home2.jpg';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import SearchBar from './SearchBar';

const useStyles = makeStyles((theme) => ({
  root: {
    //flexGrow: 1
  },
  heroContainer: {
      height: '75vh',
      background: `url(${Home})`,
      display: 'flex',
      justifyContent: 'center',
      backgroundSize: 'cover',

      [theme.breakpoints.up('sm')]: {
        backgroundPosition: 'left',
        backgroundSize: '100% auto',
      },
  },
  header: {
    color: '#FFF',
    textShadow: '0 2px 4px rgba(59, 65, 68, .6)',
    fontWeight: 'bold',
    fontSize: '1.7rem',

    [theme.breakpoints.up('sm')]: {
      fontSize: '3.5rem'
    }

  },
  input: {
    background: 'white'
  },
  button: {
    color: 'white',
    border: '1px solid white',
    textShadow: '0 2px 4px rgba(59, 65, 68, .6)',
    fontSize: '1.2rem',
    fontWeight: 'bolder',

    '&:hover': {
      background: 'white',
      color: 'green'
    }
  },
  buttonGroup: {
    marginTop: '2rem',
    marginBottom: '.5rem'
  }
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid xs={12}>
        <Paper className={classes.heroContainer}>
          <Box 
          align="center"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          >
            <Typography variant="h1" className={classes.header}>Discover a new  home</Typography>
            <Typography variant="h1" className={classes.header}>you'll love</Typography>
            <ButtonGroup variant="outlined" size="large" className={classes.buttonGroup}>
              <Button variant="outlined" className={classes.button}>Buy</Button>
              <Button variant="outlined" className={classes.button}>Rent</Button>
              <Button variant="outlined" className={classes.button}>Sold</Button>
            </ButtonGroup>
            <SearchBar />
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
