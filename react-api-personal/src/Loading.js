import React from 'react'

function Loading({ loading, children }) {
    return (
        loading ?
            <p>Loading...</p> :
            children
    )
}

export default Loading
