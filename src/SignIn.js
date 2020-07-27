import React from 'react';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import Home3 from './assets/home3.jpg';
import FormGroup from '@material-ui/core/FormGroup';
import { FormikContext } from 'formik';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { fade, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { useChangeTheme } from "./Theme";
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress, Link } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
//import theme from './FormTheme';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import PropTypes from 'prop-types';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';
//import { faTwitter, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import LockIcon from '@material-ui/icons/Lock';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      height: '80%',
      width: '80%'
    },
    modal: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    grid: {
        height: '100%',
        width: '50%',
        padding: theme.spacing(5)
    },
    left: {
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        //padding: theme.spacing(5)
    },
    right: {
        background: `url(${Home3})`,
        backgroundSize: 'cover'
    },
    form: {
        //background: 'red',
        margin: '2rem 0'
    },
    helperTestClasses: {
        color: 'red'
    },
    button: {
        margin: '.5rem 0'
    },
    formInput: {
        margin: '0rem 0'
    }   
  }));

export default function SignInModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
          <Grid container className={classes.paper}>
              <Grid item className={[classes.grid, classes.left]}>
                  <Typography variant="h5">Sign In</Typography>
                  <Formik
                        initialValues={{
                            username: '',
                            password: '',
                        }}

                        validate = {values => {
                            const errors = {};

                            if(!values.username) {
                                errors.username = 'Required';
                            }

                            if(!values.password) {
                                errors.password = 'Required';
                            }
                            
                            return errors;
                        }}

                        onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            setSubmitting(false);
                            alert(JSON.stringify(values, null, 2));
                        }, 500);
                        }}
                    >
                        {({ submitForm, isSubmitting }) => (
                            <Form className={classes.form}>
                                <Field
                                    component={TextField}
                                    type="username"
                                    name="username"
                                    //label="Username"
                                    fullWidth="true"
                                    variant="outlined"
                                    size="small"
                                    margin="dense"
                                    color="main"
                                    required
                                    placeholder="Username"
                                    id="input-with-icon-adornment"
                                    //FormHelperTextProps={{ classes: helperTestClasses }}
                                    InputProps={{
                                        className: classes.formInput,
                                        startAdornment: <InputAdornment position="start">
                                                            <AccountCircleIcon />
                                                        </InputAdornment>
                                    }}
                                />
                                <br />
                                <Field
                                    component={TextField}
                                    name="password"
                                    type="password"
                                    //label="Password"
                                    fullWidth="true"
                                    variant="outlined"
                                    size="small"
                                    margin="dense"
                                    id="outlined-error"
                                    color="main"
                                    required
                                    placeholder="Password"
                                    id="input-with-icon-adornment"
                                    //FormHelperTextProps={{ classes: helperTestClasses }}
                                    InputProps={{
                                        className: classes.formInput,
                                        startAdornment: <InputAdornment position="start">
                                                            <LockIcon />
                                                        </InputAdornment>
                                    }}
                                />
                                <br></br>
                                {isSubmitting && <LinearProgress />}

                                <Button
                                    variant="contained"
                                    disabled={isSubmitting}
                                    onClick={submitForm}
                                    className={classes.button}
                                    color="red"
                                    >
                                    Sign In
                                </Button>
                                <Typography variant="body2">
                                    Don't have an account? 
                                    <Link href="#">Sign up.</Link>
                                </Typography>
                            </Form>
                            )}
                    </Formik>
              </Grid>
              <Grid item className={[classes.grid, classes.right]}></Grid>
          </Grid>
      </Modal>
    </div>
  );
}