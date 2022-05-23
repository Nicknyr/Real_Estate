import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import MenuDrawer from './Menu';
import Logo from './assets/logocropped.svg';
import Trulia from './assets/trulia.svg';
import theme from './Theme';
import SignInModal from './SignIn';
import Portal from '@material-ui/core/Portal';
import House from '@material-ui/icons/House';
import Icon from '@material-ui/core/Icon';

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
  const [showModal, setShowModal] = React.useState(false);

  const displayModal = (event) => {
    setShowModal(!showModal);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="pink" className={classes.appBar}>
        <Toolbar variant="dense">
        {/*<img src={Trulia} className={classes.logo} />*/}
        <House color="primary" fontSize="large" />
          <Grid container justify="space-between" alignItems="center">
            <Grid item className={classes.gridItem}>
                <Link href="/search">
                  <Button variant="text" className={classes.button}>
                    Buy
                  </Button>
                </Link>
                <Link href="/search">
                  <Button variant="text" className={classes.button}>
                    Rent
                  </Button>
                </Link>
                <Button variant="text" className={classes.button}>Mortgage</Button>
            </Grid>
            <Grid item className={classes.gridItem}>
                <Button variant="text" className={classes.button}>Saved Homes</Button>
                <Button variant="text" className={classes.button}>Saved Searches</Button>
                <Button variant="outlined" className={classes.button} onClick={displayModal}>
                  Sign Up or Login
                </Button>
            </Grid>
          </Grid>
          <MenuDrawer />
        </Toolbar>
      </AppBar>
    </div>
  );
}
