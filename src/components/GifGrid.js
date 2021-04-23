import React from 'react'

export const GifGrid = ( { category } ) => {

    const getGifs = async() => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=boca juniors&api_key=lV7Z03JbwePPaOSjsvETxUV4icZt5ECd&limit=10';
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        } )

        console.log(gifs);
    }

    getGifs();

    return (
        <>
            <h3>{ category }</h3>  
        </>
    )
}
