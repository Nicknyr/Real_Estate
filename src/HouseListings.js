import React from 'react'

const HouseListings = ({listings, loading}) => {
    if(loading) {
        return <h2>loading</h2>;
    }

    return (
        <ul>
            {listings.map((listing, index) => (
                <li key={index}>
                    {/*<p>{post}</p>*/}
                    <img src={listing[5][0]} height="200" />
                </li>
            ))}
        </ul>
    )
}

export default HouseListings;