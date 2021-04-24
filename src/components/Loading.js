import React from 'react'
import PropTypes from 'prop-types';

export const Loading = ({ loading }) => {
    return (
        <>
            { loading && <p>Loading</p> }
        </>
    )
}

Loading.propTypes = {
    loading: PropTypes.bool.isRequired
}



