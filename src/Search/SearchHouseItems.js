import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import theme from '../Theme';
import Typography from '@material-ui/core/Typography';
import House from '../assets/house3.jpg';
import BathtubOutlinedIcon from '@material-ui/icons/BathtubOutlined';
import KingBedOutlinedIcon from '@material-ui/icons/KingBedOutlined';
import SquareFootOutlinedIcon from '@material-ui/icons/SquareFootOutlined';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import axios from 'axios';
import HouseListings from './HouseListings';
import Paginations from './Paginations';
import Map from './Map';

const useStyles = makeStyles({
    section: {
        margin: '5rem 0'
    },
    paper: {
        padding: theme.spacing(1)
    },
    houseContainer: {
        height: 'auto',
        margin: '2rem 0',
        border: '2px solid black'
    },
    price: {
        fontSize: '1.3rem'
    },
    address: {
        lineHeight: '1.5'
    }
});


export default function SearchHouseItems() {
    const classes = useStyles();
    const [houseData, getHouseData] = useState([]);
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [listingsPerPage] = useState(5);

    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    // Headers for API call
    const headers = {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "realtor.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_API_KEY
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const data =  await axios.get(`https://realtor.p.rapidapi.com/properties/v2/list-for-rent?sort=relevance&city=Miami&state_code=FL&limit=100&offset=0`, headers);

            const properties = data.data.properties;
            //console.log(properties);

            /// Iterates through data and grabs all the data for house listings
            const listings =  properties.map((listing, index) => {
                const arr = [];
                arr.push(
                    listing.listing_id,
                    listing.address.line, 
                    listing.address.city, 
                    listing.address.county, 
                    listing.address.neighborhood_name, 
                    listing.address.state,
                    listing.year_built,
                    listing.address.lat,
                    listing.address.lon);

                arr.push(listing.photos.map((photo) => {
                    return photo.href;
                }));

                return arr;
            });

            // House listing data is put into houseData
            //getHouseData(listings);
            setListings(listings);
            setLoading(false);
        }
        //fetchData();
    }, [])

   const data = houseData;

   // Get current post
   const indexOfLastListing = currentPage * listingsPerPage;
   const indexOfFirstListing = indexOfLastListing - listingsPerPage;
   const currentListing = listings.slice(indexOfFirstListing, indexOfLastListing);

   // Change page
   const paginate = pageNumber => setCurrentPage(pageNumber);

    console.log('listings[7] contains : ' + listings[7]);
    return (
        <Grid container>
            <Grid item xs={12} md={6}>
                <HouseListings listings={currentListing} loading={loading} />
                <Paginations 
                    listingsPerPage={listingsPerPage} 
                    totalListings={listings.length} 
                    paginate={paginate}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <Map listings={listings}/>
            </Grid>
        </Grid>
    );
}

/*
<Grid item>
<Paper className={classes.paper}>
    <Box className={classes.houseContainer}>
        <img src={House} height="auto" width="100%"/>
        <Box display="flex">
            <Typography variant="h5" className={classes.price}>$450,000</Typography>
            <Box display="inline-flex" alignItems="center" pl={1}>
                <ArrowUpwardOutlinedIcon />
            </Box>
        </Box>
        <Box display="inline" display="inline-flex" alignItems="center" mr={2}>
            <KingBedOutlinedIcon />
            <Box pl={.5}>
                <Typography variant="body1">3bd</Typography>
            </Box>
        </Box>
        <Box display="inline" display="inline-flex" alignItems="center" mr={2}>
            <BathtubOutlinedIcon />
            <Box pl={.5}>
                <Typography variant="body1">2ba</Typography>
            </Box>                        
        </Box>
        <Box display="inline" display="inline-flex" alignItems="center" mr={2}>
            <SquareFootOutlinedIcon />
            <Box pl={.5}>
                <Typography variant="body1">2,004 sqft</Typography>
            </Box>
        </Box>
        <Box align="left" className={classes.address}>
            2950 SW 3rd Ave #9A
            Coral Way, Miami, Florida
        </Box>
    </Box>
</Paper>
</Grid>

            {data.map((listing) => {
                console.log('x : ' + listing);
                return (
                    <Grid item>
                        <Paper className={classes.paper}>
                            <Box className={classes.houseContainer}>
                                <img src={listing[5]} height="auto" width="100%"/>
                                <Box display="flex">
                                    <Typography variant="h5" className={classes.price}>$450,000</Typography>
                                    <Box display="inline-flex" alignItems="center" pl={1}>
                                        <ArrowUpwardOutlinedIcon />
                                    </Box>
                                </Box>
                                <Box display="inline" display="inline-flex" alignItems="center" mr={2}>
                                    <KingBedOutlinedIcon />
                                    <Box pl={.5}>
                                        <Typography variant="body1">3bd</Typography>
                                    </Box>
                                </Box>
                                <Box display="inline" display="inline-flex" alignItems="center" mr={2}>
                                    <BathtubOutlinedIcon />
                                    <Box pl={.5}>
                                        <Typography variant="body1">2ba</Typography>
                                    </Box>                        
                                </Box>
                                <Box display="inline" display="inline-flex" alignItems="center" mr={2}>
                                    <SquareFootOutlinedIcon />
                                    <Box pl={.5}>
                                        <Typography variant="body1">2,004 sqft</Typography>
                                    </Box>
                                </Box>
                                <Box align="left" className={classes.address}>
                                    {listing[0]}
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                );
            })}


*/