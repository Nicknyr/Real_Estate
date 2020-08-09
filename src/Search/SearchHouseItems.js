import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import theme from '../Theme';
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
    const [listingsPerPage] = useState(20);

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

    //console.log('listings : ' + listings);
    return (
        <Grid container>
            <Grid item xs={12} md={6}>
                <HouseListings listings={currentListing} listing_id={listings[0]} loading={loading} />
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

