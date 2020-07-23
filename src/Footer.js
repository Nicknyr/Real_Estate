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
import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    paddingTop: '3rem'
  },
  cityWrapper: {
     display: 'flex',
     alignItems: 'flex-end',
     height: '100%',
  },
  ul: {
    listStyleType: 'none',
    display: 'flex'
  },
  legal: {
    marginTop: '3rem',
    marginBottom: '3rem'
  },
  h6: {
    fontSize: '1.1rem'
  },
  links: {
    fontSize: '.8rem'
  }
}));

export default function Footer() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <div className={classes.root}>
        <Grid 
            container
            justify="center"
            alignItems="flex-end"
        >
          <Grid container xs={12} md={9}>
            <Grid item xs={12} md={3}>
              <Box align="left" p={3}>
                  <Typography variant="h6" className={classes.h6}>Real Estate Markets</Typography>
                  <Link href="#" onClick={preventDefault} display="block" className={classes.links}>
                    New York Real Estate
                  </Link>
                  <Link href="#" onClick={preventDefault} display="block" className={classes.links}>
                    Texas Real Estate
                  </Link>
                  <Link href="#" onClick={preventDefault} display="block" className={classes.links}>
                    Florida Real Estate
                  </Link>
                  <Link href="#" onClick={preventDefault} display="block" className={classes.links}>
                    North Carolina Real Estate
                  </Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box align="left" p={3}>
                  <Typography variant="h6" className={classes.h6}>Popular Searches</Typography>
                  <Link href="#" onClick={preventDefault} display="block" className={classes.links}>
                    Apartments for Rent Near Me
                  </Link>
                  <Link href="#" onClick={preventDefault} display="block" className={classes.links}>
                    House for Rent Near Me
                  </Link>
                  <Link href="#" onClick={preventDefault} display="block" className={classes.links}>
                    Houses for Sale Near Me
                  </Link>
                  <Link href="#" onClick={preventDefault} display="block" className={classes.links}>
                    Houses for Sale Near Me by Owner
                  </Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box align="left" p={3}>
                  <Typography variant="h6" className={classes.h6}>Explore</Typography>
                  <Link href="#" onClick={preventDefault} display="block" className={classes.links}>
                    <Box>
                      <FacebookIcon />
                      <span>Facebook</span>
                    </Box>
                  </Link>
                  <Link href="#" onClick={preventDefault} display="block" className={classes.links}>
                    <Box>
                      <InstagramIcon />
                      <span>Instagram</span>
                    </Box>
                  </Link>
                  <Link href="#" onClick={preventDefault} display="block" className={classes.links}>
                    <Box>
                      <TwitterIcon />
                      <span>Twitter</span>
                    </Box>
                  </Link>
                  <Link href="#" onClick={preventDefault} display="block" className={classes.links}>
                    <Box>
                      <PinterestIcon />
                      <span>Pinterest</span>
                    </Box>
                  </Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box align="left" p={3}>
                  <Typography variant="h6" className={classes.h6}>For Professionals</Typography>
                  <Link href="#" onClick={preventDefault} display="block" className={classes.links}>
                    U.S Property Records
                  </Link>
                  <Link href="#" onClick={preventDefault} display="block" className={classes.links}>
                    Popular Counties
                  </Link>
                  <Link href="#" onClick={preventDefault} display="block" className={classes.links}>
                    Rental Communities
                  </Link>
                  <Link href="#" onClick={preventDefault} display="block" className={classes.links}>
                    Real Estate Leads
                  </Link>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} md={9} className={classes.legal}>
            <Typography variant="body2">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit eget gravida cum sociis natoque penatibus et. Nibh praesent tristique magna sit.
            </Typography>
          </Grid>
          <Grid container justify="center">
            <Box className={classes.cityWrapper}>
                <img src={Cityscape} width="600" className={classes.city}/>
            </Box>
          </Grid>
        </Grid>
    </div>
  );
}
