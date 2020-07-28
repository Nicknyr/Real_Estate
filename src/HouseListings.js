import React from 'react'

const HouseListings = ({posts, loading}) => {
    if(loading) {
        return <h2>loading</h2>;
    }

    return (
        <ul>
            {posts.map((post, index) => (
                <li key={post.id}>
                    {/*<p>{post}</p>*/}
                    <img src={post[5][0]} height="200" />
                </li>
            ))}
        </ul>
    )
}

export default HouseListings;