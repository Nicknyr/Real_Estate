import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import InputBase from '@material-ui/core/InputBase';
import fade from '@material-ui/core/Fade';
import theme from '../Theme';
import Typography from '@material-ui/core/Typography';
import MapIcon from '@material-ui/icons/Map';
import FilterIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import ButtonFilters from './ButtonFilters';

const useStyles = makeStyles({
    searchContainer: {
        //background: 'red',
        width: '100%',
        marginBottom: '.5rem'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        /*
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        */
        border: '1px solid #2A2A33',
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
      },
})

export default function SearchBar() {

    const classes = useStyles();
    return (
        <Grid container display="flex" className={classes.controlsContainer}>
            <Box className={classes.searchContainer}>
                <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search..."
                    classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search ' }}
                />
                </div>
            </Box>
            <ButtonFilters />
        </Grid>
    );  
}