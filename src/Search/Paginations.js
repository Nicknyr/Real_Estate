import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    paginations: {
      background: 'red',
      display: 'flex',
      listStyleType: 'none',
      padding: '0 2rem'
    },
    button: {
      width: '5rem'
    }
}));


const Paginations = ({ listingsPerPage, totalListings, paginate }) => {
    const classes = useStyles();
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalListings / listingsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
         <ul className={classes.paginations}>
           {pageNumbers.map(number => (
               <li key={number}>
                   <a onClick={() => paginate(number)} href="#">
                       <Button variant="outlined" className={classes.button}>{number}</Button>
                   </a>
               </li>
           ))}
       </ul>
    );
}

export default Paginations;