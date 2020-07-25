import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import theme from './Theme';
import Typography from '@material-ui/core/Typography';
import SearchHouseItems from './SearchHouseItems';
import axios from 'axios';


const useStyles = makeStyles({
    section: {
        margin: '5rem 0'
    },
});

export default function Features() {
    const classes = useStyles();
    const [houseData, getHouseData] = useState();

    // Headers for API call
    let headers = {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "realtor.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_API_KEY
        }
    };

    useEffect(() => {
        async function fetchData() {
            const data =  await axios.get(`https://realtor.p.rapidapi.com/properties/v2/list-for-rent?sort=relevance&city=Miami&state_code=FL&limit=200&offset=0`, headers);
            const properties = data.data.properties;

            // Iterates through data and grabs all the data for house listings
            const listings = properties.map((listing, index) => {
                let arr = [];
                arr.push(listing.address.city);
                arr.push(listing.address.county);
                arr.push(listing.address.line);
                arr.push(listing.address.neighborhood_name);
                arr.push(listing.address.state);
                arr.push(listing.photos.map((photo) => {
                    return photo.href;
                }));
                arr.push(listing.address.year_built);

                return arr;
            });

            // House listing data is put into houseData
            getHouseData(listings);
            
        }
        fetchData();
    }, [])

   console.log(houseData);

    return (
        <div className={classes.section}>
           <Grid container display="flex" justify="center">
               <Grid container>
                    <Box align="left" mb={3}>
                        <Typography variant="h6">
                            Miami, Florida Homes for Sale & Real Estate
                        </Typography>
                        <Typography variant="body1">
                            16,417 homes available
                        </Typography>
                    </Box>
               </Grid>
                {/* Real estate house listings */}
                <SearchHouseItems />
           </Grid>
        </div>
    );
}