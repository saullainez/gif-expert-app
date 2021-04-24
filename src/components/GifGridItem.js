import React from 'react'

export default function GifGridItem( { title, url } ) {
    return (
        <div>
            <img src={ url } alt={ title } />
            <p> { title } </p>
        </div>
    )
}
