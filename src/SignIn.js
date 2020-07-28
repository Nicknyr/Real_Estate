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
import StarHalfIcon from '@material-ui/icons/StarHalf';
import PropTypes from 'prop-types';
import LockIcon from '@material-ui/icons/Lock';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Logo from './assets/logo.svg';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      height: '80%',
      width: '95%',

      [theme.breakpoints.up('sm')]: {
        width: '70%',
        height: '35rem'
      },

      [theme.breakpoints.up('md')]: {
        width: '80%'
      }
    },
    modal: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    grid: {
        height: '100%',
        width: '50%',
        padding: theme.spacing(1),

        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(5)
          }
    },
    left: {
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',

        [theme.breakpoints.up('md')]: {
            width: '50%'
          }
    },
    right: {
        /*
        background: `url(${Home3})`,
        backgroundSize: 'cover'
        */
        backgroundColor: '#3d348b',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%237678ed' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        display: 'none',

        [theme.breakpoints.up('md')]: {
            display: 'inline-flex'
          }
        
    },
    form: {
        margin: '2rem 0'
    },
    helperTestClasses: {
        color: 'red'
    },
    button: {
        margin: '.5rem 0',
        width: '100%',
    },
    formInput: {
        margin: '0rem 0'
    },
    remember: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    signup: {
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        bottom: '50px'
    },
    signupLink: {
        margin: '2rem 0',
        background: 'red'
    }
  }));

export default function SignInModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(false);
  // Remember me checkbox
  const [state, setState] = React.useState({
    checked: true
  });

  // Checkbox
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  // Modal
  const handleOpen = () => {
    setOpen(true);
  };

  //Modal
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
        disableAutoFocus
      >
          <Grid container className={classes.paper}>
              <Grid item className={[classes.grid, classes.left]}>
                  <Typography variant="h5">Log in</Typography>
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
                                    >
                                    Sign In
                                </Button>
                                <Box className={classes.remember}>
                                    <FormControlLabel
                                        control={
                                        <Checkbox
                                            checked={state.checked}
                                            onChange={handleChange}
                                            name="checked"
                                            color="primary"
                                        />
                                        }
                                        label="Remember me"
                                    />
                                    <Link href="#">Forgot Password?</Link>
                                </Box>
                                <Box className={classes.signup}>
                                    <Typography variant="body2">
                                        Don't have an account? 
                                        <Link href="#"> Sign up.</Link>
                                    </Typography>
                                </Box>
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