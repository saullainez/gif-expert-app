import React from 'react'
import PropTypes from 'prop-types';

export const Loading = ({ loading }) => {
    return (
        <>
            { loading && <p className="animate__animated animate__flash">Loading...</p> }
        </>
    )
}

Loading.propTypes = {
    loading: PropTypes.bool.isRequired
}



