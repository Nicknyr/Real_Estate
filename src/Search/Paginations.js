import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }));


const Paginations = ({ listingsPerPage, totalListings, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalListings / listingsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
         <ul>
           {pageNumbers.map(number => (
               <li key={number}>
                   <a onClick={() => paginate(number)} href="#">
                       {number}
                   </a>
               </li>
           ))}
       </ul>
    );
}

export default Paginations;