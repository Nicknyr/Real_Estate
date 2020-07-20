import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MenuDrawer from './Menu';
import Logo from './assets/logocropped.svg';
import Trulia from './assets/trulia.svg';
import theme from './Theme';


const useStyles = makeStyles((theme) => ({
  root: {
    //flexGrow: 1,
  },
  appBar: {
    boxShadow: 'none'  
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  gridItem: {
    display: 'flex'
  },
  button: {
    display: 'none',
    margin: '0 .3rem',

    '&:hover': {
      //background: theme.palette.primary.main,
      //color: '#FFF'
    },

    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="pink" className={classes.appBar}>
        <Toolbar variant="dense">
        <img src={Trulia} className={classes.logo} />
          <Grid container justify="space-between" alignItems="center">
            <Grid item className={classes.gridItem}>
                <Button variant="text" className={classes.button}>Buy</Button>
                <Button variant="text" className={classes.button}>Rent</Button>
                <Button variant="text" className={classes.button}>Mortgage</Button>
            </Grid>
            <Grid item className={classes.gridItem}>
                <Button variant="text" className={classes.button}>Saved Homes</Button>
                <Button variant="text" className={classes.button}>Saved Searches</Button>
                <Button variant="outlined" className={classes.button}>Sign Up or Login</Button>
            </Grid>
          </Grid>
          <MenuDrawer />
        </Toolbar>
      </AppBar>
    </div>
  );
}
